import { Link } from "react-router-dom"
import React from "react"
import { VStack, Center, Container, Text, Link as ReachLink } from "@chakra-ui/react"

function Missing() {
    return (
        <>
            <Container p='10' centerContent>
                <VStack>
                    <Text fontSize='2xl'>Sorry</Text>
                    <Center maxW='md' color='teal.500' fontSize='15px'>
                        <Link as={ ReachLink } to='/landing'>
                            Page doesn't exist
                        </Link>
                    </Center>
                </VStack>
            </Container>
        </>
    )
}

export default Missing