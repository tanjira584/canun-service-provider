import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../../../images/blog1.jpg";
import blog2 from "../../../images/blog2.jpg";
import blog3 from "../../../images/blog3.jpg";
import writer1 from "../../../images/writer1.jpeg";
const BlogSection = () => {
    return (
        <section className="py-5">
            <div className="container-md py-5">
                <div className="section-info mb-5 mx-2">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="section-title">
                                <h2>Reads our recent News & Blogs about Law</h2>
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
                <div className="container-md mt-4">
                    <div className="row g-5">
                        <div className="col-md-4">
                            <div className="blog shadow-lg rounded">
                                <div className="img mb-3">
                                    <img src={blog1} width="100%" alt="" />
                                </div>
                                <div className="mb-3 p-3">
                                    <Link
                                        to="/"
                                        className="btn "
                                        style={{
                                            padding: "5px 30px",
                                            color: "#f1ab08",
                                            background:
                                                "rgb(229 210 186 / 59%)",
                                        }}
                                    >
                                        Business
                                    </Link>
                                </div>
                                <h4 className="p-3 pt-0">
                                    8 Mistakes First-Time a Man Can Do About Law
                                </h4>
                                <div className="d-flex justify-content-between align-items-center p-3 border-top">
                                    <div className="writer-info d-flex align-items-center">
                                        <div className="img me-3">
                                            <img
                                                src={writer1}
                                                className="rounded-circle"
                                                alt=""
                                                height={50}
                                            />
                                        </div>
                                        <div>
                                            <h6 className="mb-0">
                                                Jenifer Willy
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="date">
                                        <span className="text-muted text-uppercase">
                                            SEPTEMBER 8, 2021
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="blog shadow-lg rounded">
                                <div className="img mb-3">
                                    <img src={blog2} width="100%" alt="" />
                                </div>
                                <div className="mb-3 p-3">
                                    <Link
                                        to="/"
                                        className="btn "
                                        style={{
                                            padding: "5px 30px",
                                            color: "#f1ab08",
                                            background:
                                                "rgb(229 210 186 / 59%)",
                                        }}
                                    >
                                        Criminal
                                    </Link>
                                </div>
                                <h4 className="p-3 pt-0">
                                    Things to Consider When Choosing a Law
                                    School Track
                                </h4>
                                <div className="d-flex justify-content-between align-items-center p-3 border-top">
                                    <div className="writer-info d-flex align-items-center">
                                        <div className="img me-3">
                                            <img
                                                src={writer1}
                                                className="rounded-circle"
                                                alt=""
                                                height={50}
                                            />
                                        </div>
                                        <div>
                                            <h6 className="mb-0">
                                                Jenifer Willy
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="date">
                                        <span className="text-muted text-uppercase">
                                            SEPTEMBER 8, 2021
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="blog shadow-lg rounded">
                                <div className="img mb-3">
                                    <img src={blog3} width="100%" alt="" />
                                </div>
                                <div className="mb-3 p-3">
                                    <Link
                                        to="/"
                                        className="btn "
                                        style={{
                                            padding: "5px 30px",
                                            color: "#f1ab08",
                                            background:
                                                "rgb(229 210 186 / 59%)",
                                        }}
                                    >
                                        Attorney
                                    </Link>
                                </div>
                                <h4 className="p-3 pt-0">
                                    Domestic Violence in London How a Lawyer Can
                                    Help
                                </h4>
                                <div className="d-flex justify-content-between align-items-center p-3 border-top">
                                    <div className="writer-info d-flex align-items-center">
                                        <div className="img me-3">
                                            <img
                                                src={writer1}
                                                className="rounded-circle"
                                                alt=""
                                                height={50}
                                            />
                                        </div>
                                        <div>
                                            <h6 className="mb-0">
                                                Jenifer Willy
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="date">
                                        <span className="text-muted text-uppercase">
                                            SEPTEMBER 8, 2021
                                        </span>
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

export default BlogSection;
