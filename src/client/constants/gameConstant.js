export const BOARD_SIZE = {
	WIDTH: 10,
	HEIGHT: 24
}

export const PASTEL_COLORS = {
	BLUE: '110,181,255',
	GREEN: '186, 255, 201',
	LIGHT_BLUE: '186,225,255',
	ORANGE: '255,223,186',
	PURPLE: '238,203,255',
	RED: '255,179,186',
	YELLOW: '255,255,186'
}

export const KEY_CODE = {
	A: 65,
	D: 68,
	S: 83,
	W: 87,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39,
	SPACE: 32,
	UP: 38
}

export const PIECES = {
	'0': {
		shape: [['0']],
		color: '0, 0, 0'
	},
	I: {
		shape: [
			['0', 'I', '0', '0'],
			['0', 'I', '0', '0'],
			['0', 'I', '0', '0'],
			['0', 'I', '0', '0']
		],
		color: PASTEL_COLORS.LIGHT_BLUE
	},
	J: {
		shape: [
			['0', 'J', '0'],
			['0', 'J', '0'],
			['J', 'J', '0']
		],
		color: PASTEL_COLORS.ORANGE
	},
	L: {
		shape: [
			['0', 'L', '0'],
			['0', 'L', '0'],
			['0', 'L', 'L']
		],
		color: PASTEL_COLORS.BLUE
	},
	O: {
		shape: [
			['O', 'O'],
			['O', 'O']
		],
		color: PASTEL_COLORS.YELLOW
	},
	S: {
		shape: [
			['0', 'S', 'S'],
			['S', 'S', '0'],
			['0', '0', '0']
		],
		color: PASTEL_COLORS.GREEN
	},
	Z: {
		shape: [
			['Z', 'Z', '0'],
			['0', 'Z', 'Z'],
			['0', '0', '0']
		],
		color: PASTEL_COLORS.RED
	},
	T: {
		shape: [
			['T', 'T', 'T'],
			['0', 'T', '0'],
			['0', '0', '0']
		],
		color: PASTEL_COLORS.PURPLE
	}
}