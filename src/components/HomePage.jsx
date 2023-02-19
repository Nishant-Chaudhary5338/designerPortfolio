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
        <div className="">
            <div className="sm:p-20 p-4">
                <div className="grid h-auto lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4">{displayImages.map((u) => (
            <ImageRow image={u} />
        )) }</div>
            </div>
            
        </div>
    )
};

export default HomePage;