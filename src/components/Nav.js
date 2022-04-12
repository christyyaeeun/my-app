import * as React from "react";
import { useState, useEffect } from "react";
import { ReactNode } from 'react';
import { Auth } from "aws-amplify";
import {
  Box,
  Center,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { AmplifySignOut } from '@aws-amplify/ui-react'
import { ColorModeSwitcher } from "./ColorModeSwitcher";




const Links = ["Home", "Timeline", "Journal", "Explore", "Notes" ];

const NavLink = ({ children, href }: { children: ReactNode; href: string; }) => (
  <Link
    px={2}
    py={1}
    color={useColorModeValue('gray.500', 'white')}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.100', 'gray.700'),
    }}
    href={href}>
    {children}
  </Link>
);



export default function Simple({children}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>

      <Box bg={useColorModeValue('#edf2f7', 'gray.700')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            bg={useColorModeValue('#a0aec0', '#2d3748')}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            color={useColorModeValue('gray.700', 'white')}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box color={useColorModeValue('gray.400', 'white')} fontWeight='600' id="nav-header">OLT</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link} href={`${link}`}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>

            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    ''
                  }
                />
              </MenuButton>

              <MenuList alignItems={'center'}>
                <br />
                <Center>
                  <Avatar
                    size={'2xl'}
                    src={''}
                  />
                </Center>
                <br />
                <Center>

                </Center>
                <br />
                <MenuDivider />
                <MenuItem as="a" href="profile">Profile</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>  

                <AmplifySignOut />
                </MenuItem>
              </MenuList>
            </Menu>
            <ColorModeSwitcher>  </ColorModeSwitcher>

          </Flex>
        </Flex>
        
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link} href={`${link}`}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}

      </Box>
    </>
  );
}