import React, { useContext } from 'react'
import Header from '../Componets/Header/Header'
import { ProjectContext } from '@/Context/ProjectContextApi'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'
import Head from 'next/head'
const Project = () => {

    let {getProjectData} = useContext(ProjectContext)
  const isLoading = !getProjectData || getProjectData.length === 0;

  return (
    <section className='min-h-[90vh] pt-[130px] max-w-[800px] m-auto'>


<Head>
  {/* Title and Description for SEO */}
  <title>Dilmurod Sharipov - My Projects</title>
  <meta name="description" content="Dilmurod Sharipovning loyihalari. Men yaratgan web ilovalar va dizaynlar haqida ma'lumot." />
  
  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Dilmurod Sharipov - My Projects" />
  <meta property="og:description" content="Dilmurod Sharipovning loyihalari. Men yaratgan web ilovalar va dizaynlar haqida ma'lumot." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://shd-brown.vercel.app/projects" />
  <meta property="og:image" content="https://img.freepik.com/premium-photo/cup-coffee-sits-pink-table_954894-213888.jpg?semt=ais_hybrid" />
  
  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Dilmurod Sharipov - My Projects" />
  <meta name="twitter:description" content="Dilmurod Sharipovning loyihalari. Men yaratgan web ilovalar va dizaynlar haqida ma'lumot." />
  <meta name="twitter:image" content="https://img.freepik.com/premium-photo/cup-coffee-sits-pink-table_954894-213888.jpg?semt=ais_hybrid" />

  {/* Additional SEO Meta Tags */}
  <meta name="author" content="Dilmurod Sharipov" />
  <meta name="keywords" content="Dilmurod Sharipov, Loyihalar, Web Ilovalar, Frontend Developer, Web Dizayn, O'zbekiston, IT, Texnologiyalar, Portfolio" />
  
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://shd-brown.vercel.app/project" />
</Head>


        <Header/>
        <h1 className='font-semibold pl-[10px] text-[28px] text-purple-600'>
          Project
        </h1>


        <div className='mt-[10px] p-[20px] gap-[20px] grid grid-cols-1 md:gap-[30px]'>
        {isLoading
          ? getProjectData.map(index => (
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


    </section>
  )
}

export default Project
