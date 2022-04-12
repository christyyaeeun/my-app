import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './NotesList';
import Search from './Search';
import { Box, Container } from '@chakra-ui/react';


function AppNote() {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			title: 'post title',
			text: 'description',
			date: '15/04/2021',
		},]
	);

	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (title, text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			title: title,
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	function editNote(id, newName) {
		const editedNotesList = notes.map(note => {
			if (id === note.id) {
				//
				return { ...note, name: newName }
			}
			return note;
		});
		setNotes(editedNotesList);
	}

	return (
		<Container>
			<Box p='3' m='3'>
				<Search handleSearchNote={setSearchText} />
			</Box>
			<Box>
		
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					editNote={editNote}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</Box>
		</Container>
	);
};

export default AppNote;