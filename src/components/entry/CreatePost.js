// CreatePost.js

import React, { useState } from "react";
import Button from "./Button";
import { v4 as uuid } from "uuid";
import { Storage, API, Auth } from "aws-amplify";
import { createPost } from "../../graphql/mutations";
import { Textarea } from "@chakra-ui/react";

/* Initial state to hold form input, saving state */
const initialState = {
  name: "",
  description: "",
  image: {},
  file: "",
  saving: false,
};

export default function CreatePost({
  updateOverlayVisibility,
  updatePosts,
  posts,
}) {
  /* 1. Create local state with useState hook */
  const [formState, updateFormState] = useState(initialState);

  /* 2. onChangeText handler updates the form state when a user types into a form field */
  function onChangeText(e) {
    e.persist();
    updateFormState((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
  }

  /* 3. onChangeFile handler will be fired when a user uploads a file  */
  function onChangeFile(e) {
    e.persist();
    if (!e.target.files[0]) return;
    const fileExtPosition = e.target.files[0].name.search(/.png|.jpg|.gif/i);
    const firstHalf = e.target.files[0].name.slice(0, fileExtPosition);
    const secondHalf = e.target.files[0].name.slice(fileExtPosition);
    const fileName = firstHalf + "_" + uuid() + secondHalf;
    console.log(fileName);
    const image = { fileInfo: e.target.files[0], name: fileName };
    updateFormState((currentState) => ({
      ...currentState,
      file: URL.createObjectURL(e.target.files[0]),
      image,
    }));
  }

  async function save() {
    try {
      const { name, description, image } = formState;
      if (!name || !description || !image.name) return;
      updateFormState((currentState) => ({ ...currentState, saving: true }));
      const postId = uuid();
      const postInfo = {
        name,
        description,
        image: formState.image.name,
        id: postId,
      };

      await Storage.put(formState.image.name, formState.image.fileInfo);
      await API.graphql({
        query: createPost,
        variables: { input: postInfo },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      }); // updated
      const { username } = await Auth.currentAuthenticatedUser(); // new
      updatePosts([
        ...posts,
        { ...postInfo, image: formState.file, owner: username },
      ]); // updated
      updateFormState((currentState) => ({ ...currentState, saving: false }));
      updateOverlayVisibility(false);
    } catch (err) {
      console.log("error: ", err);
    }
  }

  return (
    <div className="create-wrapper">
      <div className="create-post">
        <div className="cancel-wrap">
          <Button
            className="cancel"
            type="cancel"
            title="cancel"
            onClick={() => updateOverlayVisibility(false)}
          />
        </div>
        <div className="create-header">
          <p>olt</p>
        </div>
        <input
          id="input-style"
          placeholder="name"
          name="name"
          className="post-name"
          onChange={onChangeText}
        />

        <Textarea
          id="input-style"
          placeholder="Description"
          name="description"
          className="post-description"
          onChange={onChangeText}
        />
        <div className="img-input">
          <input type="file" onChange={onChangeFile} />
        </div>
        {formState.file && (
          <img className="img-container" alt="preview" src={formState.file} />
        )}
        <div className="btn-container">
          <Button id="submit" title="submit" onClick={save} />
        </div>
    
      </div>
    </div>
  );
}
