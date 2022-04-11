import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NoteList from '../notes/NoteList';
import Search from '../notes/Search';
import { Box } from '@chakra-ui/react';

const AppNote = () => {
	const [notes, setNotes] = useState([
		{
		id: nanoid(),
		title:'post title',
		text: 'This is my first note!',
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

	const addNote = ( title, text) => {
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

	return (
		<div className='container'>
			<Search handleSearchNote={setSearchText} />
			<Box>
			<NoteList
				notes={notes.filter((note) =>
					note.text.toLowerCase().includes(searchText)
				)}
				handleAddNote={addNote}
				handleDeleteNote={deleteNote}
			/>
			</Box>
		</div>
	);
};

export default AppNote;