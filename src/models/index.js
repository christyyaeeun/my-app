// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Note, Post, Event, Todo } = initSchema(schema);

export {
  Note,
  Post,
  Event,
  Todo
};