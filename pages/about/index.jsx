import React from 'react'
import Header from '../Componets/Header/Header'
import hello from '../../image/waving.png'
import Image from 'next/image'
import wp from '../../image/wp.gif'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Skills from './Skills'
const index = () => {
  return (
    <section className='min-h-[100vh] m-auto max-w-[800px] pt-[130px]'>
        <Header/>
      <div>
        <h1 className='font-semibold pl-[10px] text-[28px] text-purple-600'>
          Men Haqimda
        </h1>
        <div className='mt-[20px] px-[10px] items-center justify-start gap-[10px] flex'>
        <p className='sm:text-[16px] text-[14px]' >
        <Image className='w-[18px] inline-block mr-[10px] '  src={hello} alt="wawing" />
        Salom! Men Dilmurod Sharipov,    <a className='text-blue-400 opac-css hover:text-blue-600 transition-all'  href="https://www.google.com/maps/place/%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.2683589,59.3224992,6z/data=!3m1!4b1!4m6!3m5!1s0x38ae8b20a5d676b1:0xca0a6dad7e841e20!8m2!3d41.377491!4d64.585262!16zL20vMDd0X3g?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D" target='_blank'>O'zbekistondan</a> bo'lgan  frontend dasturchiman. <br />
        bo‘lgan frontend dasturchiman. Foydalanuvchi tajribasini yaxshilashga qaratilgan zamonaviy va chiroyli veb-loyihalar yaratishga intilaman.
        </p>
        </div>
        <br />
        <p className='px-[10px] sm:text-[16px] text-[14px]'>
        Men har bir detalga e'tibor beraman va ko‘rkam, qulay hamda texnik xizmat ko‘rsatish oson bo‘lgan dasturlar ishlab chiqishga qiziqaman. Har bir loyiha orqali o‘z ko‘nikmalarimni rivojlantirib, eng yuqori sifatli veb-saytlarni taqdim etishga intilaman.
        </p>

<div className='flex items-center px-[10px] mt-[20px] sm:mt-[40px] justify-center'>
  <Image className='w-full rounded-xl h-[200px] sm:h-[300px] object-cover' src={wp} alt='bg'/>
</div>
<p className='text-center text-[12px] mt-[6px] font-mono'>Pixel-Perfect, Gif</p>


<div className='pl-[10px]'>
  <p className='sm:text-[16px] text-[14px] mt-[30px]'>
  Ochiq manba loyihalarida faol qatnashishni yoqtiraman.  <a className='text-blue-400 opac-css hover:text-blue-600 transition-all'  href="https://github.com/dilmuradd" target='_blank'>GitHub</a> sahifamda turli veb-saytlar va ilovalarim mavjud.
  </p>
  <br />
  <p className='sm:text-[16px] text-[14px]'>
  Meni har doim yangi muammolarni hal qilish va o‘z ko‘nikmalarimni kengaytirishga intilish qiziqtiradi. Men insonlarni qadrlaydigan va ishonch, samimiylik va inklyuzivlikni targ‘ib qiladigan global masofaviy jamoalarda ishlashni yaxshi ko‘raman.
  </p>
<br />
  <p className='sm:text-[16px] text-[14px]'>
  Har kuni ishlatadigan dasturiy va texnik vositalarim bilan qiziqsangiz, <Link href={'/'} className='text-blue-400 opac-css hover:text-blue-600 transition-all'  >Uses</Link> sahifasiga tashrif buyurishingiz mumkin.
  </p>
  <br />
  <h1 className='font-semibold  text-[28px] text-blue-600'>
  Bog'lanish
        </h1>
        <p className='sm:text-[16px] text-[14px]'>
        Menga murojaat qilish uchun <a className='text-purple-600' href="https://gmail.com/dilmurodmt23@gmail.com">dilmurodmt23@gmail.com</a> orqali bog'lanishingiz mumkin.
        </p>
        <div className='flex items-center mt-[10px]  gap-[15px]'>
<a href='https://github.com/dilmuradd' target='_blank' className='flex-shrink-0 flex items-center justify-center w-[40px] rounded-lg hover:bg-blue-950 transition-all h-[40px]'>
<FaGithub />
</a>

<a href='https://instagram.com/dilmurad_dd' target='_blank' className='flex-shrink-0 flex items-center justify-center w-[40px] rounded-lg hover:bg-pink-950 transition-all h-[40px]'>
<FaInstagram />
</a>


<a href='https://t.me/PhantomProgrammer' target='_blank' className='flex-shrink-0 flex items-center justify-center w-[40px] rounded-lg hover:bg-blue-900 transition-all h-[40px]'>
<FaTelegramPlane />
</a>

<a href='https://gmail.com/dilmurodmt23@gmail.com' target='_blank' className='flex-shrink-0 flex items-center justify-center w-[40px] rounded-lg hover:bg-gray-800 transition-all h-[40px]'>
<MdOutlineMail />
</a>


        </div>
<div>
<h1 className='font-semibold mt-[40px] text-[28px] text-purple-600'>
Ko‘nikmalar
        </h1>

</div>
</div>
<Skills/>

      </div>
    </section>
  )
}

export default index