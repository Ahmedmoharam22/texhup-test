import { FaEarthAfrica } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import './navbar.css'
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            TaxHup
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <NavLink className="nav-item" to={"/"}>
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </NavLink>
              <NavLink className="nav-item" to={"/about"}>
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </NavLink>
              <NavLink className="nav-item" to={"/services"}>
                <a className="nav-link active" aria-current="page" href="#">
                  Services
                </a>
              </NavLink>
              <NavLink className="nav-item" to={"/blogs"}>
                <a className="nav-link active" aria-current="page" href="#">
                  Blogs
                </a>
              </NavLink>
              <NavLink className="nav-item" to={"/contact us"}>
                <a className="nav-link active" aria-current="page" href="#">
                  Contact us
                </a>
              </NavLink>
            </ul>
            <div className="buttons">
              <Link to={"/login"}  className="first mx-2" type="submit">
                Login
              </Link>
              <Link to={"/register"} className="second" type="submit">
                Sign up
              </Link>
            </div>
            <div className="actions">
              <span><FaEarthAfrica /></span>
              <select>
                <option value="eng">English</option>
                <option value="arb">Arabic</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
