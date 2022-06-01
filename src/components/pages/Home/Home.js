import React from "react";

import Footer from "../../share/Footer/Footer";
import Header from "../../share/Header/Header";
import Bannar from "./Bannar";
import Services from "./Services";
import Consult from "./Consult";
import BlogSection from "./BlogSection";
import GetQuote from "./GetQuote";
import ReviewsSection from "./ReviewsSection";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Bannar></Bannar>
            <Services></Services>
            <ReviewsSection></ReviewsSection>
            <Consult></Consult>
            <GetQuote></GetQuote>
            <BlogSection></BlogSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;
