import { Link } from "react-router-dom";
 
 const NavBar = () => {
    return (
        <div className="navbarContainer">
          <Link to="/rtt08-ReactProject320_1/">
            <div>Options</div>
          </Link>
            <div className="navbarTitle">Welcome to the DND Information Page</div>
          <Link to="/rtt08-ReactProject320_1/options">
            <div>Options</div>
          </Link>
        </div>
      )
    }
 export default NavBar