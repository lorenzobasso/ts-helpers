import { isArray } from 'lodash'

export const listify = <T>(value: T | T[]) => (isArray(value) ? value : [value])
