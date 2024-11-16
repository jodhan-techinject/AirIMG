import React from "react";

export const NameField = ({
                       name,
                       placeholder,
                       value,
                       handleChange,
                   }) => {

    return (
        <div className='flex flex-col'>
            <label form={name} className='font-poppins text-primary-100 pb-2'>
                Enter Your Name :
            </label>
            <input
                className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 p-3 border rounded"
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />

        </div>
    );
};
