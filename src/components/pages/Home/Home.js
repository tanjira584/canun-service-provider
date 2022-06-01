import React from "react";

import Footer from "../../share/Footer/Footer";
import Header from "../../share/Header/Header";
import Bannar from "./Bannar";
import Services from "./Services";
import Consult from "./Consult";
import BlogSection from "./BlogSection";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Bannar></Bannar>
            <Services></Services>
            <Consult></Consult>
            <BlogSection></BlogSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;
