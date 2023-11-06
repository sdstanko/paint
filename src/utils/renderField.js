export function renderField(array, ctx) {
	for (let k = 0; k < array.length; k++) {
		const current = array[k];
		ctx.strokeStyle = current.color;
		ctx.lineWidth = current.size;
		ctx.beginPath();
		ctx.moveTo(current.cords[0][0], current.cords[0][1]);
		if (current.cords.length < 2) {
			ctx.arc(
				current.cords[0][0],
				current.cords[0][1],
				current.size / 2,
				0,
				2 * Math.PI,
				true,
			);
			ctx.fill();
		}
		for (let i = 0; i < current.cords.length - 1; i++) {
			ctx.lineTo(current.cords[i][0], current.cords[i][1]);
			ctx.stroke();
		}
	}
}