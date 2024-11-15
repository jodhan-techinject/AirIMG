import React, {useEffect, useState} from "react";
import {HomeBanner} from "../components/HomeBanner.jsx";
import ExploreSection from "../components/ExploreSection.jsx";

const Home = () => {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        let animationFrameId;

        const handleMouseMove = (event) => {
            animationFrameId = requestAnimationFrame(() => {
                setMousePosition({ x: event.clientX, y: event.clientY });
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [])


    return (
        <div className='relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-black to-blue-500/10'>

            {/* Glow spot */}
            <div
                className="absolute pointer-events-none w-[500px] h-[500px] rounded-full bg-blue-500/15 blur-[100px] animate-pulse"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    transform: 'translate(-50%, -50%)',
                }}
            />
            <HomeBanner/>
            <ExploreSection/>
        </div>
    );
};

export default Home;
