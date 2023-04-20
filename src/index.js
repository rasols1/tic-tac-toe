import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './css/index.css';
import App from './App';
import Checkers from './Checkers';


function App(){
	return(
	  <>
	  <BrowserRouter>
		<Routes>
		  <Route path="/" element={<App />}>
			<Route index element={<OmOss />} />
			<Route path="meny" element={<Meny />} />
			<Route path="kontakt" element={<Kontakt />} />
			<Route path="*" element={<NoPage />} />
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
