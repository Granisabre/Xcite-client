import { imageData } from "@/constants/urls";

export const getImageData = (page) => fetch(`${imageData}/${page}`, {
    method: 'get'
}).then(data => data.json())