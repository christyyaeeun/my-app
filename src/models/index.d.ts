import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FeedMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EntryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NoteMetaData = {
  readOnlyFields: 'updatedAt';
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly username?: string | null;
  readonly avatar?: string | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Post {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class Feed {
  readonly id: string;
  readonly description?: string | null;
  readonly postedAt?: string | null;
  readonly owner?: User | null;
  readonly entry?: Entry | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly feedOwnerId?: string | null;
  readonly feedEntryId?: string | null;
  constructor(init: ModelInit<Feed, FeedMetaData>);
  static copyOf(source: Feed, mutator: (draft: MutableModel<Feed, FeedMetaData>) => MutableModel<Feed, FeedMetaData> | void): Feed;
}

export declare class Entry {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Entry, EntryMetaData>);
  static copyOf(source: Entry, mutator: (draft: MutableModel<Entry, EntryMetaData>) => MutableModel<Entry, EntryMetaData> | void): Entry;
}

export declare class Note {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Note, NoteMetaData>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note, NoteMetaData>) => MutableModel<Note, NoteMetaData> | void): Note;
}

export declare class Todo {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}