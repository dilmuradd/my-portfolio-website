import Image from 'next/image';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

const Skills = () => {
 

  return (
    <div className=" mt-[20px] relative  grid grid-cols-2 mb-[90px] p-[10px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
      <div className='border flex-shrink-0 flex items-center justify-center gap-[8px] hover:bg-orange-950 hover:border-orange-900 transition-all rounded-lg p-[10px]'>
      <FaHtml5 /> HTML5
      </div>

      <div className='border flex-shrink-0 flex items-center justify-center gap-[8px] hover:bg-blue-950 hover:border-blue-900 transition-all rounded-lg p-[10px]'>
      <FaCss3Alt /> CSS3
      </div>

      <div className='border flex-shrink-0 flex items-center justify-center gap-[8px] hover:bg-pink-950 hover:border-pink-900 transition-all rounded-lg p-[10px]'>
      <FaSass /> SASS
      </div>

      <div className='border flex-shrink-0 flex items-center justify-center gap-[8px] hover:bg-yellow-950 hover:border-yellow-900 transition-all rounded-lg p-[10px]'>
      <FaJsSquare /> JavaScript
      </div>

      <div className='border flex-shrink-0 flex items-center justify-center gap-[8px] hover:bg-blue-800 hover:border-blue-900 transition-all rounded-lg p-[10px]'>
      <RiTailwindCssFill /> Tailwind CSS
      </div>

      <div className='border flex-shrink-0 flex items-center justify-center gap-[8px] hover:bg-blue-900 hover:border-blue-950 transition-all rounded-lg p-[10px]'>
      <FaReact /> React
      </div>

      <div className='border flex-shrink-0 flex items-center justify-center gap-[8px] hover:bg-teal-900 hover:border-teal-900 transition-all rounded-lg p-[10px]'>
      <SiChakraui /> Chakra UI
      </div>

      <div className='border flex-shrink-0 flex items-center justify-center gap-[8px] hover:bg-gray-950 hover:border-gray-900 transition-all rounded-lg p-[10px]'>
      <RiNextjsLine /> Next js
      </div>


    </div>
  );
};

export default Skills;
