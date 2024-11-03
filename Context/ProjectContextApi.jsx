import axios from "axios"
import { createContext, useEffect, useState } from "react"

export let ProjectContext = createContext()

export let ProjectProvider = ({children})=>{

let [getProjectData,setgetProjectData] = useState([])

let GetData = async()=>{
    try {
        let data = await axios.get('https://e60fae2c53253c1d.mokky.dev/project')
        setgetProjectData(data.data)
    } catch (error) {
        console.log(error);
    }
}
useEffect(()=>{GetData()},[])
console.log(getProjectData);
    return(
        <ProjectContext.Provider value={{getProjectData}}>
            {children}
        </ProjectContext.Provider>
    )
}