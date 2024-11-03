import { BlogApiContext } from '@/Context/BlogContextApi'
import Link from 'next/link';
import React, { useContext, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const WelcomeBlog = () => {
  let { BlogNews } = useContext(BlogApiContext) || { BlogNews: [] };
  console.log(BlogNews);

  return (
    <div>
      {(!BlogNews || BlogNews.length === 0) ? (
        <div className='px-[20px]'>
          <Skeleton className='mt-[40px]' height={'130px'} baseColor='#070b20'/>
          <Skeleton className='mt-[20px]' height={'130px'} baseColor='#070b20'/>
          <Skeleton className='mt-[20px] mb-[40px]' height={'130px'} baseColor='#070b20'/>
        </div>
      ) : (
        <div  className='grid grid-cols-1 p-[10px] gap-[10px] mt-[25px]'>
          {BlogNews.slice(0, 3).map(item => (
            <Link href={`DynamicPage/${item.id}`} key={item.id} className='h-[140px] pl-[10px] rounded-3xl p-2 father__box transition-all flex items-center gap-4'>
              <div className='w-[160px] h-[100px]'>
                <img className='object-cover w-[160px] h-full max-h-[100px] max-w-[160px] rounded-lg' src={item.img} alt="title-img" />
              </div>
              <div className='flex justify-center flex-col gap-1'>
                <h1 className='font-bold image__1 transition-all text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]'>
                  {item.title}
                </h1>
                <p className='text-[12px] sm:text-[14px] md:text-[16px] overflow-hidden'>
                  {item.textTitle}
                </p>
                <span className='text-[12px] font-mono'>
                  {item.time}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default WelcomeBlog;
