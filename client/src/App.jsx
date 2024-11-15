import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreatePost from "./pages/CreatePost.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <header
                className="w-full flex justify-between items-center bg-primary-400 sm:px-8 px-4 py-4 border-b border-b-[#e0e7f4]">
                <Link to="/">
                    <div className='flex items-center gap-1 text-primary-100'>
                        <img src='/images/logo1.png' alt="logo" className="w-20 h-10 object-contain"/>
                        <p className='text-xl font-bebas md:text-3xl pt-1 tracking-wide'>AIR-IMG</p>
                    </div>
                </Link>

                <div className="flex">
                    <Link
                        to="/create-post"
                        className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 mr-10 rounded-md"
                    >
                        Create
                    </Link>

                    <a
                        href="https://github.com/jodhan-techinject"
                        target="_blank"
                        className="font-inter font-medium bg-[#e48a45] text-white px-4 py-2 rounded-md"
                    >
                        Github
                    </a>
                </div>
            </header>
            <main className="sm:p-8 px-4 py-8 w-full bg-[#f5f5f7] min-h-[calc(100vh-73px)]">
            <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/create-post" element={<CreatePost/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;
