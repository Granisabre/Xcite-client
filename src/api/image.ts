import { imageData } from "@/constants/urls";

export const getImageData = (page: any) => fetch(`${imageData}/${page}`, {
    method: 'get'
}).then(data => data.json())