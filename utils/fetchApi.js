import axios from "axios";
export const baseUrl = 'https://bayut.p.rapidapi.com';


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '187882b51bmshe44dfc8172e8e0ep160f0djsn9e44e22eb233',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        },
    });
    return data;
}