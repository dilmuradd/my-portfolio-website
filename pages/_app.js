import { BlogApiProvider } from "@/Context/BlogContextApi";
import { ProjectProvider } from "@/Context/ProjectContextApi";
import "@/styles/globals.css";
import AnimatedCursor from "react-animated-cursor";
import Footer from "./Componets/Footer/Footer";
import Head from "next/head";
export default function App({ Component, pageProps }) {


  return (
  <BlogApiProvider>
<main className="bg-[#0c121e]">
  <AnimatedCursor
  />
<ProjectProvider>

  <Component {...pageProps} />
  <Footer/>
</ProjectProvider>
</main>
  </BlogApiProvider>
  ) 
}
