import React from "react";
export default function Picture({ url }) {
    return (
        <>
           
                <div className="w-60 h-60">
                    <img src={url} alt="" srcset="" />
                </div>
            
        </>
    )
}