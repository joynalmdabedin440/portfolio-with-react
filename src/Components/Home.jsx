import React from 'react'
import myImg from "../assets/myimg.jpg"
import { FaAngleRight } from "react-icons/fa6";
function Home() {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h1 className='text-4xl sm:text-7xl font-bold text-white'>I'm a MERN Stack Developer</h1>
                    <p className='text-gray-500 py-4 max-w-md'>
                    I have 1.5 years of experience building and designing web application. My expertise lies in creating interactive web applications using React.js, Next JS along with strong proficiency in front-end tools like Tailwind CSS and Bootstrap.

                    </p>
                    <div>
                        <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-blue-500 to-green-500 cursor-pointer group'>
                            Portfolio
                           <span className='group-hover:rotate-90 duration-300 '><FaAngleRight size={25} className='ml-1'/></span> 
                        </button>
                    </div>
                </div>
                <div>
                    <img src={myImg} alt="My profile Img" className='rounded-2xl mx-auto md:w-fill' />
                </div>
            </div>
        </div>

    )
}

export default Home