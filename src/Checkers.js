import {Outlet, } from "react-router-dom";
import "./css/app.css";

function Hej() {
 
	return (
		<>
		<h1>hej</h1>
		</>
	)
	}





function Checkers(){
    return(
      <>
        <Hej />
        <Outlet />
        
      </>
    );}

export default Checkers;
