import axios from 'axios';

export const fetchCharacters = async ({ pageParam = 1, queryKey }) => {
    const [_key, { filter, sort }] = queryKey;
    let url = `https://rickandmortyapi.com/api/character?page=${pageParam}`;
    
    if (filter) {
      url += `&name=${filter.name}&status=${filter.status}&species=${filter.species}`;
    }
    const response = await axios.get(url);
    return response.data;
  };