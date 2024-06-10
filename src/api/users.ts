import { userData } from "@/constants/urls";

export const getUserData = () => fetch(userData, {
    method: 'get',
}).then(data => data.json())