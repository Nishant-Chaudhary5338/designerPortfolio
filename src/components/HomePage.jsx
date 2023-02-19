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
                <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 space-y-4 flex-wrap gap-4">{displayImages.map((u) => (
            <ImageRow image={u} />
        )) }</div>
            </div>
            
        </div>
    )
};

export default HomePage;