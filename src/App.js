import Board from './Board';
import Info from "./Info";
import {Outlet, Link} from "react-router-dom";
import "./css/app.css";


import { useState } from 'react';

function App() {
 
	return (
		<>
		<nav className="navbar">
			<p>Espresso Bar</p>
			<Link to="/">Tic Tac Toe</Link>
			<Link to="">Meny</Link>
			<Link to="Checkers">Checkers</Link>   
		</nav>
		</>
	)
	}

function app() {

	
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
			<Board reset={reset} setReset={setReset} winner={winner}
				setWinner={setWinner} />
			<Info />
		</div>
	);
}

function app(){
    return(
      <>
        <App />
        <Outlet />
        
      </>
    );}

export default App;
