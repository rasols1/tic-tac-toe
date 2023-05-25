import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './css/index.css';
import Layout from './App';
import Game from './Game';
import ConnectFour from './ConnectFour';
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

function App(){
	return(
	  <>
	  <BrowserRouter>
		<Routes>
		  <Route path="/" element={<Layout />}>
			<Route index element={<Game />} />
			<Route path="*" element={<ConnectFour />} />
			
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
