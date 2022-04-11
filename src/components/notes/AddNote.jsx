// import React, { useState } from 'react';
// import { Textarea, Input, Button, Stack, Container, Box } from '@chakra-ui/react'
// // import { createNote as createNoteMutation } from '../graphql/mutations'
// // import { API } from 'aws-amplify'

import React, { useState } from 'react';
import { Textarea, Input, Stack, Container, Box, Button } from '@chakra-ui/react'



const initialData= {title:"", text:""};

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const [noteTitle, setNoteTitle] = useState('');
	// const [formData, setFormData] = useState('')
	const [data, setData]= useState(initialData);

	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
			setNoteTitle(event.target.value);

		}
	};

	const handleSubmit = () => {
		if ((noteText.trim().length > 0) && (noteTitle.trim().length > 0)) {
			handleAddNote(noteTitle, noteText);
			setNoteText('');
			setNoteTitle('');

		}
	};

	return (
		<div className='note new'>
			<Box minW='250px' minH='250px' borderRadius='lg' shadow='xl'>
				<Container maxW='container.lg' centerContent pt='6'>
					<Box borderRadius='lg' p='4' overflow='hidden'>

						<Stack spacing={3} minW='250px'>
							<Box>
							<Input id="title" placeholder='Title' value={noteTitle} onChange={handleChange} />
							</Box>
							<Box>
							<Textarea id="text" placeholder='Description' value={noteText} onChange={handleChange} />
							</Box>

							<Button type="submit" size='sm' onClick={handleSubmit}> save</Button>
						</Stack>
					</Box>
				</Container>
			</Box>
		</div>
	);
};


export default AddNote;
