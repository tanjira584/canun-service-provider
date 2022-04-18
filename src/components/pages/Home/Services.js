import React, { createRef, useRef, useState } from "react";
import "./Services.css";

import useServices from "../../../hooks/useServices";
import { Link } from "react-router-dom";

const dfltService = {
    id: 1,
    name: "Personal Injury",
    price: 300,
    img: "https://i.ibb.co/5Bsn6kh/service1.jpg",
    title: "Domestic Violence in London How a Lawyer Can Help",
    desc: "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter.",
};
const Services = () => {
    const [services] = useServices();
    const [service, setService] = useState(dfltService);

    const handleService = (id) => {
        const seleltedService = services.find(
            (service) => service.id === parseInt(id)
        );
        setService(seleltedService);
    };
    console.log(service.id);
    return (
        <div className="service-area">
            <div className="container-md p-0 p-md-2">
                <div className="section-info mb-5 mx-2">
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
                            <div className="section-info-text">
                                <p>
                                    Everyone wants to say they hate lawyers, and
                                    yet I've never met a parent who didn't want
                                    their kid to be a lawyer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <div>
                                <div
                                    className="service-title-bar"
                                    onClick={() => handleService(1)}
                                >
                                    <div
                                        className={`service-title ${
                                            service.id === 1 && "active-bar"
                                        }`}
                                    >
                                        <p>Personal Injury</p>
                                    </div>
                                </div>
                                <div
                                    className="service-title-bar"
                                    onClick={() => handleService(2)}
                                >
                                    <div
                                        className={`service-title ${
                                            service.id === 2 && "active-bar"
                                        }`}
                                    >
                                        <p>Family Law</p>
                                    </div>
                                </div>
                                <div
                                    className="service-title-bar"
                                    onClick={() => handleService(3)}
                                >
                                    <div
                                        className={`service-title ${
                                            service.id === 3 && "active-bar"
                                        }`}
                                    >
                                        <p>Criminal Law</p>
                                    </div>
                                </div>
                                <div
                                    className="service-title-bar"
                                    onClick={() => handleService(4)}
                                >
                                    <div
                                        className={`service-title ${
                                            service.id === 4 && "active-bar"
                                        }`}
                                    >
                                        <p>Education Law</p>
                                    </div>
                                </div>
                                <div
                                    className="service-title-bar"
                                    onClick={() => handleService(5)}
                                >
                                    <div
                                        className={`service-title ${
                                            service.id === 5 && "active-bar"
                                        }`}
                                    >
                                        <p>Real State Law</p>
                                    </div>
                                </div>
                                <div
                                    className="service-title-bar"
                                    onClick={() => handleService(6)}
                                >
                                    <div
                                        className={`service-title ${
                                            service.id === 6 && "active-bar"
                                        }`}
                                    >
                                        <p>Business Law</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="service-content position-relative">
                                <div className="service-data-img">
                                    <img
                                        className="img-fluid"
                                        src={service.img}
                                        alt=""
                                    />
                                    <div className="service-data">
                                        <h3 className="text-light">
                                            {service.name}
                                        </h3>
                                        <h4 className="text-light">
                                            {service.price}$
                                        </h4>
                                        <p className="mb-2 mb-md-4 text-light">
                                            Domestic Violence in London How a
                                            Lawyer Can Help I must explain to
                                            you how all this mistaken idea of
                                            denouncing pleasure and praising
                                            pain was
                                        </p>
                                        <div>
                                            <a href=" ">Read More</a>
                                            <Link to="/checkout">Checkout</Link>
                                        </div>
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
