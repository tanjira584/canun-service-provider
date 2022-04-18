import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../../share/Footer/Footer";
import Header from "../../share/Header/Header";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import {
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
    useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

    /*-----Use React Firebase Hooks----*/
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [signInWithGoogle, guser, gloading, gerror] =
        useSignInWithGoogle(auth);

    /*------Handle Input Event-----*/
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    // if (sending) {
    //     return <p>Loading.....</p>;
    // }
    if (user || guser) {
        navigate(from, { replace: true });
    }
    let errorElement;
    if (error || gerror) {
        const err = error.message || gerror.message;
        errorElement = <p className="text-danger m-0">{err} </p>;
    }

    /*-----Handle Submit the Loginform-----*/
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    };

    /*-----Send Password Reset Email-----*/
    const handleForgotPassword = () => {
        sendPasswordResetEmail(email);
        console.log("Sent an email");
        toast("Sent an email");
    };
    return (
        <div className="login-area">
            <Header></Header>
            <div className="container mb-5">
                <div className="login-wrapper mt-5">
                    <h2 className="text-center text-uppercase mb-4 text-light">
                        Already Have An Account ? Please Login.
                    </h2>
                    <div className="login-form w-50 mx-auto">
                        {/*-------Login Form------*/}
                        <form onSubmit={handleSubmit} className="border p-5">
                            <div className="mb-3">
                                <label
                                    htmlFor="email"
                                    className="form-label text-light"
                                >
                                    Email address*
                                </label>
                                <input
                                    onBlur={handleEmail}
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter email"
                                    required
                                />
                                <div>{errorElement}</div>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="password"
                                    className="form-label text-light"
                                >
                                    Password*
                                </label>
                                <input
                                    onBlur={handlePassword}
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter password"
                                    required
                                />
                                <div>{errorElement}</div>
                            </div>
                            <p className="mb-5">
                                <button
                                    onClick={handleForgotPassword}
                                    className="password-reset-btn bg-transparent border-0 text-danger"
                                >
                                    Forgot Password?
                                </button>
                            </p>
                            <ToastContainer></ToastContainer>
                            <div className="login-btn">
                                <button type="submit">Login</button>
                            </div>
                            <p className="mt-3 text-center text-light">
                                Don't you have an account?{" "}
                                <Link to="/signup">Create an account</Link>
                            </p>
                        </form>
                        {/*------Form Devider-----*/}
                        <div className="or-div d-flex align-items-center mt-3">
                            <div className="w-50 border"></div>
                            <div className="mx-2 text-light">or</div>
                            <div className="w-50 border"></div>
                        </div>
                        {/*------Log in With Google ----*/}
                        <div className="login-providers mt-3 px-5">
                            <div className="google">
                                <button onClick={() => signInWithGoogle()}>
                                    Continue with Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;
