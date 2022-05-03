import React from 'react'
import { Container, Text } from '@chakra-ui/react'
import CalendarEvents from '../components/calendar/CalendarEvents'
import ProfileCard from '../components/ProfileCard'
// import Profile from './Profile'
function UserPage() {

    return (
        <>
            <Container maxW='6xl' minH='100vh'>
                <Container centerContent maxW='container.sm' minH='300px' p='5' color='gray.500'>
                    <Text fontSize='2xl'>
                        Profile
                    </Text>
                    <ProfileCard />
                    {/* <CalendarEvents /> */ }
                </Container>
            </Container>
        </>
    )
}
export default UserPage