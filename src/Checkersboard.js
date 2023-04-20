import "./css/board.css";

import { useState, useEffect, useRef } from "react";

const Checkersboard = ({ reset, setReset, winner, setWinner }) => {

	const [turn, setTurn] = useState(0);


	const [data, setData] = useState(['', '', '', '', '',
		'', '', '', ''])

	const boardRef = useRef(null);

	const draw = (event, index) => {
	
		if (data[index - 1] === '' && winner === '') {

			const current = turn === 0 ? "X" : "O"

			data[index - 1] = current;

			event.target.innerText = current;

			
			setTurn(turn === 0 ? 1 : 0)
		}
	}


	useEffect(() => {

		setData(['', '', '', '', '', '', '', '', '']);

		const cells = boardRef.current.children

		for (let i = 0; i < 9; i++) {
			cells[i].innerText = '';
		}

		setTurn(0);

		setWinner('');
		setReset(false);
	}, [reset, setReset, setWinner])


	useEffect(() => {

		const checkRow = () => {
			let ans = false;
			for (let i = 0; i < 9; i += 3) {
				ans |= (data[i] === data[i + 1] &&
				data[i] === data[i + 2] &&
				data[i] !== '')
			}
			return ans;
		}

		const checkCol = () => {
			let ans = false;
			for (let i = 0; i < 3; i++) {
				ans |= (data[i] === data[i + 3] &&
				data[i] === data[i + 6] &&
				data[i] !== '')
			}
			return ans;
		}

		const checkDiagonal = () => {
			return ((data[0] === data[4] &&
			data[0] === data[8] && data[0] !== '') ||
			(data[2] === data[4] && data[2] === data[6] &&
			data[2] !== ''));
		}

		const checkWin = () => {
			return (checkRow() || checkCol() || checkDiagonal());
		}

	
		const checkTie = () => {
			let count = 0;
			data.forEach((cell) => {
				if (cell !== '') {
					count++;
				}
			})
			return count === 42;
		}

		
		if (checkWin()) {
			setWinner(turn === 0 ? "Player 2 Wins!" :
			"Player 1 Wins!");
		} else if (checkTie()) {

		
			setWinner("It's a Tie!");
		}

	})

	return (
		<div ref={boardRef} className="board">
			<div className="input input-1"
				onClick={(e) => draw(e, 1)}></div>
			<div className="input input-2"
				onClick={(e) => draw(e, 2)}></div>

			<div className="input input-3"
				onClick={(e) => draw(e, 3)}></div>
			<div className="input input-4"
				onClick={(e) => draw(e, 4)}></div>

			<div className="input input-5"
				onClick={(e) => draw(e, 5)}></div>
			<div className="input input-6"
				onClick={(e) => draw(e, 6)}></div>

			<div className="input input-7"
				onClick={(e) => draw(e, 7)}></div>
			<div className="input input-8"
				onClick={(e) => draw(e, 8)}></div>

			<div className="input input-9"
				onClick={(e) => draw(e, 9)}></div>
            <div className="input input-10"
				onClick={(e) => draw(e, 10)}></div>

            <div className="input input-11"
				onClick={(e) => draw(e, 11)}></div>
            <div className="input input-12"
				onClick={(e) => draw(e, 12)}></div>

            <div className="input input-13"
				onClick={(e) => draw(e, 13)}></div>   
            <div className="input input-14"
				onClick={(e) => draw(e, 14)}></div>

			<div className="input input-15"
				onClick={(e) => draw(e, 15)}></div>
			<div className="input input-16"
				onClick={(e) => draw(e, 16)}></div>

			<div className="input input-17"
				onClick={(e) => draw(e, 17)}></div>
			<div className="input input-18"
				onClick={(e) => draw(e, 18)}></div>

			<div className="input input-19"
				onClick={(e) => draw(e, 19)}></div>
			<div className="input input-20"
				onClick={(e) => draw(e, 20)}></div>

			<div className="input input-21"
				onClick={(e) => draw(e, 21)}></div>
			<div className="input input-22"
				onClick={(e) => draw(e, 22)}></div>

			<div className="input input-23"
				onClick={(e) => draw(e, 23)}></div>
			<div className="input input-24"
				onClick={(e) => draw(e, 24)}></div>

			<div className="input input-25"
				onClick={(e) => draw(e, 25)}></div>
			<div className="input input-26"
				onClick={(e) => draw(e, 26)}></div>

			<div className="input input-27"
				onClick={(e) => draw(e, 27)}></div>
			<div className="input input-28"
				onClick={(e) => draw(e, 28)}></div>

			<div className="input input-29"
				onClick={(e) => draw(e, 29)}></div>
			<div className="input input-30"
				onClick={(e) => draw(e, 30)}></div>

            <div className="input input-31"
				onClick={(e) => draw(e, 31)}></div>
            <div className="input input-32"
				onClick={(e) => draw(e, 32)}></div>

            <div className="input input-33"
				onClick={(e) => draw(e, 33)}></div>
            <div className="input input-34"
				onClick={(e) => draw(e, 34)}></div>   

            <div className="input input-35"
				onClick={(e) => draw(e, 35)}></div>
			<div className="input input-36"
				onClick={(e) => draw(e, 36)}></div>

			<div className="input input-37"
				onClick={(e) => draw(e, 37)}></div>
			<div className="input input-38"
				onClick={(e) => draw(e, 38)}></div>

			<div className="input input-39"
				onClick={(e) => draw(e, 39)}></div>
			<div className="input input-40"
				onClick={(e) => draw(e, 40)}></div>

			<div className="input input-41"
				onClick={(e) => draw(e, 41)}></div>
			<div className="input input-42"
				onClick={(e) => draw(e, 42)}></div>  
		</div>
	)
}


export default Checkersboard;
