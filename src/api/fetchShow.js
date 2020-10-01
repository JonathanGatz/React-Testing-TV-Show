import axios from 'axios';

export const fetchShow = () => { 

return axios
    .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
    .then(res => (res.data))

}; //  I copied the .get & .then from axios as instructed. Exported it and imprted within App.js