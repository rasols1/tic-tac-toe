import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './css/index.css';
import Layout from './App';
import Game from './Game';
import Checkers from './Checkers';

function App(){
	return(
	  <>
	  <BrowserRouter>
		<Routes>
		  <Route path="/" element={<Layout />}>
			<Route index element={<Game />} />
			<Route path="*" element={<Checkers />} />
		  </Route>
		</Routes>
	  </BrowserRouter>
	  </>
	  
	);
  }


ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
