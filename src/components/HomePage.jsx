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
        <div className="m-10 ">
            <div className="mx-auto">
                <div className="flex flex-wrap space-x-4">{displayImages.map((u) => (
            <ImageRow image={u} />
        )) }</div>
            </div>
            
        </div>
    )
};

export default HomePage;