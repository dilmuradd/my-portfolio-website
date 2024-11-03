import { ProjectContext } from '@/Context/ProjectContextApi';
import Link from 'next/link';
import React, { useContext } from 'react'
const TopProjectDemo = () => {
let {getProjectData} = useContext(ProjectContext)
console.log(getProjectData);
  return (
    <div className='w-full  '>


    <div className='mt-[50px] p-[10px] grid  grid-cols-1 md:gap-[30px] '>



{
  getProjectData.slice(0,3).map(item=>(
<Link href={item.link} target='_blank' key={item.id} className=' flex items-center  father-top  p-[10px] justify-start gap-[20px] hover:bg-[#0c132c] transition-all rounded-lg'>

<div className='flex flex-shrink-0 items-center justify-center rounded-lg w-[60px] h-[60px] bg-[#111a3d]'>
  <img className='w-[40px] Timg h-[40px]' src={item.img} alt="fastfood" />
</div>
<div >
<h1 className='font-semibold text-[14px] sm:text-[16px]'>{item.title}</h1>
<p className='mt-[5px] text-[12px] sm:text-[14px]'>
 {item.text}
</p>
    </div>
</Link>
  ))
}









   
        </div>


        
          
    </div>
  )
}

export default TopProjectDemo
