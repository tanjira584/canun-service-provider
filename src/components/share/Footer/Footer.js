import React from "react";
import "./Footer.css";
import logo from "../../../images/logo2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faLinkedinIn,
    faPinterestP,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
    faAngleRight,
    faEnvelopeOpenText,
    faLocationDot,
    faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    const d = new Date();
    return (
        <footer>
            <div
                className="footer-top py-5"
                style={{ backgroundColor: "#29395B" }}
            >
                <div className="container-md py-5">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="footer-box">
                                <div className="footer-logo mb-4">
                                    <img
                                        height={50}
                                        src={logo}
                                        alt="footer logo"
                                    />
                                </div>
                                <p className="mb-3 fw-normal">
                                    There are many variations of passages of
                                    Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by
                                    injected humou
                                </p>
                                <ul className="social-icon d-flex">
                                    <li>
                                        <FontAwesomeIcon
                                            className="icon text-light me-3"
                                            style={{ fontSize: "18px" }}
                                            icon={faFacebookF}
                                        ></FontAwesomeIcon>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            className="icon text-light me-3"
                                            style={{ fontSize: "18px" }}
                                            icon={faTwitter}
                                        ></FontAwesomeIcon>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            className="icon text-light me-3"
                                            style={{ fontSize: "18px" }}
                                            icon={faLinkedinIn}
                                        ></FontAwesomeIcon>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            className="icon text-light me-3"
                                            style={{ fontSize: "18px" }}
                                            icon={faPinterestP}
                                        ></FontAwesomeIcon>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-box">
                                <h4 className="mb-4">Our Services</h4>
                                <ul className="footer-service">
                                    <li>
                                        <a href=" ">Business Law</a>
                                    </li>
                                    <li>
                                        <a href=" ">Education Law</a>
                                    </li>
                                    <li>
                                        <a href=" ">Criminal Law</a>
                                    </li>
                                    <li>
                                        <a href=" ">Family Law</a>
                                    </li>
                                    <li>
                                        <a href=" ">Personal Injury</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-box">
                                <h4 className="mb-4">Our Address</h4>
                                <ul className="">
                                    <li className="d-flex align-items-center mb-4">
                                        <div>
                                            <FontAwesomeIcon
                                                className="icon text-light me-3"
                                                style={{ fontSize: "22px" }}
                                                icon={faLocationDot}
                                            ></FontAwesomeIcon>
                                        </div>
                                        <div>
                                            <p className="m-0">
                                                Joan Romero 666-4366 Lacinia
                                                Avenue
                                            </p>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center mb-4">
                                        <div>
                                            <FontAwesomeIcon
                                                className="icon text-light me-3"
                                                style={{ fontSize: "22px" }}
                                                icon={faPhoneVolume}
                                            ></FontAwesomeIcon>
                                        </div>
                                        <div>
                                            <p className="m-0">
                                                +1 888 187 986 897
                                            </p>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center mb-4">
                                        <div>
                                            <FontAwesomeIcon
                                                className="icon text-light me-3"
                                                style={{ fontSize: "22px" }}
                                                icon={faEnvelopeOpenText}
                                            ></FontAwesomeIcon>
                                        </div>
                                        <div>
                                            <p className="m-0">
                                                tanjira584@gmail.com
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-box">
                                <h4 className="mb-4">Newsletter</h4>
                                <div>
                                    <p className="mb-4">
                                        You will be notified when somthing new
                                        will be appear.
                                    </p>
                                    <div class="input-group mb-3 border">
                                        <input
                                            type="text"
                                            class="form-control bg-transparent border-0"
                                            placeholder="Email Address *"
                                        />
                                        <span class="input-group-text bg-transparent border-0 px-2">
                                            <button
                                                className="btn text-light px-4 py-2"
                                                style={{
                                                    backgroundColor: "#E3B576",
                                                    borderRadius: "6px",
                                                    fontSize: "22px",
                                                }}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faAngleRight}
                                                ></FontAwesomeIcon>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="text-center m-0 text-light">
                    &copy; Copyright {d.getFullYear()} | Canun - Lawyer App |
                    All right reserved Tanjir Ahmed.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
