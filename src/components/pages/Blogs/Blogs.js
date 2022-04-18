import React, { useEffect, useState } from "react";
import Header from "../../share/Header/Header";
import Footer from "../../share/Footer/Footer";
import Breadcrumb from "../../share/Breadcrumb/Breadcrumb";
import "./Blogs.css";

const Blogs = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("posts.json")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);
    console.log(posts);
    return (
        <div className="blog-page" style={{ backgroundColor: "#f7f7f7" }}>
            <Header></Header>
            <Breadcrumb pageName="Blogs"></Breadcrumb>
            <div className="blogs-area container-md container-fluid py-5">
                <div className="blog1 mb-5">
                    <div className="question1 mb-3">
                        <h2>
                            Why are you using firebase? What other options do
                            you have to implement authentication?
                        </h2>
                    </div>
                    <div className="answere1">
                        <p>
                            Google’s Firebase is a mobile platform that lets you
                            develop mobile apps. It is especially geared towards
                            business apps, with the intention of helping
                            businesses grow their user bases and increase their
                            profits through their mobile apps.
                        </p>
                        <p>
                            With Firebase, you can focus your time and attention
                            on developing the best app(s) possible for your
                            business. Since the operations and internal
                            functions are so solid, and taken care of by the
                            Firebase interface, you can spend more time
                            developing the high quality app that users are going
                            to want to use.
                        </p>
                        <span>
                            Some of the features you can develop include:
                        </span>
                        <p>
                            <span>Cloud Messaging: </span>Deliver and receive
                            messages in a more reliable way across platforms
                        </p>
                        <p>
                            <span>Authentication: </span>Have a lot less
                            friction with acclaimed authentication
                        </p>
                        <p>
                            <span>Hosting: </span>Deliver web content faster
                        </p>
                        <p>
                            <span>Realtime Database: </span> Store and sync app
                            data in realtime
                        </p>
                        <p>
                            <span>Storage: </span> File storing made easy
                        </p>
                    </div>
                </div>
                <div className="blog2 mb-5">
                    <div className="question2 mb-3">
                        <h2>
                            {" "}
                            What other services does firebase provide other than
                            authentication?
                        </h2>
                    </div>
                    <div className="answer2">
                        <p>
                            <span>
                                There are many services which Firebase provides,
                                Most useful of them are:
                            </span>
                        </p>
                        <p>
                            <span>Cloud Messaging: </span>Firebase Cloud
                            Messaging (FCM) is a cross-platform messaging
                            solution that lets you reliably send messages at no
                            cost.
                        </p>
                        <p>
                            <span>Hosting: </span> Firebase Hosting provides
                            fast and secure hosting for your web app, static and
                            dynamic content, and microservices. Remote
                            Configuration: Change the behavior and appearance of
                            your app without publishing an app update, at no
                            cost, for unlimited daily active users.
                        </p>
                        <p>
                            <span>Test Lab: </span>Firebase Test Lab is a
                            cloud-based app testing infrastructure that lets you
                            test your app on a range of devices and
                            configurations, so you can get a better idea of how
                            it'll perform in the hands of live users.
                        </p>
                        <p>
                            <span>Realtime Database: </span>Store and sync data
                            with our NoSQL cloud database. Data is synced across
                            all clients in realtime, and remains available when
                            your app goes offline.
                        </p>
                        <p>
                            <span>Storage: </span> Cloud Storage for Firebase is
                            built for app developers who need to store and serve
                            user-generated content, such as photos or videos.
                        </p>
                    </div>
                </div>
                <div className="blog3 mb-5">
                    <div className="question3 mb-3">
                        <h2>
                            What difference between authorization and
                            authentication?
                        </h2>
                    </div>
                    <div className="answer3">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="author">
                                    <h5>Authorization: </h5>
                                    <ul>
                                        <li>
                                            {" "}
                                            Authorization determines what
                                            resources a user can access.
                                        </li>
                                        <li>
                                            Authorization works through settings
                                            that are implemented and maintained
                                            by the organization.
                                        </li>
                                        <li>
                                            Authorization always takes place
                                            after authentication.
                                        </li>
                                        <li>
                                            Authorization isn’t visible to or
                                            changeable by the user.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="authen">
                                    <h5>Authentication: </h5>
                                    <ul>
                                        <li>
                                            Authentication verifies who the user
                                            is.
                                        </li>
                                        <li>
                                            Authentication works through
                                            passwords, one-time pins, biometric
                                            information, and other information
                                            provided or entered by the user.
                                        </li>
                                        <li>
                                            Authentication is the first step of
                                            a good identity and access
                                            management process.
                                        </li>
                                        <li>
                                            Authentication is visible to and
                                            partially changeable by the user.
                                        </li>
                                    </ul>
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

export default Blogs;
