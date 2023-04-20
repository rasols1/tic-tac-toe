import {Outlet, Link} from "react-router-dom";
import "./css/app.css";
import "./css/navbar.css";


function Navbar() {
 
	return (
		<>
		<nav className="navbar">
			<p></p>
			<Link to="/">Tic Tac Toe</Link>
			<Link to="Checkers">Checkers</Link>   
		</nav>
		</>
	)
	}

function Layout(){
    return(
      <>
        <Navbar />
        <Outlet />
        
      </>
    );}

export default Layout;
