import React from 'react'
import { Container, Text } from '@chakra-ui/react'
import Themes from '../components/cards/Themes'

function Explore() {
    return (
        <>
            <Container centerContent maxW='7xl' minH='300px' p='5' color='gray.500'>

                <Text fontSize='2xl'>
                    Explore
                </Text>
                <Container centerContent minH='300px' color='gray.500'>
                    <Themes />

                </Container>
            </Container>
        </>
    )
}

export default Explore