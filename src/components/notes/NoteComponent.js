import { API, Storage } from 'aws-amplify';
import React, { useState, useEffect } from 'react';
// import { withAuthenticator } from '@aws-amplify/ui-react';
import { listEntries } from '../../graphql/queries';
import {
  createEntry as createEntryMutation,
  deleteEntry as deleteEntryMutation,
} from '../../graphql/mutations';
import { Input, Container, Textarea, Box, Icon, Image } from '@chakra-ui/react';
import { BiImageAdd } from 'react-icons/bi';

const initialFormState = { name: '', description: '', image: {} };

function EntryComponent() {
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchEntries();
  }, []);

  async function fetchEntries() {
    const apiData = await API.graphql({ query: listEntries });
    const entriesFromAPI = apiData.data.listEntries.items;
    await Promise.all(
      entriesFromAPI.map(async entry => {
        if (entry.image) {
          const image = await Storage.get(entry.image);
          entry.image = image;
        }
        return entry;
      })
    );
    setEntries(apiData.data.listEntries.items);
  }

  async function createEntry() {
    if (!formData.name || !formData.description) return;
    await API.graphql({
      query: createEntryMutation,
      variables: { input: formData },
    });
    if (formData.image) {
      const image = await Storage.get(formData.image);
      formData.image = image;
    }
    setEntries([...entries, formData]);
    setFormData(initialFormState);
  }

  async function deleteEntry({ id }) {
    const newEntriesArray = entries.filter(entry => entry.id !== id);
    setEntries(newEntriesArray);
    await API.graphql({
      query: deleteEntryMutation,
      variables: { input: { id } },
    });
  }

  function onChangeText(e) {
    e.persist();
    setFormData(currentState => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
  }

  async function onChange(e) {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file);
    fetchEntries();
  }

  return (
    <div className="App">
      <h1>My Entries</h1>
      <Input
        // onChange={e => setFormData({ ...formData, name: e.target.value })}
        onChange={onChangeText}
        placeholder="Entry name"
        value={formData.name}
      />
      <Textarea
        // onChange={e =>
        //   setFormData({ ...formData, description: e.target.value })
        // }
        placeholder="Entry description"
        value={formData.description}
        onChange={onChangeText}
      />

      <Box className="image-upload" w="100%">
        <label for="file-input">
          <Icon className="img" color="#8dbae8" w={6} h={6} as={BiImageAdd} />
        </label>
        <input id="file-input" type="file" onChange={onChange} />
      </Box>

      {formData.file && (
        <Image
          borderRadius={'lg'}
          boxSize="200px"
          objectFit="cover"
          src={formData.file}
          alt="Preview"
        />
      )}

      <button onClick={createEntry}>Create Entry</button>
      <div style={{ marginBottom: 30 }}>
        {entries.map(entry => (
          <div key={entry.id || entry.name}>
            <h2>{entry.name}</h2>
            <p>{entry.description}</p>
            <button onClick={() => deleteEntry(entry)}>Delete entry</button>
            {entry.image && <img src={entry.image} style={{ width: 400 }} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EntryComponent;
