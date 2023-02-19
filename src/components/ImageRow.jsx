import React from "react"

const ImageRow = ({image}) => { 
    return (
        <div className="g">
            <img className="w-96  border border-gray-100 rounded-xl" src={image.url} alt="" />
    </div>
)
}

export default ImageRow;