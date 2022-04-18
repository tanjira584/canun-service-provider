import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../share/Footer/Footer";
import Header from "../../share/Header/Header";
import "./Signup.css";
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    /*------Use React-firebase hooks-----*/
    const [createUserWithEmailAndPassword, user, loading] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [signInWithGoogle, guser, gloading] = useSignInWithGoogle(auth);

    /*-----Handle Input from------*/
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    if (loading || updating || gloading) {
        return <p>Loading.....</p>;
    }
    if (user || guser) {
        navigate("/");
    }

    /*------Handle Signup form Submit-----*/
    const handleSubmit = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    };

    /*----Handle Google Signin-----*/
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    };
    return (
        <div className="login-area">
            <Header></Header>
            <div className="container mb-5">
                <div className="login-wrapper mt-5">
                    <h2 className="text-center text-light text-uppercase mb-4">
                        Didn't Have An Account ? Please Register.
                    </h2>
                    <div className="login-form w-50 mx-auto">
                        {/*------------Sign up Form-----------*/}
                        <form onSubmit={handleSubmit} className="border p-5">
                            <div className="mb-3">
                                <label
                                    htmlFor="name"
                                    className="form-label text-light"
                                >
                                    Enter name
                                </label>
                                <input
                                    onBlur={handleName}
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Enter name"
                                />
                            </div>
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
                            </div>
                            <div className="signup-btn">
                                <button onClick={handleSubmit}>Register</button>
                            </div>
                            <p className="mt-3 text-center text-light">
                                Already have an account?{" "}
                                <Link to="/login">Login here</Link>
                            </p>
                        </form>
                        {/*------Form Devider------*/}
                        <div className="or-div d-flex align-items-center mt-3">
                            <div className="w-50 border"></div>
                            <div className="mx-2 text-light">or</div>
                            <div className="w-50 border"></div>
                        </div>
                        {/*---------Google Signin ------------*/}
                        <div className="login-providers mt-3 px-5">
                            <div className="google">
                                <button onClick={handleGoogleSignIn}>
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

export default Signup;
