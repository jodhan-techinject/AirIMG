import React from "react";
import {HomeBanner} from "../components/HomeBanner.jsx";
import ExploreSection from "../components/ExploreSection.jsx";

const Home = () => {
    return (
        <div className='bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10'>
            <HomeBanner/>
            <ExploreSection/>
        </div>
    );
};

export default Home;
