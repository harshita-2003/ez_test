import axios from 'axios'

const api_url = import.meta.env.VITE_APP_URL;

export const submitForm = async (email) => {
    try {
        const response = await axios.post(`${api_url}` , { email })
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error("Server error");
    }
}