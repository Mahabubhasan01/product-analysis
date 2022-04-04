import { useEffect, useState } from "react"

const CustomHook = () =>{
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('CustomApi.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return [blogs,setBlogs]
}
export default CustomHook;