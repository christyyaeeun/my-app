import React from 'react'
import { Container, Text } from '@chakra-ui/react'
import CalendarEvents from '../components/calendar/CalendarEvents'

function JournalPage() {

    return (
        <>
            <Container maxW='6xl' minH='100vh'>
                <Container centerContent maxW='container.sm' minH='300px' p='10' color='gray.500'>
                    <Text fontSize='2xl'>
                        Journal
                    </Text>
                    <CalendarEvents />
                </Container>
            </Container>
        </>
    )
}
export default JournalPage