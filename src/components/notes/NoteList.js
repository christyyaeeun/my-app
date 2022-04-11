import React from 'react';
import Note from './Note';
import AddNote from './AddNote';
import { Container } from '@chakra-ui/react'

const NoteList = ({
	notes,
	handleAddNote,
	handleDeleteNote
}) => {

	
	return (
		<div className="notes-list">
		<Container>
			{notes.map((note) => (
				<Note
					id={note.id}
					title={note.title}
                    text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
			<AddNote handleAddNote={handleAddNote} />
			</Container>
			</div>
	);
};

export default NoteList;