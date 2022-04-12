import React from 'react';
import Note from './Note';
import AddNote from './AddNote';
import { Container } from '@chakra-ui/react'

const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote
}) => {

	
	return (
		<div className="notes-list">
		<Container>
		<AddNote handleAddNote={handleAddNote} />

			{notes.map((note) => (
				<Note
					id={note.id}
					title={note.title}
                    text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
			</Container>
			</div>
	);
};

export default NotesList;