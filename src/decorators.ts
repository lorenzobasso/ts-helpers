export function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
	const originalMethod = descriptor.value

	descriptor.value = async function (...args: any[]) {
		console.log(`Calling ${propertyKey} with args: ${JSON.stringify(args)}`)
		const result = await originalMethod.apply(this, args)
		console.log('The return value is: ' + result)
		return result
	}

	return descriptor
}

export function bench(
	target: Object,
	propertyKey: string,
	descriptor: TypedPropertyDescriptor<any>,
) {
	const originalMethod = descriptor.value

	descriptor.value = async function (...args: any[]) {
		const start = performance.now()
		const result = await originalMethod.apply(this, args)
		const duration = performance.now() - start
		console.log(`Called "${propertyKey}" in ${duration.toFixed(3)}ms`)
		return result
	}
}
