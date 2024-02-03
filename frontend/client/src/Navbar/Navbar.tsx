import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
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
