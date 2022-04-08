import React from 'react'
import DateCalendar from '../components/DateCalendar'
import { Container } from '@chakra-ui/react'


const Journal = () => {
    return (
        <Container centerContent maxW='container.sm' minH='300px'>

            <div>Journal</div>
            <DateCalendar />
        </Container>
    )
}

export default Journal