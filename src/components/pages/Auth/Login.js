import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../../share/Footer/Footer";
import Header from "../../share/Header/Header";
import "./Login.css";
import {
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname;

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, guser, gloading, gerror] =
        useSignInWithGoogle(auth);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    if (user || guser) {
        navigate(from, { replace: true });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    };
    const handleForgotPassword = () => {};
    return (
        <div className="login-area">
            <Header></Header>
            <div className="container mb-5">
                <div className="login-wrapper mt-5">
                    <h2 className="text-center text-uppercase mb-4 text-light">
                        Already Have An Account ? Please Login.
                    </h2>
                    <div className="login-form w-50 mx-auto">
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
                            </div>
                            <div className="mb-2">
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
                            </div>
                            <p className="mb-5">
                                <button
                                    onClick={handleForgotPassword}
                                    className="password-reset-btn"
                                >
                                    Forgot Password?
                                </button>
                            </p>
                            <div className="login-btn">
                                <button>Login</button>
                            </div>
                            <p className="mt-3 text-center text-light">
                                Don't you have an account?{" "}
                                <Link to="/signup">Create an account</Link>
                            </p>
                        </form>
                        <div className="or-div d-flex align-items-center mt-3">
                            <div className="w-50 border"></div>
                            <div className="mx-2 text-light">or</div>
                            <div className="w-50 border"></div>
                        </div>
                        <div className="login-providers mt-3 px-5">
                            <div className="facebook">
                                <button>Continue with facebook</button>
                            </div>
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
