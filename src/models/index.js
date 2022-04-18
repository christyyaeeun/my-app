// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Entry, User, Timeline, Note, Post, Event, Todo } = initSchema(schema);

export {
  Entry,
  User,
  Timeline,
  Note,
  Post,
  Event,
  Todo
};