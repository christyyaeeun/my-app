import React from 'react';
import { Container, Text, IconButton } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons';


const Note = ({ id, title, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<Container>
			<Text fontSize='1xl'>{title}</Text>
            <Text>{text}</Text>
			<div className='note-footer'>
				<small>{date}</small>
				<IconButton aria-label='delete' icon={<CloseIcon />} onClick={() => handleDeleteNote(id)}/>
			</div>
			</Container>
</div>
	);
};

export default Note;