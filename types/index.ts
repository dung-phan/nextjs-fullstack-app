import { CamelCasedProperties } from 'type-fest'
import { components } from '@/src/api/types'

export type Book = CamelCasedProperties<components['schemas']['Book']>
export type User = CamelCasedProperties<components['schemas']['User']>
