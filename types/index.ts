import { CamelCasedProperties } from 'type-fest'
import { components } from '@/src/api/types'

export type Book = CamelCasedProperties<components['schemas']['Book']>;
