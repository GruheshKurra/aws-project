// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Contactus } = initSchema(schema);

export {
  Contactus
};