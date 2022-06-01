import React from "react";

import Footer from "../../share/Footer/Footer";
import Header from "../../share/Header/Header";
import Bannar from "./Bannar";
import Services from "./Services";
import Consult from "./Consult";
import BlogSection from "./BlogSection";
import GetQuote from "./GetQuote";
import ReviewsSection from "./ReviewsSection";
import TeamSection from "./TeamSection";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Bannar></Bannar>
            <Consult></Consult>
            <Services></Services>
            <ReviewsSection></ReviewsSection>
            <TeamSection></TeamSection>
            <GetQuote></GetQuote>
            <BlogSection></BlogSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;
