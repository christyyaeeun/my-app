import React from 'react'
import { Container, Text } from '@chakra-ui/react'
import Themes from '../components/Themes';
import AddPost from '../components/AddPost';
import { Portal, Menu, MenuList, MenuButton, Button, Divider } from '@chakra-ui/react'

const Journal = () => {
    return (
        <>
            <Container centerContent maxW='container.sm' minH='300px' p='10' color='gray.500'>
                <Text fontSize='2xl'>
                    Journal
                </Text>

                <Menu>
                    <MenuButton as={Button}>Add Post</MenuButton>

                    <Portal>
                        <MenuList>
                            <AddPost />
                        </MenuList>
                    </Portal>
                </Menu>
            </Container>
<Divider />
            <Container centerContent maxW='container.sm' minH='300px' p='10' color='gray.500'>
            <Themes />

            </Container>
        </>
    )
}

export default Journal