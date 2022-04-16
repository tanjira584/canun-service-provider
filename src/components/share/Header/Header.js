import React from "react";
import logo from "../../../images/logo2.svg";

const Header = () => {
    return (
        <div className="py-2">
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
                        <a className="navbar-brand" href=" ">
                            <img height="50px" src={logo} alt="" />
                        </a>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href=" "
                                >
                                    Home
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
