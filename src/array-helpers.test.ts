import { describe, expect, it } from 'bun:test'

import { listify } from '..'

describe('array-helpers', () => {
	describe(listify.name, () => {
		const testCases = [
			['1', ['1']],
			[[], []],
			[['1'], ['1']],
			[
				['1', '2', '3'],
				['1', '2', '3'],
			],
		]

		it.each(testCases)('turns %s to %s', (input, expected) =>
			expect(listify(input)).toEqual(expected),
		)
	})
})
