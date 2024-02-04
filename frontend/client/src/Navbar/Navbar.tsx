import { Link } from "react-router-dom";
import "./Navbar.css";
import { useEffect } from "react";
function Navbar() {
  useEffect(() => {
    fetch("http://localhost:5173/profile", {credentials: 'include'})
  })

  return (
    <>
      <header>
        <Link to="/" className="logo">
          MyBlog
        </Link>
        <nav>
          <Link to="/login">login</Link>
          <Link to="/signup">sign-up</Link>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
