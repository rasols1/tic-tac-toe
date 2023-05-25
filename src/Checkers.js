/*
import Checkersboard from "./Checkersboard";
import Info from "./Info";
import { useState, useEffect, useRef } from "react";

export default function Checkers() {

	
	const [reset, setReset] = useState(false);

	
	const [winner, setWinner] = useState('');

	const resetBoard = () => {
		setReset(true);
	}

	return (
		<div className="App">
			{}
			<div className={`winner ${winner !== '' ? '' : 'shrink'}`}>
				{}
				<div className='winner-text'>{winner}</div>
				{}
				<button onClick={() => resetBoard()}>
					Reset Board
				</button>
			</div>
			{}
			<Checkersboard reset={reset} setReset={setReset} winner={winner}
				setWinner={setWinner} />
			<Info />
		</div>
	);
}*/