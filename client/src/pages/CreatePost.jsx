import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { Formfield, Loader } from "../components";

const CreatePost = () => {
  const nagivate = useNavigate();
  const [form, setform] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatingImg, setgeneratingImg] = useState(false);
  const [loading, setloading] = useState(false);


  const handleChange =(e) =>{
    setform({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSupriseMe = () => {
    const randomprompt = getRandomPrompt(form.prompt)
    setform(
      {
        ...form,
        prompt:randomprompt
      }
    )
  }

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setgeneratingImg(true);
        const response = await fetch('https://air-img-server-3agoy4vzo-jodhansajifabs-projects.vercel.app/api/v1/stable-diffusion', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: form.prompt,
          }),
        });

        const data = await response.json();
        setform({ ...form, photo: data.imageUrl });
      } catch (err) {
        alert(err);
      } finally {
        setgeneratingImg(false);
      }
    } else {
      alert('Please provide proper prompt');
    }
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();

    if(form.prompt && form.photo){
      setloading(true);
      try {
        const response = await fetch('https://air-img-server-3agoy4vzo-jodhansajifabs-projects.vercel.app/api/v1/post',{
          method : 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form)
        });

        await response.json();
        alert('Success');
        nagivate('/');

      } catch (err) {
        alert ("ERROR")
      }finally{
        setloading(false);
      }
    }else{
      alert("Please provide a prompt and generate an image")
    }
}

  return <section className="max-w-7xl max-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          Create
        </h1>
        <p className="mt-2 tetx-[#666e75] text-[14px]">
          Create the most epic images using Dall-e AI and post in the community
        </p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-5">
        <Formfield
          LabelName ="Yourname"
          type="text"
          name="name"
          placeholder="Jodhan"
          value={form.name}
          handleChange={handleChange}
        />
        <Formfield
          LabelName ="Promt"
          type="text"
          name="prompt"
          placeholder="a fortune-telling shiba inu reading your fate in a giant hamburger, digital art"
          value={form.prompt}
          handleChange={handleChange}
          isSupriseMe
          handleSupriseMe ={handleSupriseMe}
        />
        <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
          {form.photo? (
            <img 
              src={form.photo}
              alt={form.prompt}
              className="w-full h-full object-contain"/>
          ):(
            <img 
              src={preview}
              alt="preview"
              className="w-9/12 h-9/12 object-contain opacity-60"/>
          )}
          {generatingImg && (
            <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba-0,0,0,0.5] rounded-lg">
              (<Loader/>)
            </div>
          )}
        </div>
      </div>
      <div className="mt-5 flex gap-5">
        <button
          type="button"
          onClick={generateImage}
          className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"

        >
          {generatingImg ? "Generating..." : "Generate"}
        </button>
      </div>
      <div
      className="mt-10">
        <p
        className="mt-2 text-[#666e75] text-[14px]"
        >Once you have created a image you can share it in the community</p>
        <button
        type="submit"
        className="mt-5 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center">
          {loading? "Sharing..." : "Share with the Community"}
        </button>
      </div>
      </form>
      
  </section>;
};

export default CreatePost;

