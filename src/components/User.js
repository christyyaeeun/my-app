import React, { useState, useEffect } from 'react';
import { Auth, Storage } from 'aws-amplify';
import { v4 as uuid } from 'uuid';
import { Avatar } from '@chakra-ui/react';

const user = {
  avatar: {}
};

export default function User() {
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    let user = await Auth.currentAuthenticatedUser();
    console.log('user:', user);
    console.log('user attributes: ', user.attributes);
    // setAvatar(user.profileImage);
  }

  async function onUpload(e) {
    const avatar = e.target.files[0];
    await Storage.put('profile.png', avatar, {
      contentType: 'image/png',
      level: 'private',
    });
    setAvatar();
  }

//   async function save() {
//     const userId = uuid();
//     const userInfo = {
//       avatar,
//       id: userId,
//     };
//   }

  const handleUpload = e => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleUpload}>
        <div class="wrapper">
          <div class="btnimg">
            <Avatar
              size={'xl'}
              src={avatar}
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </div>
          <input id="file-input" type="file" onChange={onUpload} />
        </div>
      </form>
    </>
  );
}