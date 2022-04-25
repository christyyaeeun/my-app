import './Index.css';
import React from 'react';
import ProfileDialog from '../../components/ProfileDialog/Index';

function Profile() {
  return (
    <div className="profilecon">
      <div className="profilecontentcon">
        <div className="profilecontent">
          <p></p>
          <ProfileDialog />
        </div>
      </div>
    </div>
  );
}
export default Profile;
