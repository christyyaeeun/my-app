/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFeed = /* GraphQL */ `
  query GetFeed($id: ID!) {
    getFeed(id: $id) {
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
export const listFeeds = /* GraphQL */ `
  query ListFeeds(
    $filter: ModelFeedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      title
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getEntry = /* GraphQL */ `
  query GetEntry($id: ID!) {
    getEntry(id: $id) {
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
export const listEntries = /* GraphQL */ `
  query ListEntries(
    $filter: ModelEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      avatar
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        avatar
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
