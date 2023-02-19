import axios from "axios";


export const getImages = async () => { 
    try {
        const response = await axios.get("https://be.platform.simplifii.com/api/v1/static/amal")
        const images = response.data.response.data;
        return images;
    } catch (e) { 
        console.log("api failed");
    }
}