// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Post, Feed, Entry, Note, Todo } = initSchema(schema);

export {
  User,
  Post,
  Feed,
  Entry,
  Note,
  Todo
};