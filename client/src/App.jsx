import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import {Button} from "./components/Button.jsx";
import {NotifyToastContainer} from "./components/NotifyToastContainer.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <header
                className=" w-full flex justify-between items-center bg-black  sm:px-8 px-4 py-4 border-b border-gray-800">
                <Link to="/">
                    <div className='flex items-center gap-1 text-primary-100 group'>
                        <img src='/images/logo1.png' alt="logo" className="group-hover:scale-105 transition-all duration-300 w-20 h-10 object-contain"/>
                        <p className='hidden md:block text-xl font-bebas md:text-3xl pt-1 tracking-wide group-hover:text-purple-300 transition-all'>AIR-IMG</p>
                    </div>
                </Link>

                <div className="flex gap-6">
                    <Link
                        to="/create-post"
                    >
                        <Button text={'Create'} customClass={'w-[5rem] md:w-[10rem] h-[3rem]'}/>
                    </Link>

                    <a
                        href='https://github.com/jodhan-techinject'
                        target='_blank'
                        className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-3 py-3 rounded-full border border-gray-900 duration-200 hover:text-gray-300 hover:border-gray-800 hover:from-black hover:to-gray-900">
                        <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#FFFFFF"
                                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                        </svg>
                        <p className='hidden md:block'>
                            Github
                        </p>
                    </a>
                </div>
            </header>
            <main className="w-full bg-primary-400 min-h-[calc(100vh-80px)]">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/create-post" element={<CreatePost/>}/>
                </Routes>
            </main>
            <NotifyToastContainer/>
        </BrowserRouter>
    );
};

export default App;
