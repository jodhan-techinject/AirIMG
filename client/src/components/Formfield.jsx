import React from "react";

const Formfield = ({
                       LabelName,
                       name,
                       placeholder,
                       value,
                       handleChange,
                       isSupriseMe,
                       handleSupriseMe,
                   }) => {

    return (
        <div>

            <div className="flex items-center gap-2 mb-2">
                <label htmlFor={name} className="block text-sm font-medium text-gray-900">
                    {LabelName}
                </label>

                {isSupriseMe && (
                    <button type="button" onClick={handleSupriseMe}
                            className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black">
                        Suprise Me
                    </button>
                )}

            </div>

            <div className=" w-full max-w-full">
                <div className="relative">
                    <div
                        className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
                    >
                        <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        >
                            <path
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                strokeWidth="2"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                stroke="currentColor"
                            ></path>
                        </svg>
                    </div>
                    <input
                        required=""
                        className="block w-full p-2 ps-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focuborder-primary-50 outline-none focus:border-primary-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focuborder-primary-50 font-poppins dark:focus:border-primary-50 placeholder:text-sm"
                        type="search"
                        id={name}
                        name={name}
                        placeholder={placeholder}
                        value={value}
                        onChange={handleChange}
                    />
                    <button
                        onClick={handleChange}
                        className="absolute end-2.5 bottom-1/2 translate-y-1/2 p-2 text-sm font-medium text-white bg-primary-50 rounded-lg border border-primary-50 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 "
                    >
                        <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            className="w-4 h-4"
                        >
                            <path
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                strokeWidth="2"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                stroke="currentColor"
                            ></path>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Formfield;
