import axios from "axios";
const perPage = 12;
let currentPage = 1;

axios.defaults.baseURL = "https://pixabay.com/api/"

export const fetchImages = async (searchQuery) => {
  const KEY = '38213838-3daddfe3507b21e9b34121ca2';
  const response =await axios.get(`/?q=${searchQuery}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`)
  return response.data;
}
