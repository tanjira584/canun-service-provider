import React from "react";
import "./Bannar.css";
import heroman from "../../../images/hero-man.png";

const Bannar = () => {
    return (
        <div className="slide-bannar">
            <div className="container-md container-fluid">
                <div className="row">
                    <div className="col-md-7  d-flex flex-column justify-content-center">
                        <div className="slide-content">
                            <div className="slide-title">
                                <h1>Canun Lawyer APP.</h1>
                                <h1>Let's Fight For Your Justice.</h1>
                            </div>
                            <div className="slide-text">
                                <h4>
                                    Law is commonly understood as a system of
                                    rules that are created and enforced through
                                    social or government.
                                </h4>
                            </div>
                            <div className="slide-btn">
                                <button>Explore more</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 d-none d-md-block">
                        <div className="bannar-img">
                            <img className="img-fluid" src={heroman} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;
