import axios from "axios";


const configOMB = {
    baseURL: 'https://gmailsendshop.herokuapp.com/sendMessage/',
};


const axiosInstance = axios.create(configOMB);

export const Api = {
    sendMail: (data:any) => {
        return axiosInstance.post('Portfol', data)
    }
}