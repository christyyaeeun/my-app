import React, { useState } from 'react';
import Button from './Button';
import { v4 as uuid } from 'uuid';
import { Storage, API, Auth } from 'aws-amplify';
import { createPost } from './graphql/mutations';

/* Initial state to hold form input, saving state */
const initialState = {
  name: '',
  description: '',
  image: {},
  file: '',
  location: '',
  saving: false
};