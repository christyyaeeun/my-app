import React from 'react'
import { Container, Text } from '@chakra-ui/react'
import Themes from '../components/Themes';


const Journal = () => {
    return (
        <Container centerContent maxW='container.sm' minH='300px' p='10' color='gray.500'>
<Text fontSize='2xl'>
Journal
</Text>
        <Themes />
        </Container>
    )
}

export default Journal