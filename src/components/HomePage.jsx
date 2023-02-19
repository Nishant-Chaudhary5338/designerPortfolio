import React, { useEffect, useState } from "react"
import { getImages } from "../api";
import ImageRow from "./ImageRow";


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
        <div className=" bg-cyan-300">
            <div className="p-20">
                <div className="grid lg:grid-cols-3 items-stretch sm:grid-cols-2 gap-4">{displayImages.map((u) => (
            <ImageRow image={u} />
        )) }</div>
            </div>
            
        </div>
    )
};

export default HomePage;