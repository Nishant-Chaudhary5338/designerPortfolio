import React from "react"
import { useNavigate } from "react-router";

const ImageRow = ({ image }) => { 
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate("/image/" + image.id)} className="">
            <img className=" border object-contain items-start border-gray-300 rounded-2xl" src={image.url} alt="" />
    </div>
)
}

export default ImageRow;