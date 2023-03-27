import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";

import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-[#ffffff] sm:px-8 px-4 py-4 border-b border-b-[#e0e7f4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-30 h-12 object-contain" />
        </Link>

        <div className="flex">
          <Link
            to="/create-post"
            className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 mr-10 rounded-md"
          >
            Create
          </Link>

          <a
            href="https://github.com/Jodhansajifab"
            target="_blank"
            className="font-inter font-medium bg-[#484bb2] text-white px-4 py-2 rounded-md"
          >
            Github
          </a>
        </div>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#e7e9f3] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
