import axios from 'axios'

const api_url = import.meta.env.VITE_APP_URL;

export const submitForm = async (email) => {
    try {
        const response = await axios.post(`${api_url}`, { email })
        if (response.status === 200) {
            return { success: true, message: "Form Submitted" };
        }
        
        return response.data;

    } catch (error) {
        if (error.response) {
            if (error.response.status === 422) {
                throw { status: 422, message: error.response.data.message || "Validation Error" };
            }
            throw error.response.data;
        }
        throw { status: 500, message: "Server error" };
    }
}