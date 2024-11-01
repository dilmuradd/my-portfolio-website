import Link from 'next/link'
import React from 'react'
import { HiBars2 } from "react-icons/hi2";
// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
  return (
    <header className='w-full z-[99] fixed top-0 left-1/2 transform -translate-x-1/2' >
    <div className=' px-[10px] lg:p-0 flex items-center justify-center'>
<div className='w-[800px] backdrop-blur-xl  css-shadow mt-[20px] flex items-center justify-between  p-[10px] rounded-2xl  h-[50px] lg:h-[60px] border'>
<h1 className='font-bold hover:text-blue-600 transition-all  text-[32px]'>DD<span className='text-blue-600 hover:text-white'>.</span></h1>

<div className='flex items-center gap-2'>
  <div className='p-[10px] sm:block hidden hover:bg-gray-800 rounded-lg transition-all hover:text-green-600 hover:backdrop-blur-xl ' >
<Link className='' href={'#'}>About</Link>
  </div>

  <div className='p-[10px] sm:block hidden hover:bg-gray-800 rounded-lg  transition-all hover:text-orange-600 hover:backdrop-blur-xl ' >
<Link className='' href={'#'}>Blog</Link>
  </div>

  <div className='p-[10px] sm:block hidden hover:bg-gray-800 rounded-lg  transition-all hover:text-blue-600 hover:backdrop-blur-xl ' >
<Link className='' href={'#'}>Project</Link>
  </div>


  <div className='p-[10px] sm:block hidden hover:bg-gray-800 rounded-lg  transition-all hover:text-purple-600 hover:backdrop-blur-xl ' >
<Link className='' href={'#'}>Uses</Link>
  </div>

<div onClick={toggleDrawer} className='inline-block text-[32px]  hover:bg-gray-800 rounded-lg transition-all p-[3px] sm:hidden' >
<HiBars2  />
</div>

</div>
</div>
    </div>
    <Drawer
    key={4}
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='drw-shadow'
                style={{ backgroundColor: '#0c121e' }}
            >
                <div>Hello World</div>
            </Drawer>
    </header>
  )
}

export default Header