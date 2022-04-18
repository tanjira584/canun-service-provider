import React from "react";
import Breadcrumb from "../../share/Breadcrumb/Breadcrumb";
import Footer from "../../share/Footer/Footer";
import Header from "../../share/Header/Header";
import aboutimg from "../../../images/my-bg2.png";
import sigin from "../../../images/signature.png";
import "./About.css";

const About = () => {
    return (
        <div>
            <Header></Header>
            <Breadcrumb pageName="About"></Breadcrumb>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-5">
                        <div className="about-me-img">
                            <img className="img-fluid" src={aboutimg} alt="" />
                        </div>
                    </div>
                    <div className="col-md-7  d-flex flex-column justify-content-center">
                        <div className="about-me-content px-4">
                            <div className="title mb-5">
                                <h2 className="">
                                    We Are Here To Fight Against Any Violence
                                    With Experience
                                </h2>
                            </div>
                            <div className="content">
                                <p>
                                    My Aim in life to become a Full Stack Web
                                    Developer and want to become the skilled
                                    employee as a Web Developer . I can't even
                                    think of living without my aim in life which
                                    is to become a software engineer. Every
                                    single morning when I wake up, The desire in
                                    my heart becomes. So intense, that it gives
                                    me a thrill toward the achievement of my
                                    dream. Life is a race and if you don't run
                                    fast you will lose. That is why I'm working
                                    hark to become a Full Stack Web Developer.
                                </p>
                                <div className="signature">
                                    <h4>Tanjir Ahmed</h4>
                                    <span className="d-block mb-4">
                                        Full Stack Web developer
                                    </span>
                                    <img src={sigin} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;
