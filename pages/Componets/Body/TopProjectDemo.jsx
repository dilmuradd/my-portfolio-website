import { Glow, GlowCapture } from '@codaworks/react-glow'
import React from 'react'

const TopProjectDemo = () => {
  return (
    <div className='w-full flex items-center justify-center'>

      <GlowCapture>
<Glow >
    <div className='mt-[50px] grid px-[10px] grid-cols-1 md:gap-20 md:grid-cols-2'>

<div className="md:max-w-xs w-full    glow:bg-purple-950 relative shadow-sm h-[400px] shadow-blue-800  bg-[#161b25] border border-gray-700   transition duration-300 text-white rounded-xl overflow-hidden m-4">
  {/* Project Image */}
  <img 
    className="w-full h-36 object-cover" 
    src="https://jahir.dev/_next/image?url=%2Fmedia%2Fblog%2Fhow-tailwind-grew-on-me%2Fhero.jpg&w=96&q=75" 
    alt="Portfolio Sayti"
    />

  <div className="p-5">
    {/* Project Title */}
    <h2 className="text-2xl   font-semibold mb-2 text-[#ebedf2]">Portfolio Sayti</h2>

    {/* Project Description */}
    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
      ctetur adipisicing elit. Eum, ullam!
    </p>

    {/* Technologies Used */}
    <div className="grid relative top-[10px] grid-cols-2 gap-2 mb-4">
      <span className="bg-gray-800 text-xs py-1 px-2 rounded-lg text-center text-[#96a1c2]">React</span>
      <span className="bg-gray-800 text-xs py-1 px-2 rounded-lg text-center text-[#96a1c2]">Tailwind CSS</span>
      <span className="bg-gray-800 text-xs py-1 px-2 rounded-lg text-center text-[#96a1c2]">JavaScript</span>
      <span className="bg-gray-800 text-xs py-1 px-2 rounded-lg text-center text-[#96a1c2]">HTML</span>
    </div>

    {/* Links */}
    <div className="flex  justify-between items-center">
      <a
        href="https://github.com/username/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 absolute left-[20px] bottom-[15px] hover:text-blue-500 transition duration-150 text-sm font-medium"
        >
        GitHub
      </a>
      <a
        href="https://portfolio-example.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 absolute right-[20px] bottom-[15px] hover:text-blue-500 transition duration-150 text-sm font-medium"
        >
        Web-sayt
      </a>
    </div>
  </div>
</div>



<div className="md:max-w-xs w-full relative shadow-sm    glow:bg-blue-950 h-[400px] shadow-blue-800  bg-[#161b25] border border-gray-700   transition duration-300 text-white rounded-xl overflow-hidden m-4">
  {/* Project Image */}
  <img 
    className="w-full h-36 object-cover" 
    src="https://jahir.dev/_next/image?url=%2Fmedia%2Fblog%2Fhow-tailwind-grew-on-me%2Fhero.jpg&w=96&q=75" 
    alt="Portfolio Sayti"
    />

  <div className="p-5">
    {/* Project Title */}
    <h2 className="text-2xl font-semibold mb-2 text-[#ebedf2]">Portfolio Sayti</h2>

    {/* Project Description */}
    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
       sit amet consectetur adipisicing elit. Eum, ullam!
    </p>

    {/* Technologies Used */}
    <div className="grid grid-cols-2 gap-2 mb-4">
      <span className="bg-gray-800 text-xs py-1 px-2 rounded-lg text-center text-[#96a1c2]">React</span>
      <span className="bg-gray-800 text-xs py-1 px-2 rounded-lg text-center text-[#96a1c2]">Tailwind CSS</span>
      <span className="bg-gray-800 text-xs py-1 px-2 rounded-lg text-center text-[#96a1c2]">JavaScript</span>
      <span className="bg-gray-800 text-xs py-1 px-2 rounded-lg text-center text-[#96a1c2]">HTML</span>
    </div>

    {/* Links */}
    <div >

    <div className="flex  justify-between items-center">
      <a
        href="https://github.com/username/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 absolute left-[10px] bottom-[15px] hover:text-blue-500 transition duration-150 text-sm font-medium"
        >
        GitHub
      </a>
      <a
        href="https://portfolio-example.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 absolute right-[10px] bottom-[15px] hover:text-blue-500 transition duration-150 text-sm font-medium"
        >
        Web-sayt
      </a>
    </div>
          </div>
  </div>
</div>


        </div>


        
          </Glow>
          </GlowCapture>
    </div>
  )
}

export default TopProjectDemo
