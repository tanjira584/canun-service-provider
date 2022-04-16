import React from "react";
import "./Services.css";
import serimg from "../../../images/service5.jpg";

const Services = () => {
    return (
        <div className="service-area">
            <div className="container-md container-fluid">
                <div className="section-info mb-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="section-title">
                                <h2>
                                    The Area Where We <span>Services</span> Our
                                    Law
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <div className="service-title-bar">
                                <div className="service-title ">
                                    <p>Personal Injury</p>
                                </div>
                            </div>
                            <div className="service-title-bar">
                                <div className="service-title">
                                    <p>Family Law</p>
                                </div>
                            </div>
                            <div className="service-title-bar">
                                <div className="service-title">
                                    <p>Criminal Law</p>
                                </div>
                            </div>
                            <div className="service-title-bar">
                                <div className="service-title">
                                    <p>Education Law</p>
                                </div>
                            </div>
                            <div className="service-title-bar">
                                <div className="service-title active-bar">
                                    <p>Real State Law</p>
                                </div>
                            </div>
                            <div className="service-title-bar">
                                <div className="service-title">
                                    <p>Business Law</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="service-content position-relative">
                                <div className="service-data-img">
                                    <img src={serimg} alt="" />
                                    <div className="service-data">
                                        <h3 className="text-light">
                                            Business Law
                                        </h3>
                                        <h4 className="text-light">300$</h4>
                                        <p className="mb-4 text-light">
                                            Domestic Violence in London How a
                                            Lawyer Can Help I must explain to
                                            you how all this mistaken idea of
                                            denouncing pleasure and praising
                                            pain was
                                        </p>
                                        <a href=" ">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
