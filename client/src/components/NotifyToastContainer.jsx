import {ToastContainer} from "react-toastify";
import React from "react";
import "react-toastify/dist/ReactToastify.css";

export const NotifyToastContainer = () => {
    return (
        <>
            <ToastContainer theme='dark' position='bottom-right' bodyClassName='h-[2rem] font-poppins  pt-2' limit={3}/>
        </>
    )
}