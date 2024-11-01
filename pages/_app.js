import { BlogApiProvider } from "@/Context/BlogContextApi";
import "@/styles/globals.css";
import AnimatedCursor from "react-animated-cursor";

export default function App({ Component, pageProps }) {
  return (
  <BlogApiProvider>
<main className="bg-[#0c121e]">
  <AnimatedCursor
  />

  <Component {...pageProps} />
</main>
  </BlogApiProvider>
  ) 
}
