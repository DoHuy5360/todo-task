function generateToken(len) {
	const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	const lowerLeters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	const upperLeters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	const mixArray = numbers.concat(lowerLeters, upperLeters);
	let token = "";
	for (let idx = 0; idx < len; idx++) {
		const randNumber = Math.round(Math.random() * mixArray.length - 1);
		token += mixArray[randNumber];
	}
	return token;
}
