import axios from "axios";
const URL = "https://api.themoviedb.org/3";
const API_KEY = "a3edcb80ecd78e377e8ad6b82e85c70d";


const endpoints = {
    originals: "/discover/tv",
    trending: "/trending/all/week",
    now_playing: "/movie/now_playing",
    popular: "/movie/popular",
    top_rated: "/movie/top_rated",
    upcoming: "/movie/upcoming",
};

export const fetchData = (paran) =>{
    return axios.get(`${URL}${endpoints[paran]}?api_key=${ API_KEY}`)
}