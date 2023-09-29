export function invariant(condition: any, message?: string): asserts condition {
	if (!condition) throw new Error(message ?? 'Error! Invariant violation')
}

export const raise = (message: string): never => {
	throw new Error(message)
}
