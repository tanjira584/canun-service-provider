import React from "react";
import "./Footer.css";

const Footer = () => {
    const d = new Date();
    return (
        <div>
            <div className="footer-bottom">
                <p className="text-center m-0 text-light">
                    &copy; Copyright {d.getFullYear()} | Canun - Lawyer App |
                    All right reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
