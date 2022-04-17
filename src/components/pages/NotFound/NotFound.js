import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import notimg from "../../../images/not.png";

const NotFound = () => {
    return (
        <div className="not-area">
            <div className="not-img text-center">
                <img src={notimg} alt="" />
            </div>
            <div className="not-content text-center">
                <h1>Page Not Found</h1>
                <p>Why don't you try one of these pages instead?</p>
                <div className="btns">
                    <Link className="btn btn-success" to="/">
                        Home
                    </Link>
                    <Link className="btn btn-success" to="/blogs">
                        Blogs
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default NotFound;
