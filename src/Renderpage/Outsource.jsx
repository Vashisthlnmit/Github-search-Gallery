import { useState } from "react";
import { Mainpage } from "../MainGallery/Mainpage";
import Gallery from "../Gallery/Gallery";
import UserDetails from "../UserDetails/UserDetails";
export function Outsource(){
    const [searchterm,setsearchterm]=useState('')
    return(
        <>
          <h1>Search your</h1>
          <Mainpage updatesearchterm={setsearchterm}/>
          { searchterm ? <UserDetails name={searchterm}/> : <Gallery/>}
        </>
    )
}