import React from "react";

const Contact = () => {
    return (
        <div
            name="contact"
            className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
        >
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Contact
                    </p>
                    <p className="py-6">Please give me your contact information below..</p>
                </div>

                <div className=" flex justify-center items-center">
                    <form
                        action="https://getform.io/f/1b3b171e-9a26-425e-8d22-aeb004a5dbb4"
                        method="POST"
                        className=" flex flex-col w-full md:w-1/2"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            rows="10"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        ></textarea>

                        <button className="                        <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-blue-500 to-green-500 cursor-pointer group hover:scale-110 duration-300'>
">
                            Let's talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;