import React, { useEffect, useState } from "react"
import { getImages } from "../api";


const HomePage = () => {
    const [displayImages, setDisplayImages] = useState([]);
    useEffect(() => { 
        const promise = getImages();
        promise.then((d) => {
            setDisplayImages(d)
            console.log(d)
         })
    },[])
    return (
        <div>{displayImages.map((u) => (
            <div>{u.url }</div>
        )) }</div>
    )
};

export default HomePage;