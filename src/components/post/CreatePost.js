// CreatePost.js

import React, { useState } from 'react';
import Button from './Button';
import { v4 as uuid } from 'uuid';
import { Storage, API, Auth } from 'aws-amplify';
import { createPost } from '../../graphql/mutations';
import { Box, Container, Spacer, Textarea, Input, Image, Icon } from '@chakra-ui/react';
import { SmallAddIcon, CloseIcon } from '@chakra-ui/icons';
import { BiImageAdd } from 'react-icons/bi'
import {
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  Flex,
  Stack,
  IconButton,
} from '@chakra-ui/react';
import { BackButton } from '../BackButton';
/* Initial state to hold form input, saving state */
const initialState = {
  name: '',
  description: '',
  image: {},
  file: '',
  saving: false,
};

export default function CreatePost({
  // updateOverlayVisibility,
  updatePosts,
  posts,
}) {
  /* 1. Create local state with useState hook */
  const [formState, updateFormState] = useState(initialState);

  /* 2. onChangeText handler updates the form state when a user types into a form field */
  function onChangeText(e) {
    e.persist();
    updateFormState(currentState => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
  }

  /* 3. onChangeFile handler will be fired when a user uploads a file  */
  function onChangeFile(e) {
    e.persist();
    if (!e.target.files[0]) return;
    const fileExtPosition = e.target.files[0].name.search(/.png|.jpg|.gif/i);
    const firstHalf = e.target.files[0].name.slice(0, fileExtPosition);
    const secondHalf = e.target.files[0].name.slice(fileExtPosition);
    const fileName = firstHalf + '_' + uuid() + secondHalf;
    console.log(fileName);
    const image = { fileInfo: e.target.files[0], name: fileName };
    updateFormState(currentState => ({
      ...currentState,
      file: URL.createObjectURL(e.target.files[0]),
      image,
    }));
  }

  async function save() {
    try {
      const { name, description, image } = formState;
      if (!name || !description || !image.name) return;
      updateFormState(currentState => ({ ...currentState, saving: true }));
      const postId = uuid();
      const postInfo = {
        name,
        description,
        image: formState.image.name,
        id: postId,
      };

      await Storage.put(formState.image.name, formState.image.fileInfo, {
        level: 'private',
      });
      await API.graphql({
        query: createPost,
        variables: { input: postInfo },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      }); // updated
      const { username } = await Auth.currentAuthenticatedUser(); // new
      updatePosts([
        ...posts,
        { ...postInfo, image: formState.file, owner: username },
      ]); // updated
      updateFormState(currentState => ({ ...currentState, saving: false }));
      // updateOverlayVisibility(false);
    } catch (err) {
      console.log('error: ', err);
    }
  }
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container>
      <Flex mb="2em">
        <Menu onClose={onClose} isOpen={isOpen}>
          <BackButton bg="gray.100" />
          <Spacer />
          <MenuButton
            as={IconButton}
            icon={<SmallAddIcon />}
            bg="gray.100"
            color="gray.400"
            onClick={onOpen}
          />
          <MenuList mr="3em" shadow="xl" borderRadius="xl">
            <Box p="4" borderRadius="lg">
              <Container minW="350px" minH="350px" centerContent pt="3">
                <Stack spacing={3} minW="350px">
                  <Flex mb="1">
                    <Spacer />
                    <IconButton
                      size="sm"
                      w="8"
                      color="gray.500"
                      icon={<CloseIcon />}
                      onClick={onClose}
                    />
                  </Flex>

                  <Box>
                    <Input
                      id="input-style"
                      placeholder="name"
                      name="name"
                      className="post-name"
                      onChange={onChangeText}
                    />
                  </Box>

                  <Box>
                    <Textarea
                      id="input-style"
                      placeholder="Description"
                      name="description"
                      className="post-description"
                      onChange={onChangeText}
                    />
                  </Box>
                  {/* <Box>
                    <div className="img-input">
                      <Input type="file" onChange={onChangeFile} />
                    </div>
                  </Box> */}

                  <Box className="image-upload" w='100%'>
                        <label for="file-input">
                            <Icon className="img" color='#8dbae8' w={6} h={6} as={BiImageAdd} />
                        </label>
                        <input id="file-input" type="file" onChange={onChangeFile} />
                    </Box>


                  {formState.file && (
                    <Image
                      className="img-container"
                      alt="preview"
                      src={formState.file}
                    />
                  )}
                  <Flex mb="1">
                    <Spacer />
                    <Button id="submit" title="submit" onClick={save} />
                  </Flex>
                </Stack>
              </Container>
            </Box>
          </MenuList>
        </Menu>
      </Flex>
    </Container>
  );
}
