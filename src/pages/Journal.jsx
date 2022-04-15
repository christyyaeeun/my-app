import React from 'react'
import { Container, Text } from '@chakra-ui/react'
// import AddPost from '../components/AddPost';
// import AddNote from '../components/notes/AddNote';
// import NoteList from '../components/notes/NoteList';
import CalendarEvents from '../components/calendar/CalendarEvents'


function Journal () {

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
export default Journal