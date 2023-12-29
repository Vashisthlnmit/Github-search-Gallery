import React, { useEffect, useState } from "react";
import axios from "axios";
import Picture from "../Picture/picture";
export default function Gallery() {

    const [data, setdata] = useState([])
    const [text,settext]=useState("")
    async function download() {
        const a = await axios.get('https://api.github.com/users')
        const b = a.data
        setdata(b);
    }
    
    useEffect(() => {
        download()
    }, [])
    return (
        <>
            <h1>hello world</h1>
            
            {text}
            <div className="flex flex-wrap">

                {
                    data.map((obj, index) => <Picture url={obj.avatar_url} />)
                }
            </div>
        </>
    )
}