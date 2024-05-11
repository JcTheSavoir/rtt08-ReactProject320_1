import { Link } from "react-router-dom";
 
 const NavBar = () => {
    return (
        <div className="navbarContainer">
          <Link to="/">
            <div>Homepage</div>
          </Link>
            <div className="navbarTitle">Welcome to the DND Information Page</div>
          <Link to="/options">
            <div>Options</div>
          </Link>
        </div>
      )
    }
 export default NavBar