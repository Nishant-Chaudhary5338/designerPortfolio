import React from "react"

const ImageRow = ({image}) => { 
    return (
        <div className="g">
            <img className=" border object-cover items-start border-gray-300 rounded-2xl" src={image.url} alt="" />
    </div>
)
}

export default ImageRow;