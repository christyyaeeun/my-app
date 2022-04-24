// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Post, Note, Entry, Todo } = initSchema(schema);

export {
  User,
  Post,
  Note,
  Entry,
  Todo
};