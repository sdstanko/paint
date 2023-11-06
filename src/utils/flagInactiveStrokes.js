export function flagInactiveStrokes(array, counter) {
	let filteredStrokes = [];
	for (let i = 0; i < array.length; i++) {
		let stroke = {
			...array[i],
			active:
				counter === 0 ? false : i < counter ? true : false,
		};
		filteredStrokes.push(stroke);
	}
	return filteredStrokes
}