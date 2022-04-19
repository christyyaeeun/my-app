/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const onCreateFeed = /* GraphQL */ `
  subscription OnCreateFeed($owner: String) {
    onCreateFeed(owner: $owner) {
      id
      description
      postedAt
      owner {
        id
        username
        avatar
        createdAt
        updatedAt
      }
      entry {
        id
        name
        description
        image
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      feedOwnerId
      feedEntryId
    }
  }
`;
export const onUpdateFeed = /* GraphQL */ `
  subscription OnUpdateFeed($owner: String) {
    onUpdateFeed(owner: $owner) {
      id
      description
      postedAt
      owner {
        id
        username
        avatar
        createdAt
        updatedAt
      }
      entry {
        id
        name
        description
        image
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      feedOwnerId
      feedEntryId
    }
  }
`;
export const onDeleteFeed = /* GraphQL */ `
  subscription OnDeleteFeed($owner: String) {
    onDeleteFeed(owner: $owner) {
      id
      description
      postedAt
      owner {
        id
        username
        avatar
        createdAt
        updatedAt
      }
      entry {
        id
        name
        description
        image
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      feedOwnerId
      feedEntryId
    }
  }
`;
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($owner: String) {
    onCreateNote(owner: $owner) {
      id
      title
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($owner: String) {
    onUpdateNote(owner: $owner) {
      id
      title
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($owner: String) {
    onDeleteNote(owner: $owner) {
      id
      title
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateEntry = /* GraphQL */ `
  subscription OnCreateEntry($owner: String) {
    onCreateEntry(owner: $owner) {
      id
      name
      description
      image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateEntry = /* GraphQL */ `
  subscription OnUpdateEntry($owner: String) {
    onUpdateEntry(owner: $owner) {
      id
      name
      description
      image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteEntry = /* GraphQL */ `
  subscription OnDeleteEntry($owner: String) {
    onDeleteEntry(owner: $owner) {
      id
      name
      description
      image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($owner: String) {
    onCreateTodo(owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($owner: String) {
    onUpdateTodo(owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($owner: String) {
    onDeleteTodo(owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      avatar
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      avatar
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      avatar
      createdAt
      updatedAt
    }
  }
`;
