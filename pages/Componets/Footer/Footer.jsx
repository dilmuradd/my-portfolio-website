import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#0c121e] border-t mt-[20px]  border-gray-700 max-w-[800px] m-auto text-white">
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-center">Portfolio</h2>
            <p className="text-gray-400 mt-2">Barcha huquqlar himoyalangan &copy; {new Date().getFullYear()}</p>
          </div>
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-300 hover:text-blue-400 transition duration-300">Home</Link>
            <Link href="/about" className="text-gray-300 hover:text-blue-400 transition duration-300">About</Link>
            <Link href="/blog" className="text-gray-300 hover:text-blue-400 transition duration-300">Blog</Link>
            <Link href="/project" className="text-gray-300 hover:text-blue-400 transition duration-300">Project</Link>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-400">Follow me on social media</p>
          <div className="flex justify-center space-x-6 mt-2">
            <a href="https://github.com/dilmuradd" target='_blank' className="text-gray-300 hover:text-blue-400 transition duration-300">GitHub</a>
            <a href="https://instagram.com/dilmurad_dd" target='_blank' className="text-gray-300 hover:text-blue-400 transition duration-300">Instagram</a>
            <a href="https://t.me/PhantomProgrammer" target='_blank' className="text-gray-300 hover:text-blue-400 transition duration-300">Telegram</a>
          </div>
        </div>
      </div>
      <div className="border-t pb-[10px] border-gray-700 mt-1 pt-4 text-center">
        <p className="text-sm text-gray-500">Designed with ❤️ by Dilmurad</p>
      </div>
    </footer>
  )
}

export default Footer