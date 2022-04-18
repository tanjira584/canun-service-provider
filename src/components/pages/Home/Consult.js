import React from "react";
import "./Consult.css";
import sigin from "../../../images/signature.png";

const Consult = () => {
    return (
        <div className="consulting-area">
            <div className="container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            {/*---------Appoinment Form------*/}
                            <div className="consulting-form">
                                <form>
                                    <h2>Free Consulting</h2>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="Enter name"
                                    />
                                    <input
                                        type="email"
                                        name=""
                                        id=""
                                        placeholder="Enter email"
                                    />
                                    <select name="" id="">
                                        <option value="">Subject</option>
                                        <option value="">Family Law</option>
                                        <option value="">
                                            Personal Injury
                                        </option>
                                        <option value="">Criminal Law</option>
                                        <option value="">Education Law</option>
                                        <option value="">Business Law</option>
                                        <option value="">Real State Law</option>
                                    </select>
                                    <textarea
                                        name=""
                                        id=""
                                        cols="30"
                                        rows="4"
                                        placeholder="Message..."
                                    ></textarea>
                                    <button>Make An Appoinment</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center">
                            {/*---------Appoinment Content------*/}
                            <div className="consulting-content px-md-4">
                                <div className="title mb-2">
                                    <h2 className="">
                                        I'm Here To Fight Against Any Violence
                                        With Experience
                                    </h2>
                                </div>
                                <div className="content px-md-4">
                                    <p>
                                        A lawyer is a person who is qualified to
                                        advise people about the law and
                                        represent them in court. Prosecution and
                                        defense lawyers are expected to deliver
                                        closing arguments next week. Synonyms:
                                        legal adviser, attorney, solicitor,
                                        counsel More Synonyms of lawyer. COBUILD
                                        Advanced English Dictionary.
                                    </p>
                                    <div className="signature">
                                        <h4>Tanjir Ahmed</h4>
                                        <span className="d-block mb-4">
                                            Lawyer, Social Server.
                                        </span>
                                        <img src={sigin} alt="" />
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

export default Consult;
