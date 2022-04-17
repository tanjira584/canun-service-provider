import React from "react";
import bgimg from "../../../images/page-titlle.jpg";

const Breadcrumb = ({ pageName }) => {
    return (
        <div className="breadcrumb position-relative">
            <img className="img-fluid" src={bgimg} alt="" />
            <h2
                className="position-absolute text-light top-50"
                style={{ left: "50%", transform: "translate(-50%,-50%)" }}
            >
                {pageName}
            </h2>
        </div>
    );
};

export default Breadcrumb;
