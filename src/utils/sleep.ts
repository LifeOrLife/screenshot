export function sleep(time: number): Promise<number> {
	return new Promise(resolve => {
		setTimeout(resolve, time)
	})
}
