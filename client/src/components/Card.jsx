import React from 'react';
import {downloadImage} from "../utils/utils.js";

const Card = ({_id, name, prompt, photo}) => (
    <div className="rounded-xl group relative hover:scale-105 transition-all duration-300 ease-in-out card">
        <img
            className="w-full h-auto object-cover rounded-xl"
            src={photo}
            alt={prompt}
        />
        <div
            className="group-hover:opacity-100 transition-all duration-300 opacity-0 flex flex-col max-h-[94.5%] absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
            <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>

            <div className="mt-5 flex justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                    <div
                        className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">{name[0]}</div>
                    <p className="text-white text-sm">{name}</p>
                </div>
                <button type="button" onClick={() => downloadImage(_id, photo)}
                        className="outline-none bg-transparent border-none">
                    <img src='/images/download.png' alt="download" className="w-6 h-6 object-contain invert"/>
                </button>
            </div>
        </div>
    </div>
);

export default Card;
