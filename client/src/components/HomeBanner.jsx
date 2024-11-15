import {Button} from "./Button.jsx";
import {Link} from "react-router-dom";

export function HomeBanner() {
    return (
        <div className="relative">
            {/* Gradient background effect */}
            <div className="absolute inset-0 "/>

            {/* Content */}
            <div className="relative mx-auto max-w-7xl px-4 py-14 md:py-20 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center">
                    {/* Logo */}
                    <div className="mb-8 flex items-center gap-2">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"/>
                        <h2 className="text-2xl font-bold text-white">AIR-IMG</h2>
                    </div>

                    {/* Main heading */}
                    <h1 className="mb-10 font-poppins text-4xl md:text-6xl font-bold tracking-wide text-white sm:text-7xl">
                        THE COMMUNITY
                        <br/>
                        SHOWCASE
                    </h1>

                    {/* Subtitle */}
                    <p className="mb-12 max-w-2xl text:md md:text-lg text-gray-400 font-poppins">
                        Transform your ideas into stunning visuals with our AI-powered image generation platform.
                        Join our creative community and explore endless possibilities.
                    </p>

                    {/* CTA Button */}
                    <Link
                        to="/create-post"
                        className='hover:scale-105 transition-all ease-in-out duration-300'
                    >
                        <Button text={'Start Generating'} customClass={'w-[20rem] pl-5'}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}