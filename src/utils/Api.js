import axios from 'axios'

const api = 'https://hacker-news.firebaseio.com/v0/'

export async function getItem(id) {
    try {
        const itemResonse = await axios.get(`${api}/item/${id}.json`);
        return { resolved: true, data: itemResonse.data }
    } catch (error) {
        return { resolved: false, data: error };
    }
}
