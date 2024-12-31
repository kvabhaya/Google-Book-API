import axios from 'axios';

const API_URL = 'https://www.googleapis.com/books/v1/volumes';

export const fetchBooks = async (query) => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                q: query,
                maxResults: 20,
                startIndex: 0,
            },
        });
        return response.data.items;
    } catch (error) {
        console.error('Error fetching books:', error);
        return [];
    }
};
