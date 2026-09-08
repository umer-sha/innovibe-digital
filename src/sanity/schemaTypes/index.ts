import { type SchemaTypeDefinition } from 'sanity'
import { serviceType } from './service'
import { blogPost } from './blogPost'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [serviceType, blogPost],
};