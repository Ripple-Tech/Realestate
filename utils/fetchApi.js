import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async (url) => {
const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': '223f695397msh7d85f7798e1f646p106909jsn0d51e3822b8d',
          'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
   })

   return data;

} 