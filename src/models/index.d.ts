import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type EntryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TimelineMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NoteMetaData = {
  readOnlyFields: 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Entry {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly image?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Entry, EntryMetaData>);
  static copyOf(source: Entry, mutator: (draft: MutableModel<Entry, EntryMetaData>) => MutableModel<Entry, EntryMetaData> | void): Entry;
}

export declare class User {
  readonly id: string;
  readonly username?: string;
  readonly avatar?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Timeline {
  readonly id: string;
  readonly description?: string;
  readonly postedAt?: string;
  readonly owner?: User;
  readonly entry?: Entry;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly timelineOwnerId?: string;
  readonly timelineEntryId?: string;
  constructor(init: ModelInit<Timeline, TimelineMetaData>);
  static copyOf(source: Timeline, mutator: (draft: MutableModel<Timeline, TimelineMetaData>) => MutableModel<Timeline, TimelineMetaData> | void): Timeline;
}

export declare class Note {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Note, NoteMetaData>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note, NoteMetaData>) => MutableModel<Note, NoteMetaData> | void): Note;
}

export declare class Post {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly image?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class Event {
  readonly id: string;
  readonly name: string;
  readonly date?: string;
  readonly status?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Event, EventMetaData>);
  static copyOf(source: Event, mutator: (draft: MutableModel<Event, EventMetaData>) => MutableModel<Event, EventMetaData> | void): Event;
}

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}