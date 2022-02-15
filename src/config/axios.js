import axios from 'axios';

let config = async () => {
    const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjY2MjI1YThmZjM0MDE4YjdiNjYyMzRhYTAwMGIxZCIsInN1YiI6IjYyMDhhNGI1ZDdmYmRhMDBiY2M2MTNmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BQHyowE_OprJpZqwyl8pnmcwysy8BfYhKJfzIV0HlFI"
    return {
        headers: {
            'Authorization': `Bearer ${TOKEN}`,
            'Accept': "application/json",
            'Content-Type': "application/json"
        }
    }
};

export default {
    get: async url => {
        try{
            return await axios.get(url, await config())
        }
        catch(e){
            return {e}
        }
    },
    post: async (url,data) => {
        try{
            let res = await axios.post(url, data, await config());
            return res;
        }
        catch(e){
            return {e}
        }
    },
    put: async (url,data)=> {
        try{
            let res = await axios.put(url, data, await config());
            return res;
        }
        catch(e){
            return {e}
        }
    },
    delete: async (url)=> {
        try{
            let res = await axios.delete(url,  await config());
            return res;
        }
        catch(e){
            return {e}
        }
    }
}




