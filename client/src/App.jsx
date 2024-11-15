import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import {Button} from "./components/Button.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <header
                className="w-full flex justify-between items-center bg-black  sm:px-8 px-4 py-4">
                <Link to="/">
                    <div className='flex items-center gap-1 text-primary-100'>
                        <img src='/images/logo1.png' alt="logo" className="w-20 h-10 object-contain"/>
                        <p className='text-xl font-bebas md:text-3xl pt-1 tracking-wide'>AIR-IMG</p>
                    </div>
                </Link>

                <div className="flex gap-6">
                    <Link
                        to="/create-post"
                    >
                        <Button text={'Create'} customClass={'w-[5rem] md:w-[13rem] h-[3rem]'}/>
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
            <main className="sm:p-8 px-4 py-8 w-full bg-primary-400 min-h-[calc(100vh-73px)]">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/create-post" element={<CreatePost/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;
