import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Storage, API, Auth } from 'aws-amplify';
import { createUser } from '../graphql/mutations';
import { Box, Image, Icon } from '@chakra-ui/react';
import Btn from '../components/post/Btn';
import { BiImageAdd, BiMinus, BiX } from 'react-icons/bi';

const initialState = {
  username: '',
  avatar: {},
  file: '',
  saving: false,
};

export default function User() {
  const [formState, updateFormState] = useState(initialState);

  function onChangeFile(e) {
    e.persist();
    if (!e.target.files[0]) return;
    const fileExtPosition = e.target.files[0].name.search(/.png|.jpg|.gif/i);
    const firstHalf = e.target.files[0].name.slice(0, fileExtPosition);
    const secondHalf = e.target.files[0].name.slice(fileExtPosition);
    const fileName = firstHalf + '_' + uuid() + secondHalf;
    console.log(fileName);
    const avatar = { fileInfo: e.target.files[0], name: fileName };
    updateFormState(currentState => ({
      ...currentState,
      file: URL.createObjectURL(e.target.files[0]),
      avatar,
    }));
  }

  async function save() {
    const { username, avatar } = formState;
    if (!username || !avatar.name) return;
    updateFormState(currentState => ({ ...currentState, saving: true }));
    const userId = uuid();
    const userInfo = {
      username,
      avatar: formState.avatar.name,
      id: userId,
    };

    await Storage.put(formState.avatar.name, formState.avatar.fileInfo, {
      level: 'private',
    });
    await API.graphql({
      query: createUser,
      variables: { input: userInfo },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    });

    return (
      <>
        <Box className="image-upload" w="100%">
          <label for="file-input">
            <Icon className="img" color="#8dbae8" w={6} h={6} as={BiImageAdd} />
          </label>
          <input id="file-input" type="file" onChange={onChangeFile} />
        </Box>

        <Box>
          {formState.file && (
            <Image
              borderRadius={'lg'}
              boxSize="200px"
              objectFit="cover"
              src={formState.file}
              alt="Preview"
            />
          )}
        </Box>
        <Btn colorScheme="blue" title="save" id="save" mr={3} onClick={save}>
          Save{' '}
        </Btn>
      </>
    );
  }
}
