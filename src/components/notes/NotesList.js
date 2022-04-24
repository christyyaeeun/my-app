import React, { useState } from 'react';
import Note from './Note';
import AddNote from './AddNote';
import { Container, Flex, Spacer } from '@chakra-ui/react';
import Search from './Search';

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="notes-list">
      <Container>
        <Flex mt={'4'}>
          <Search handleSearchNote={setSearchText} />
          <Spacer />
          <AddNote handleAddNote={handleAddNote} />
        </Flex>

        {notes.map(note => (
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
