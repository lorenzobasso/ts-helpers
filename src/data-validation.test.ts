import { describe, expect, it } from 'bun:test'

import { invariant, raise } from './data-validation'

describe('data validation utils', () => {
	describe(invariant.name, () => {
		it('does not throw an error if the condition is valid', () => {
			invariant(true)
		})

		it('throws an exception when the invariant is violated', () => {
			expect(() => invariant(false)).toThrow('Error! Invariant violation')
		})

		it('throws a custom exception when a message is provided', () => {
			const message = 'This is terrible'
			expect(() => invariant(false, message)).toThrow(message)
		})
	})

	describe(raise.name, () => {
		it('throws an exception', () => {
			const message = 'Some terrible error has occurred'
			expect(() => raise(message)).toThrow(message)
		})
	})
})
