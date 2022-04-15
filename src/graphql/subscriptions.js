export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote {
    onCreateNote {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote {
    onUpdateNote {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote {
    onDeleteNote {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;


export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
      id
      name
      description
      image
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
      id
      name
      description
      image
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
      id
      name
      description
      image
      owner
      createdAt
      updatedAt
    }
  }
`;

export const onCreateTodo = /* GraphQL */ `
subscription OnCreateTodo {
  onCreateTodo {
    id
    name
    description
    createdAt
      updatedAt
  }
}
`;
export const onUpdateTodo = /* GraphQL */ `
subscription OnUpdateTodo {
  onUpdateTodo {
    id
    name
    description
    createdAt
      updatedAt
  }
}
`;
export const onDeleteTodo = /* GraphQL */ `
subscription OnDeleteTodo {
  onDeleteTodo {
    id
    name
    description
    createdAt
      updatedAt
  }
}
`;
