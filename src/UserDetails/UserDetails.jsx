import React, { useEffect, useState } from "react";
import axios from "axios";
export default function UserDetails({name}){
    const [answer,setdata]=useState({})
    async function detail(){
        let a=await axios.get(`https://api.github.com/users/${name}`)
        console.log(a);
        setdata(a);
    }
    useEffect(()=>{
        detail()
    },[])
    return(
        <>
         <h1>Hello world</h1>
         <div>
            {answer.data.bio}
            <img src={answer.data.avatar_url} alt="" />
         </div>
        </>
    )
}