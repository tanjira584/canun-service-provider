import React from "react";
import consult from "../../../images/consult.png";
import bg from "../../../images/page-titlle.jpg";

const GetQuote = () => {
    return (
        <section
            className=""
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                zIndex: 1,
            }}
        >
            <div>
                <div className="container-md">
                    <div className="row pt-5">
                        <div className="col-md-5">
                            <div className="quote-img " style={{ zIndex: 2 }}>
                                <img
                                    style={{ width: "100%" }}
                                    src={consult}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="quote-area">
                                <div className="section-info w-75">
                                    <div className="section-title mb-4">
                                        <h2 className="text-light">
                                            Need Consultancy, Request A Free
                                            Quote
                                        </h2>
                                    </div>
                                    <p
                                        className="m-0 text-light"
                                        style={{
                                            fontWeight: "500",
                                            fontSize: "18px",
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor.
                                    </p>
                                </div>
                                <div className="form mt-5">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div class="mb-4">
                                                    <input
                                                        type="text"
                                                        class="form-control bg-transparent p-3"
                                                        placeholder="Your name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div class="mb-4">
                                                    <input
                                                        type="email"
                                                        class="form-control bg-transparent p-3"
                                                        placeholder="Your email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div class="mb-4">
                                                    <input
                                                        type="text"
                                                        class="form-control bg-transparent p-3"
                                                        placeholder="Your Phone"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div class="mb-4">
                                                    <select
                                                        name=""
                                                        class="form-control bg-transparent p-3 text-secondary"
                                                        id=""
                                                    >
                                                        <option value="">
                                                            Subject
                                                        </option>
                                                        <option value="">
                                                            Family Law
                                                        </option>
                                                        <option value="">
                                                            Business Law
                                                        </option>
                                                        <option value="">
                                                            Education Law
                                                        </option>
                                                        <option value="">
                                                            Personal Injury
                                                        </option>
                                                        <option value="">
                                                            Criminal Law
                                                        </option>
                                                        <option value="">
                                                            Realstate Law
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div class="mb-4">
                                                    <textarea
                                                        class="form-control bg-transparent p-3"
                                                        name=""
                                                        id=""
                                                        cols="30"
                                                        rows="5"
                                                        placeholder="Message*"
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            style={{
                                                backgroundColor: "#DFAA61",
                                            }}
                                            className="btn btn-lg text-light"
                                        >
                                            Make An Appoinment
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetQuote;
