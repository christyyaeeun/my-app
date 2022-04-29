import React, { useState, useEffect } from 'react';
import { API, Storage } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';
import {
    createPost as createPostMutation,
    deletePost as deletePostMutation,
} from '../../graphql/mutations';

import {
    Input,
    Image,
    Button,
    Text,
    Box,
    Icon,
    Container,
    useColorModeValue,
    Divider,
    Stack,
    Spacer,
    IconButton,
    HStack,
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Textarea,
} from '@chakra-ui/react';
import { BiImageAdd } from 'react-icons/bi';
import { CloseIcon, SmallAddIcon } from '@chakra-ui/icons';
import { IoIosClose } from 'react-icons/io';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import format from 'date-fns/format';

const initialFormState = { name: '', description: '', image: {} };
const Overlay = () => (
    <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
    />
);

function Post(user) {
    const [ posts, setPosts ] = useState([]);
    const [ formData, setFormData ] = useState(initialFormState);
    const [ overlay, setOverlay ] = React.useState(<Overlay />);
    const [ isOpen, setIsOpen ] = useState(false);

    useEffect(() => {
        fetchPosts();
    }, []);

    async function fetchPosts() {
        const apiData = await API.graphql({ query: listPosts });
        const postsFromAPI = apiData.data.listPosts.items;
        await Promise.all(
            postsFromAPI.map(async post => {
                if (post.image) {
                    const image = await Storage.get(post.image);
                    post.image = image;
                }
                return post;
            })
        );
        setPosts(apiData.data.listPosts.items);
        console.log('posts', posts);
    }

    async function createPost() {
        if (!formData.name || !formData.description) return;
        await API.graphql({
            query: createPostMutation,
            variables: { input: formData },
        });
        if (formData.image) {
            const image = await Storage.get(formData.image);
            formData.image = image;
        }
        setPosts([ ...posts, formData ]);
        setFormData(initialFormState);
    }

    async function onChange(e) {
        if (!e.target.files[ 0 ]) return;
        const file = e.target.files[ 0 ];
        setFormData({ ...formData, image: file.name });
        await Storage.put(file.name, file);
        fetchPosts();
    }

    const Image = ({ src, alt, fallback }) => {
        const [ error, setError ] = useState();

        const onError = () => {
            setError(true);
        };
        return error ? fallback : <img src={ src } alt={ alt } onError={ onError } />;
    };

    async function deletePost({ id }) {
        const newPostsArray = posts.filter(post => post.id !== id);
        setPosts(newPostsArray);
        await API.graphql({
            query: deletePostMutation,
            variables: { input: { id } },
        });
        console.log('new posts', newPostsArray);
    }

    function onClose() {
        setIsOpen(false);
    }

    return (
        <div className="Posts">
            <Container maxW={ 'sm' } px={ '5' }>
                <Flex mb="1em" justifyContent={ 'flex-end' }>
                    <Button
                        mt={ '-2.4em' }
                        as={ IconButton }
                        icon={ <SmallAddIcon /> }
                        bg={ useColorModeValue('gray.100', 'gray.600') }
                        color="gray.400"
                        onClick={ () => {
                            setOverlay(<Overlay />);
                            setIsOpen(true);
                        } }
                    ></Button>
                    <Modal
                        isCentered
                        onClose={ onClose }
                        isOpen={ isOpen }
                        motionPreset="slideInBottom"
                    >
                        { overlay }
                        <ModalOverlay />

                        <ModalContent maxW={ '400px' }>
                            <ModalHeader
                                pb={ '0' }
                                color={ useColorModeValue('#a5bbdb', 'white') }
                            >
                                Create Post
                            </ModalHeader>
                            <ModalCloseButton color={ 'gray.500' } />
                            <ModalBody>
                                <Box px="2" borderRadius="lg">
                                    <Container centerContent pt="3">
                                        <Stack spacing={ 3 } minW={ '300px' }>
                                            <Box>
                                                <Input
                                                    size={ 'sm' }
                                                    color={ useColorModeValue('gray.500', 'white') }
                                                    onChange={ e =>
                                                        setFormData({ ...formData, name: e.target.value })
                                                    }
                                                    placeholder="Title"
                                                    value={ formData.name }
                                                />
                                            </Box>

                                            <Textarea
                                                size={ 'sm' }
                                                minH={ '150px' }
                                                color={ 'gray.500' }
                                                onChange={ e =>
                                                    setFormData({
                                                        ...formData,
                                                        description: e.target.value,
                                                    })
                                                }
                                                placeholder="Post description"
                                                value={ formData.description }
                                            />

                                            <Box className="image-upload" w="100%">
                                                <label for="file-input">
                                                    <Icon
                                                        className="img"
                                                        color="#8dbae8"
                                                        w={ 6 }
                                                        h={ 6 }
                                                        as={ BiImageAdd }
                                                    />
                                                </label>
                                                <input
                                                    id="file-input"
                                                    type="file"
                                                    onError={ e => (e.target.style.display = 'none') }
                                                    onChange={ onChange }
                                                />
                                            </Box>
                                        </Stack>
                                    </Container>
                                </Box>
                                <Container>
                                    <Flex pb={ '4' } justifyContent={ 'flex-end' }>
                                        <Button
                                            variant={ 'outline' }
                                            bg={ 'transparent' }
                                            size={ 'md' }
                                            shadow={ 'base' }
                                            w={ '80px' }
                                            h={ '8' }
                                            color={ '#a5bbdb' }
                                            onClick={ createPost }
                                        >
                                            Save
                                        </Button>
                                    </Flex>
                                </Container>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                </Flex>
            </Container>

            <div style={ { marginBottom: 30 } }>
                { posts.map(post => (
                    <div key={ post.id || post.name }>
                        <Container p={ '5' } maxW={ '450px' }>
                            <Container id="img-card" p={ '0' }>
                                <Container
                                    id="card-wrap"
                                    borderWidth="1px"
                                    bg={ useColorModeValue('white', 'gray.600') }
                                    boxShadow={ '2xl' }
                                    rounded={ 'lg' }
                                    p={ '2' }
                                >
                                    <Container
                                        p={ '0' }
                                        id="img-wrap"
                                        bg={ useColorModeValue('white', 'gray.600') }
                                    >
                                        <Box
                                            id="img-container"
                                            maxW={ 'sm' }
                                            overflow={ 'hidden' }
                                            maxH={ { base: '350px', lg: '350px' } }
                                        >
                                            <Flex mb="1" h={ '0' }>
                                                <Spacer />
                                                <IconButton
                                                    bg={ 'transparent' }
                                                    w="8"
                                                    color="gray.500"
                                                    icon={ <IoIosClose /> }
                                                    onClick={ () => deletePost(post) }
                                                />
                                            </Flex>
                                            <Image
                                                borderRadius={ 'sm' }
                                                id="post-img"
                                                src={ post.image }
                                                objectFit="cover"
                                                m={ 'auto' }
                                            />
                                        </Box>
                                    </Container>
                                    <Divider color={ 'gray.400' } />
                                    <Container bg={ useColorModeValue('white', 'gray.600') }>
                                        <Stack>
                                            {/* <Button onClick={() => deletePost(post)}>
                        Delete post
                      </Button> */}
                                            <Box bg={ '' }>
                                                <HStack spacing="10px" alignItems={ 'baseline' }>
                                                    <Box pt={ '2' }>
                                                        <Text
                                                            color={ useColorModeValue('#8cabcd', 'white') }
                                                            fontWeight={ 600 }
                                                        >
                                                            @{ post.owner } |
                                                        </Text>
                                                    </Box>
                                                    <Box>
                                                        <Text
                                                            color={ useColorModeValue('gray.600', 'white') }
                                                            fontSize={ '1rem' }
                                                        >
                                                            { post.name }
                                                        </Text>
                                                    </Box>
                                                </HStack>
                                                <Box my={ '2' }>
                                                    <Text
                                                        color={ useColorModeValue('gray.500', 'white') }
                                                        fontSize={ '.9rem' }
                                                        paddingLeft={ '.1em' }
                                                    >
                                                        { post.description }
                                                    </Text>
                                                    <small>
                                                        { format(new Date(post.createdAt), 'MM/dd/yyyy') }
                                                    </small>
                                                    {/* <Text color={'gray.500'}>
                            <small>
                              {format(new Date(post.createdAt), 'MM/dd/yyyy')}
                            </small>
                          </Text> */}
                                                </Box>
                                            </Box>
                                        </Stack>
                                    </Container>
                                </Container>
                            </Container>
                        </Container>
                    </div>
                )) }
            </div>
        </div>
    );
}

export default Post;

{
    /* <h2>{post.name}</h2>
              <p>{post.description}</p>
              <Button onClick={() => deletePost(post)}>Delete post</Button>
              {post.image && <img src={post.image} />} */
}
