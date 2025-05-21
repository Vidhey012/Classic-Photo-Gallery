import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
  },
});

export const fetchImages = async ({ pageParam = 1, query }) => {
  const endpoint = query
    ? `/search/photos?page=${pageParam}&query=${query}&per_page=10`
    : `/photos?page=${pageParam}&per_page=10`;
  const res = await api.get(endpoint);
  console.log('UNSPLASH KEY:', process.env.REACT_APP_UNSPLASH_ACCESS_KEY);
  return query ? res.data.results : res.data;
};
