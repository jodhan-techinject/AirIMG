import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {getRandomPrompt} from "../utils/utils.js";
import Loader from "../components/loader.jsx";
import {GenerateInput} from "../components/GenerateInput.jsx";
import {NameField} from "../components/NameField.jsx";
import {toast} from "react-toastify";

const CreatePost = () => {
    const nagivate = useNavigate();
    const [form, setform] = useState({
        name: "",
        prompt: "",
        photo: "",
    });

    const [generatingImg, setgeneratingImg] = useState(false);
    const [loading, setloading] = useState(false);


    const handleChange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSurpriseMe = () => {
        const randomPrompt = getRandomPrompt(form.prompt)
        setform(
            {
                ...form,
                prompt: randomPrompt
            }
        )
    }

    const generateImage = async () => {
        if (form.prompt) {
            try {
                setgeneratingImg(true);
                // const response = await fetch('https://airimg.onrender.com/api/v1/stable-diffusion', {
                const response = await fetch('http://localhost:8080/api/v1/stable-diffusion', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        prompt: form.prompt,
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    setform({...form, photo: data.imageUrl});
                } else {
                    toast(response.statusText)
                }
            } catch (err) {
                toast(err);
            } finally {
                setgeneratingImg(false);
            }
        } else {
            toast('Please provide proper prompt');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.prompt && form.photo) {
            setloading(true);
            try {
                const response = await fetch('https://airimg.onrender.com/api/v1/post', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(form)
                });

                await response.json();
                toast('Successfully Posted');
                nagivate('/');

            } catch (err) {
                alert("ERROR")
            } finally {
                setloading(false);
            }
        } else {
            toast("Please provide a prompt and generate an image")
        }
    }

    return <section className="max-w-7xl mx-auto py-[5%] p-5">
        <div>
            <h1 className="font-extrabold tracking-wide font-bebas text-primary-100 text-4xl md:text-6xl">
                AI Image Generator
            </h1>
            <p className="mt-2 text-gray-400 text-lg font-poppins">
                Create the most epic images using Dall-e AI and post in the community
            </p>
        </div>
        <div className="mt-16">
            <div className="flex flex-col md:flex-row justify-between gap-8">
                <div className='md:w-[50%]'>

                    <NameField
                        type="text"
                        name="name"
                        placeholder="Jodhan"
                        value={form.name}
                        handleChange={handleChange}
                    />
                    <GenerateInput
                        LabelName="Promt"
                        type="text"
                        name="prompt"
                        placeholder="a fortune-telling shiba inu reading your fate in a giant hamburger, digital art"
                        value={form.prompt}
                        handleChange={handleChange}
                        handleSurpriseMe={handleSurpriseMe}
                        generateImage={generateImage}
                    />
                </div>
                <div
                    className="md:w-[50%] h-[25rem] md:ml-10 mb-10 bg-primary-300 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3 flex justify-center items-center">
                    {form.photo ? (
                        <img
                            src={form.photo}
                            alt={form.prompt}
                            className="w-full h-full object-contain"
                        />
                    ) : (
                        generatingImg ? (
                            <div
                                className="inset-0 z-0 flex justify-center items-center rounded-lg"
                            >
                                <Loader/>
                            </div>
                        ) : (
                            <img
                                src="/images/preview.png"
                                alt="preview"
                                className="w-9/12 h-9/12 object-contain opacity-60"
                            />
                        )
                    )}

                </div>
            </div>
            <div
                className="mt-10">
                <p
                    className="mt-2 text-[#666e75] text-[14px]"
                >Once you have created a image you can share it in the community</p>
                <button
                    onClick={handleSubmit}
                    className="mt-5 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                    {loading ? "Sharing..." : "Share with the Community"}
                </button>
            </div>
        </div>

    </section>;
};

export default CreatePost;

