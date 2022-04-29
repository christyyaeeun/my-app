// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Post, Note, Entry, Todo, PointTotal } = initSchema(schema);

export {
  User,
  Post,
  Note,
  Entry,
  Todo,
  PointTotal
};