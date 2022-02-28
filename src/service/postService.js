import axios from 'axios';

export const getPost = async () => {
    const result = axios.get('https://jsonplaceholder.typicode.com/posts')
    return await result
};


