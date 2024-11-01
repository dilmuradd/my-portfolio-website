"use client";
import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export let BlogApiContext = createContext(null);

export let BlogApiProvider = ({ children }) => {
  const [BlogNews, setBlogNews] = useState([]);
let BlogData = async ()=>{
    try {
        let getData = await axios.get('https://e60fae2c53253c1d.mokky.dev/blog')
        setBlogNews(getData.data)
    } catch (error) {
        console.log(error);
    }
}
  useEffect(() => {
    BlogData()
  }, []);
console.log(BlogNews);
  return (
    <BlogApiContext.Provider value={{ BlogNews, setBlogNews }}>
      {children}
    </BlogApiContext.Provider>
  );
};
