import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Header from '../Componets/Header/Header';
import { FaArrowLeftLong } from "react-icons/fa6";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Link from 'next/link';
const DynamicPageBlog = () => {
  const { query } = useRouter();
  const id = query.DynamicPageBlog;

  const [isObjectData, setisObjectData] = useState(null);
  const [loading, setLoading] = useState(true); 

  const getData = async () => {
    if (!id) return; 

    try {
      setLoading(true); 
      const response = await axios.get(`https://e60fae2c53253c1d.mokky.dev/blog/${id}`);
      setisObjectData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  if (loading) return <div className='text-center min-h-[100vh] py-10'>
    <div className='m-auto max-w-[800px] px-[10px]'>

    <Skeleton className='h-[60px] rounded-xl ' baseColor='#070b20' />
    <Skeleton className='h-[300px] rounded-xl mt-[30px] ' baseColor='#070b20' />
    <Skeleton count={14} className=' rounded-xl mt-[10px] ' baseColor='#070b20' />

    </div>
  </div>;
let router = useRouter()
  if (!isObjectData) {
    router.push('/')
  }

  return (
    <div>
      <Header />
      <div className='min-h-[100vh] pt-[120px] max-w-[800px] mx-auto px-4'>
        <Link href={'/blog'}>
        <h1 className='text-purple-600 hover:opacity-75 transition-all mb-4'>
          <FaArrowLeftLong className='inline-block text-purple-600 font-bold' /> Blog Sahifaga qaytish
        </h1>
        </Link>
        <div className='bg-[#070b20] rounded-lg shadow-md p-6'>
          <h1 className='font-bold text-[32px] md:text-[34px] mb-2'>{isObjectData.title}</h1>
          <p className='font-mono text-gray-500 mb-4'>{isObjectData.time}</p>
          <div className='mt-[20px]' dangerouslySetInnerHTML={{ __html: isObjectData.text }} />
        </div>
      </div>
    </div>
  );
};

export default DynamicPageBlog;
