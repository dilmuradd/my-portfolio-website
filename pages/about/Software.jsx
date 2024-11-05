import React from 'react'
import { VscVscode } from "react-icons/vsc";
import { FaGithubAlt } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { FaUbuntu } from "react-icons/fa";


const Software = () => {
  return (
   <div className=" mt-[20px] relative  grid grid-cols-2 mb-[40px] p-[10px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
      <div className='border flex-shrink-0 flex items-center justify-center gap-[8px] hover:bg-blue-950 hover:border-blue-900 transition-all rounded-lg p-[10px]'>
      <VscVscode /> VsCode
      </div>

      <div className='border flex-shrink-0 flex items-center justify-center gap-[8px] hover:bg-gray-950 hover:border-gay-900 transition-all rounded-lg p-[10px]'>
      <FaGithubAlt /> Github
      </div>

      <div className='border flex-shrink-0 flex items-center justify-center gap-[8px] hover:bg-orange-950 hover:border-orange-900 transition-all rounded-lg p-[10px]'>
      <FaGitAlt /> Git
      </div>

      <div className='border flex-shrink-0 flex items-center justify-center gap-[8px] hover:bg-red-950 hover:border-red-900 transition-all rounded-lg p-[10px]'>
      <FaChrome /> Chrome Dev
      </div>

      <div className='border flex-shrink-0 flex items-center justify-center gap-[8px] hover:bg-purple-800 hover:border-purple-900 transition-all rounded-lg p-[10px]'>
      <FaNpm /> Npm
      </div>

      <div className='border flex-shrink-0 flex items-center justify-center gap-[8px] hover:bg-orange-900 hover:border-ornage-950 transition-all rounded-lg p-[10px]'>
      <FaUbuntu /> Ubuntu-WSL
      </div>

      


    </div>
  )
}

export default Software
