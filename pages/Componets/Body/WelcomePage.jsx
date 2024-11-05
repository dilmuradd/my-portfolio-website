import Image from 'next/image'
import waving from '../../../image/waving.png'
import { TypeAnimation } from 'react-type-animation';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Link from 'next/link';
import { GoPerson } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import user from '../../../image/user_3307761_1712841557.jpg'
// import user from '../../../image/depositphotos_318367382-stock-photo-portrait-of-a-handsome-young.jpg'
import WelcomeBlog from './WelcomeBlog/WelcomeBlog';
import TopProjectDemo from './TopProjectDemo';
const WelcomePage = () => {
  return (
    <main>
      <section className='flex md:flex-row flex-col-reverse md:items-center md:h-[370px]  gap-3 p-[10px] justify-between'>
<div className='h-full  md:pl-0 sm:pl-3 md:w-[60%] '>
<div className='flex items-center title-box  gap-[10px]'>
    <Image className='w-[25px] shake'  src={waving} alt="wawh" />

    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Salom, xush kelibsiz',
        4000, // wait 1s before replacing "Mice" with "Hamsters"
        'Привет, добро пожаловать',
        4000,
        'Hello, welcome',
        4000,
        
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '22px', display: 'inline-block' }}
      repeat={Infinity}
      className='font-t '
    />

</div>
<div>
    <h1 className='text-[25px] ism-text mt-[15px] font-semibold'>
    Mening ismim <span className='text-blue-500'>Dilmurod Sharipov</span>  <span className='text-blue-600'><RiVerifiedBadgeFill className='inline-block font-bold ' /></span>
    </h1>
</div>

<div>
    <p className='mt-[15px] lorem-text text-[14px]'>
   <a className='text-blue-400 opac-css hover:text-blue-600 transition-all'  href="https://www.google.com/maps/place/%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.2683589,59.3224992,6z/data=!3m1!4b1!4m6!3m5!1s0x38ae8b20a5d676b1:0xca0a6dad7e841e20!8m2!3d41.377491!4d64.585262!16zL20vMDd0X3g?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D" target='_blank'>O'zbekistondan</a> bo'lgan frontend dasturchiman. <br />
    Foydalanuvchi tajribasini yaxshilashga qaratilgan zamonaviy va chiroyli veb-loyihalar yaratishga intilaman. 
    </p> <br />
<p className='text-[12px] lorem-text'>Har bir loyiha orqali o'z ko'nikmalarimni rivojlantirib, eng yuqori sifatli <span className='text-blue-300'>Websayt</span> taqdim etishga harakat qilaman.</p>

</div>



<div className='mt-[25px] button_icon flex flex-col sm:flex-row sm:items-center gap-2'>
    <Link href={'/about'} className='w-btn'>

    <button className='w-[250px] btn1 hover:opacity-[0.9] transition-all h-[40px] rounded-lg bg-blue-950'><GoPerson className='inline-block' /> Men haqimda ko'proq</button>
    </Link>
<div className='flex gap-5 sm:gap-0 items-center'>

    <div className='w-[40px] hover:bg-blue-950 transition-all rounded-lg flex items-center justify-center h-[40px]'>
        <a href="https://github.com/dilmuradd" target='_blank'>
    <FaGithub />
        </a>
    </div>

    <div className='w-[40px] hover:bg-pink-950 transition-all rounded-lg flex items-center justify-center h-[40px]'>
        <a href="https://instagram.com/dilmurad_dd" target='_blank'>
    <FaInstagram />
        </a>
    </div>


    <div className='w-[40px] hover:bg-blue-900 transition-all rounded-lg flex items-center justify-center h-[40px]'>
        <a href="https://t.me/PhantomProgrammer" target='_blank'>
    <FaTelegramPlane />
        </a>
</div>
    </div>

</div>


</div>

<div className='h-full rasm-box w-[40%] '>
  {/* user */}
<Image className='rounded-[50%] h-[auto] object-cover w-[190px] eff' src={user} alt="my-photo" />
</div>
      </section>

<section>
<div className='flex px-[10px] items-center mt-8 justify-between flex-wrap gap-4'>
  <h1 className='text-purple-600  font-bold text-[20px] sm:text-[24px] md:text-[26px]'>
    Blogdan yangiliklar
  </h1>
  <Link href={'/blog'}>
    <button className='px-4 py-1.5 text-sm sm:text-base hover:opacity-90 transition-all h-[35px] rounded-lg opacity-60 flex items-center justify-center gap-2'>
      <FaArrowRight className='inline-block' /> 
    </button>
  </Link>
</div>


<WelcomeBlog/>

    <div className='flex px-[10px] items-center mt-8 justify-between flex-wrap gap-4'>
  <h1 className='text-blue-600  font-bold text-[20px] sm:text-[24px] md:text-[26px]'>
  Tanlangan loyihalar
  </h1>
  <Link href={'/project'}>
    <button className='px-4 py-1.5 text-sm sm:text-base hover:opacity-90 transition-all h-[35px] rounded-lg opacity-60 flex items-center justify-center gap-2'>
      <FaArrowRight className='inline-block' /> 
    </button>
  </Link>
</div>


<TopProjectDemo/>
</section>
    </main>
  )
}

export default WelcomePage
