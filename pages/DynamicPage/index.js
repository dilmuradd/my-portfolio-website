import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const index = () => {
    let router = useRouter()

    useEffect(()=>{
    router.push('/')

    },[])
  return (
    <div className='min-h-[100vh]'>

    </div>


)
}

export default index
