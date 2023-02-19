import React from "react"
import { useNavigate } from "react-router";

const ImageRow = ({ image, index }) => { 
    const navigate = useNavigate();
    const handleClick = () => { 
        navigate(`/image/${index}`)
    }
    return (
        <div onClick={handleClick} className="">
            <img className=" border overflow-hidden border-gray-300 rounded-2xl" src={image.url} alt="" />
    </div>
)
}

export default ImageRow;