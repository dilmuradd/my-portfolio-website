import Link from "next/link";
import Header from "./Componets/Header/Header";
import Head from "next/head";

let Page404 = () => {
  return (
    <main className="min-h-[70vh] w-full flex flex-col justify-center items-center max-w-[800px] m-auto">
      <Head>
        <title>404 Xatolik</title>
      </Head>
      <Header/>
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div className="bg-[#1e2a98] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
        <Link href="/" className="relative inline-block text-sm font-medium text-[#3d84ff] group active:text-blue-500 focus:outline-none focus:ring">
          {/* <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#4d3dff] group-hover:translate-y-0 group-hover:translate-x-0"></span> */}
          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            Go Home
          </span>
        </Link>
      </button>
    </main>
  )
}

export default Page404;
