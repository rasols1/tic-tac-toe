import {Outlet, Link} from "react-router-dom";
import "./css/app.css";
import "./css/navbar.css";


function Navbar() {
 
	return (
		<>
		<nav className="navbar">
			<h1>RasGames</h1>
			<Link to="/">Tic Tac Toe</Link>
			<Link to="ConnectFour">ConnectFour</Link>  
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
