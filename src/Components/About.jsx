import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h1 className='text-4xl font-bold inline border-b-4 border-gray-500'>About</h1>
                </div>
                <p className='text-xl mt-20'>"I am a dedicated MERN stack developer with 1.5 years of hands-on experience in crafting dynamic and responsive web applications. My proficiency lies in leveraging the power of React.js to build engaging user interfaces that seamlessly interact with the back-end powered by Node.js and Express.js. With a keen eye for design and a knack for creating visually appealing layouts, I often utilize tools like Tailwind CSS and Bootstrap to enhance the user experience.

                    Throughout my journey, I have been involved in the end-to-end development process, from conceptualizing and architecting features to implementing them and ensuring robust functionality. My expertise extends to front-end and back-end technologies, allowing me to create cohesive and efficient applications. I am not only adept at writing clean and maintainable code but also have experience in optimizing performance for smoother user interactions.</p>
                <br />
                <p className='text-xl'>My passion for learning and staying up-to-date with the latest industry trends drives me to continuously enhance my skill set. I thrive in collaborative environments, where I can contribute my ideas and work seamlessly with cross-functional teams to deliver high-quality products. With a foundation in JavaScript, React.js, and proficiency in tools like Tailwind and Bootstrap, I am committed to creating innovative and user-centered web experiences that leave a positive impact."</p>

            </div>


        </div>
    )
}

export default About