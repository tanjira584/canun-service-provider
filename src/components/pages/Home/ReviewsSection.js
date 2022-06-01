import React from "react";
import bg from "../../../images/page-titlle.jpg";
import testi3 from "../../../images/testi3.jpg";

const ReviewsSection = () => {
    return (
        <section
            className=""
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div
                className="py-5"
                style={{ backgroundColor: "rgb(3 14 38 / 59%)" }}
            >
                <div className="container-md py-5">
                    <div className="row">
                        <div className="col-md-5 d-flex justify-content-center">
                            <div className="section-info pe-5 d-flex justify-content-center flex-column">
                                <div className="section-title mb-4">
                                    <h2 className="text-light">
                                        What Our Clients Say About Us
                                    </h2>
                                </div>
                                <p
                                    className="text-light m-0"
                                    style={{
                                        fontWeight: "500",
                                        lineHeight: "1.6em",
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div
                                className="review p-5"
                                style={{
                                    backgroundColor: "rgb(3 14 38 / 39%)",
                                }}
                            >
                                <div className="content text-center text-light mb-3">
                                    <p
                                        style={{
                                            fontSize: "18px",
                                            lineHeight: "1.6em",
                                            fontStyle: "italic",
                                        }}
                                    >
                                        There are many variations of passages of
                                        Lorem Ipsum available, but the majority
                                        have suffered alteration in some form,
                                        by injected humour variations incididunt
                                        ut labore et dolore. Quis ipsum
                                        suspendisse ultrices gravida.
                                    </p>
                                </div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="img">
                                        <img
                                            className="rounded-circle"
                                            src={testi3}
                                            alt=""
                                            style={{
                                                borderTop: "10px solid #dfaa61",
                                            }}
                                        />
                                    </div>
                                    <div className="ms-3">
                                        <h5 className="text-light">
                                            Jeniffer Lophej
                                        </h5>
                                        <p
                                            style={{ color: "#dfaa61" }}
                                            className="m-0"
                                        >
                                            CEO & Founder
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
