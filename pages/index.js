import React from 'react';
import Body from './Componets/Body/Body';
import Header from './Componets/Header/Header';
import Footer from './Componets/Footer/Footer';
import Head from 'next/head';

const Index = () => {
  return (
    <main>
      <Head>
        {/* Title and Description for SEO */}
        <title>DSH - Portfolio va Blog</title>
        <meta name="description" content="Dilmurod Sharipovning shaxsiy portfolio va blog sayti. Men o'zim bilgan narsalar va yangi yangiliklar haqida yozib boraman." />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Dilmurod Sharipov - Portfolio va Blog" />
        <meta property="og:description" content="Dilmurod Sharipovning shaxsiy portfolio va blog sayti. Men o'zim bilgan narsalar va yangi yangiliklar haqida yozib boraman." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shd-brown.vercel.app/" />
        <meta property="og:image" content="https://img.freepik.com/premium-photo/cup-coffee-sits-pink-table_954894-213888.jpg?semt=ais_hybrid" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dilmurod Sharipov - Portfolio va Blog" />
        <meta name="twitter:description" content="Dilmurod Sharipovning shaxsiy portfolio va blog sayti. Men o'zim bilgan narsalar va yangi yangiliklar haqida yozib boraman." />
        <meta name="twitter:image" content="https://img.freepik.com/premium-photo/cup-coffee-sits-pink-table_954894-213888.jpg?semt=ais_hybrid" />

        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Dilmurod Sharipov" />
        <meta name="keywords" content="Dilmurod Sharipov, Portfolio, Blog, Frontend Developer, Web Developer, O'zbekcha blog, JavaScript Developer, HTML, CSS, React, Tailwind CSS, SEO, Web dizayn, dasturlash, freelance, IT, texnologiya, blog postlar, loyihalar, frontend dasturchi, JavaScript mutaxassisi, web yaratish, sahifa ishlab chiqish, veb-sayt dizayni, kreativ ishlanmalar, internet sahifa, blog yaratish, ijtimoiy tarmoq, personal blog, O'zbekiston, web ilova, dasturchi portfoliosi, coding, software engineer, React developer, dasturlash loyihalari, Xorazm, Urganch, O'zbek dasturchi, texnik bilimlar, internet marketing, yangi texnologiyalar, web arxitektura, sahifa tezligi, mobil optimizatsiya, dasturchi sayti, kontent yaratish, blog yuritish, web kodlash, portfolio sahifasi, yangi bilimlar, web interfeys, o'zlashtirish, blog sahifalari, sahifa dizayn, mijoz uchun sahifa, professional web sahifa, individual portfel, mustaqil ishlash, o'zbekcha dasturlash, digital yaratish, SEO optimizatsiya, portfolio loyihalari, karyera, veb dizayn, web texnologiya, responsive dizayn, backend integratsiya, dasturiy yechimlar, foydalanuvchi interfeysi, tijorat veb-saytlar, grafik dizayn, dasturiy vositalar, ishonchli platforma, ilova yaratish, yangi foydali bloglar, interaktiv sahifalar, sayt dizayni, qidiruv tizimlari, loyiha boshqaruvi, mijoz ehtiyojlari, tahlil, web analitika, texnik yangiliklar, o'zbekiston texnologiyalari" />

        {/* Favicon */}
        <link className='rounded-full' rel="icon" href="https://i.ibb.co/CJyvhQR/f41a9ba0-3b89-4cc0-a239-c00ea5c742bc.png" sizes="any" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://shd-brown.vercel.app/" />
      </Head>
      
      <section className='max-w-[800px] m-auto'>
        <Header />
        <Body />
      </section>
    </main>
  );
};

export default Index;
