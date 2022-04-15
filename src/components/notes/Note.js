import React from 'react';
import { Container, Text, IconButton, Stack, Box, Spacer, Flex } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons';


const Note = ({ id, title, text, date, handleDeleteNote }) => {

	return (
		<div className='note'>
			<Container maxW='sm' shadow='lg' borderRadius='lg' p='6' mt='8' bg='#f0f0f0'>
				<Flex mb='2'>
					<Text fontSize='1.2rem' fontWeight='500' color='gray.600'>{title}</Text>
					<Spacer />
					<Box>
						<IconButton as='button' bg='#f0f0f0' color='gray.500' size='sm' icon={<CloseIcon />}
							onClick={() => handleDeleteNote(id)}
						/>
					</Box>
				</Flex>
				<Stack spacing={4}>
					<Text color='gray.600'>{text}</Text>
					<Text fontSize='sm' color='gray.500'>{date}</Text>
				</Stack>
			</Container>
		</div>
	);
};

export default Note;


