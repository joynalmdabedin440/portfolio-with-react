import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'
import { ImMail } from "react-icons/im";

const Footer = () => {
  return (
      <div className='bg-gradient-to-b from-gray-800 to-black flex justify-center items-center text-white py-10'>
          <a target='_blank' rel="noreferrer" href="https://www.facebook.com/profile.php?id=100048771589120&sk=about"><FaFacebook /></a>
          <a href="instragram.com"><FaInstagram  className='mx-5'/></a>
          <a href="mailto:joynalmdabedin@gmail.com"><ImMail/></a>
          
          
          
    </div>
  )
}

export default Footer