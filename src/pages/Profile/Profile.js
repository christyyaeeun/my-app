import React from 'react';
import userData from './user-profile.json';
import UserProfile from './UserProfile';
import UserProfileEdit from './UserProfileEdit';
export default function Profile() {
  return (
    <div>
      {/* <UserProfile data={userData} /> */}
      <UserProfileEdit initialData={userData} />
    </div>
  );
}
