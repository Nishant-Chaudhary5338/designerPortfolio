import React, { useEffect } from "react";
import { useParams } from "react-router";
import { getImages } from "../api";

const ImageDetail = () => {
    useEffect(() => { 
        const promise = getImages();
        promise.then((d) => {
            console.log(d)
         })
    },[])
    return (
        <div>
            
        </div>
    )
}

export default ImageDetail;