import { Link } from "react-router-dom"
import React from "react"
import { VStack, Center, Container, Text, Link as ReachLink } from "@chakra-ui/react"

function Missing() {
    return (
        <>
            <Container p='10' centerContent>
                <VStack>
                    <Text fontSize='2xl'>Requires Connection</Text>
                    <Center maxW='md' color='teal.500' fontSize='15px'>
                        <Link as={ReachLink} to='/landing'>
                            Invite your partner to connect!
                        </Link>
                    </Center>
                </VStack>
            </Container>
        </>
    )
}

export default Missing