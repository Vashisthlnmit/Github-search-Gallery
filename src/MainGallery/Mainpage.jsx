import React, { useState } from "react";
import { useDebounce } from "../Debounce/useDebounce";
export function Mainpage({updatesearchterm}){
   const debouncesearch=useDebounce((e)=>updatesearchterm(e.target.value))
    return(
        <>
         <input type="text" 
         placeholder="enter the username to look for"
         onChange={debouncesearch}
         />
        </>
    )


}