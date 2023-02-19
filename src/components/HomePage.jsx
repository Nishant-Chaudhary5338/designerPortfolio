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
        <div className=" bg-gray-50">
            <div className="p-20">
                <div className="grid grid-cols-3 gap-4">{displayImages.map((u) => (
            <ImageRow image={u} />
        )) }</div>
            </div>
            
        </div>
    )
};

export default HomePage;