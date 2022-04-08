import React from 'react'
import { Container } from '@chakra-ui/react'
import Themes from '../components/Themes';


const Journal = () => {
    return (
        <Container centerContent maxW='container.sm' minH='300px'>

            <div>Journal</div>
        <Themes />
        </Container>
    )
}

export default Journal