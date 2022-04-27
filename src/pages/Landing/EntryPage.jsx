import React from 'react'
import { Box, Image, Flex, Container, Button, Heading } from '@chakra-ui/react'
import './style.css'
import '@fontsource/calistoga';
import '@fontsource/peddana'


function EntryPage() {




    return (
        <>
            <Container id='landing-wrap' w={ '100%' }>
                {/* <Container id='header' height={ '2.5em' } bg={ '#d1ccc7ad' } w={ '100%' } p={ '0' } /> */ }

                <Container id='main' m={ '0' } p={ '0' }>


                    {/* <Container id='container' w={ '350px' } h={ '400px' } bg={ 'inherit' } position={ 'absolute' } overflow={ 'hidden' } top={ '50%' } left={ '50%' } ml={ '-175px' } mt={ '-250px' } borderRadius={ 'lg' }>

                    </Container> */}
                    {/* <Box bgGradient={ [ 'linear(to-b, #4675bd, #c0daeb)', ] }> </Box> */ }
                    {/* <Flex
                        flexWrap='wrap'
                        spacing='24px'
                        gap='16px'
                        justifyContent='space-evenly'
                        bg={ 'transparent' }

                    >
                        <Container display={ 'flex' } justifyContent={ 'center' } alignContent={ 'center' } id='title'>
                            <Image src={ 'https://firebasestorage.googleapis.com/v0/b/olt-amplify.appspot.com/o/oltsigbl.png?alt=media&token=452363bf-ac15-49ec-8e66-dc88926b6b6b' } />
                        </Container>


                    </Flex> */}


                    {/* <div id='main">
<Container id="container">
    <Image src={''}>

</Container>
</div> */}
                    {/* <Container id='header' height={ '2.5em' } bg={ '#d1ccc7ad' } w={ '100%' } p={ '0' } bottom={ '0' } position={ 'absolute' } />

                </Container> */}
                </Container>
            </Container>

        </>
    )
}

export default EntryPage