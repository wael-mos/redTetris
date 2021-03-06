import React from 'react'
import _ from 'lodash'

import { BOARD_SIZE } from '../constants/gameConstant'
import Cell from './Cell'

const mainContainerStyle = (props) => {
	return ({
		display: 'grid',
		gridTemplateRows: `repeat(${props.height}, calc(25vw / ${props.width}))`,
		gridTemplateColumns: `repeat(${props.width}, 1fr)`,
		gridGap: '1px',
		border: '2px solid #333',
		width: '100%',
		maxWidth: '25vw',
		background: '#111'
	})
}

const Board = (props) => {
	const { board } = props
	// let isGhostPiece = false
	// let offset = 0
	return (
		<div style={mainContainerStyle({ width: BOARD_SIZE.WIDTH, height: BOARD_SIZE.HEIGHT })}>
			{_.map(board, (y => 
				_.map(y, (cell, x) => {
					// if (x === ghostPiecePos.x && y === ghostPiecePos.y)
					// 	isGhostPiece = (x === ghostPiecePos.x && y === ghostPiecePos.y)
					return (
						<Cell key={x} type={cell} />
					)
				})
			))}
		</div>
	)
}

export default Board