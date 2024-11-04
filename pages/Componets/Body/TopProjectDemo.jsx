import { ProjectContext } from '@/Context/ProjectContextApi';
import Link from 'next/link';
import React, { useContext } from 'react';
import Skeleton from 'react-loading-skeleton'; // Assuming you're using `react-loading-skeleton` package
import 'react-loading-skeleton/dist/skeleton.css';

const TopProjectDemo = () => {
  const { getProjectData } = useContext(ProjectContext);

  const isLoading = !getProjectData || getProjectData.length === 0;

  return (
    <div className='w-full'>
      <div className='mt-[50px] p-[20px] gap-[20px] grid grid-cols-1 md:gap-[30px]'>
        {isLoading
          ? Array(3)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className='flex items-center  p-[10px] justify-start gap-[0px] bg-[#0c132c] rounded-lg animate-pulse'
                >
                  <div className='flex-shrink-0 flex items-center justify-center rounded-lg w-[60px] h-[60px] bg-[#111a3d]'>
                    <Skeleton circle width={40} height={40} />
                  </div>
                  <div>
                    <Skeleton width={150} height={20} />
                    <Skeleton width={100} height={15} style={{ marginTop: 5 }} />
                  </div>
                </div>
              ))
          : getProjectData.slice(0, 3).map((item) => (
              <Link
                href={item.link}
                target='_blank'
                key={item.id}
                className='flex items-center father-top p-[10px] justify-start gap-[20px] hover:bg-[#0c132c] transition-all rounded-lg'
              >
                <div className='flex flex-shrink-0 items-center justify-center rounded-lg w-[60px] h-[60px] bg-[#111a3d]'>
                  <img className='w-[40px] Timg h-[40px]' src={item.img} alt="fastfood" />
                </div>
                <div>
                  <h1 className='font-semibold text-[14px] sm:text-[16px]'>{item.title}</h1>
                  <p className='mt-[5px] text-[12px] sm:text-[14px]'>{item.text}</p>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default TopProjectDemo;
