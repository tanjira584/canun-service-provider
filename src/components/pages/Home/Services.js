import React, { useState } from "react";
import "./Services.css";

import useServices from "../../../hooks/useServices";
import { Link } from "react-router-dom";

const Services = () => {
    const [services, ser] = useServices();

    const [service, setService] = useState(ser);

    const handleService = (id) => {
        const seleltedService = services.find(
            (service) => service.id === parseInt(id)
        );
        setService(seleltedService);
    };

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
                            {services.map((service) => (
                                <div
                                    className="service-title-bar"
                                    key={service.id}
                                    onClick={() => handleService(service.id)}
                                >
                                    <div className="service-title ">
                                        <p>{service.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-md-8">
                            <div className="service-content position-relative">
                                <div className="service-data-img">
                                    <img src={service.img} alt="" />
                                    <div className="service-data">
                                        <h3 className="text-light">
                                            {service.name}
                                        </h3>
                                        <h4 className="text-light">
                                            {service.price}$
                                        </h4>
                                        <p className="mb-4 text-light">
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
