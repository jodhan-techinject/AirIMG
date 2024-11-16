import React from "react";

export const GenerateInput = ({
                                  LabelName,
                                  name,
                                  placeholder,
                                  value,
                                  handleChange,
                                  handleSurpriseMe,
                                  generateImage
                              }) => {

        return (
            <div className='flex flex-col w-full pt-5'>
                <label form={name} className='font-poppins text-primary-100 pb-2'>
                    Enter Prompt :
                </label>
                <div className='flex flex-col md:flex-row gap-5 w-full'>

                <textarea
                    className=" text-primary-100 bg-gray-900/50 md:w-[90%] border-gray-700 placeholder:text-gray-500 p-3 border rounded"
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                />
                    <button onClick={generateImage}
                            className="bg-blue-600 text-white gap-2 font-poppins hover:bg-blue-700 flex items-center justify-center px-4 rounded h-[3rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fafafa" viewBox="0 0 256 256">
                            <path
                                d="M48,64a8,8,0,0,1,8-8H72V40a8,8,0,0,1,16,0V56h16a8,8,0,0,1,0,16H88V88a8,8,0,0,1-16,0V72H56A8,8,0,0,1,48,64ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16Zm56-48H224V128a8,8,0,0,0-16,0v16H192a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V160h16a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path>
                        </svg>
                        <p>
                            Generate
                        </p>
                    </button>
                </div>
                <div className='pt-8 flex'>
                    <p className='font-poppins text-primary-100'>No inspiration?</p>
                    <button type="button" onClick={handleSurpriseMe}
                            className="font-semibold text-xs bg-[#ECECF1] py-1 ml-5 px-2 rounded-[5px] text-black">
                        Suprise Me
                    </button>
                </div>

            </div>
        );
    }
;