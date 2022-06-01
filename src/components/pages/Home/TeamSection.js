import React from "react";
import team1 from "../../../images/team1.jpg";
import team2 from "../../../images/team2.jpg";
import team3 from "../../../images/team3.jpg";
import team4 from "../../../images/team4.jpg";

const TeamSection = () => {
    return (
        <section className="py-5">
            <div className="container-md py-5">
                <div className="section-info d-flex justify-content-between align-items-center mb-5">
                    <div className="section-title w-50">
                        <h2>Meet Our Most Talented & Qualified Attorneys</h2>
                    </div>
                    <p
                        className="w-50 text-muted"
                        style={{
                            fontSize: "18px",
                            lineHeight: "1.6em",
                            fontWeight: "500",
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </div>
                <div className="team-wraper">
                    <div className="row g-0">
                        <div className="col-md-3">
                            <div className="team">
                                <img
                                    src={team1}
                                    style={{ width: "100%" }}
                                    alt=""
                                />
                            </div>
                            <div
                                className="info p-4 text-center border-end"
                                style={{ backgroundColor: "#f3f3f3" }}
                            >
                                <h3 className="fst-italic">Jhon Alvert</h3>
                                <p
                                    className="m-0 text-muted"
                                    style={{
                                        fontSize: "18px",
                                        fontWeight: "500",
                                    }}
                                >
                                    Education Lawyer
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="team">
                                <img
                                    src={team2}
                                    style={{ width: "100%" }}
                                    alt=""
                                />
                            </div>
                            <div
                                className="info p-4 text-center border-end"
                                style={{ backgroundColor: "#f3f3f3" }}
                            >
                                <h3 className="fst-italic">Dorothy Jane</h3>
                                <p
                                    className="m-0 text-muted"
                                    style={{
                                        fontSize: "18px",
                                        fontWeight: "500",
                                    }}
                                >
                                    Business Lawyer
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="team">
                                <img
                                    src={team3}
                                    style={{ width: "100%" }}
                                    alt=""
                                />
                            </div>
                            <div
                                className="info p-4 text-center  border-end"
                                style={{ backgroundColor: "#f3f3f3" }}
                            >
                                <h3 className="fst-italic">David Harry</h3>
                                <p
                                    className="m-0 text-muted"
                                    style={{
                                        fontSize: "18px",
                                        fontWeight: "500",
                                    }}
                                >
                                    Criminal Lawyer
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="team">
                                <img
                                    src={team4}
                                    style={{ width: "100%" }}
                                    alt=""
                                />
                            </div>
                            <div
                                className="info p-4 text-center"
                                style={{ backgroundColor: "#f3f3f3" }}
                            >
                                <h3 className="fst-italic">Janella Archid</h3>
                                <p
                                    className="m-0 text-muted"
                                    style={{
                                        fontSize: "18px",
                                        fontWeight: "500",
                                    }}
                                >
                                    Family Lawyer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
