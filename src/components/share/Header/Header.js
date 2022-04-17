import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo2.svg";

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth);
    };
    return (
        <div style={{ backgroundColor: "#29395B" }} className="py-2">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid container-md">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarTogglerDemo01"
                    >
                        <a className="navbar-brand" href="/">
                            <img height="50px" src={logo} alt="" />
                        </a>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link ">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blogs" className="nav-link">
                                    Blogs
                                </Link>
                            </li>
                            {user ? (
                                <li className="nav-item">
                                    <button
                                        onClick={handleLogout}
                                        className="nav-link bg-transparent border-0"
                                    >
                                        Logout
                                    </button>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">
                                        Login
                                    </Link>
                                </li>
                            )}

                            <li className="nav-item">
                                <Link to="/signup" className="nav-link">
                                    Signup
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
