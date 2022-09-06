import axios from "axios";
import { BASE_URL } from "./config";

const getAnimes = async (page) => {
  const response = await axios.get(`${BASE_URL}/anime?page=${page}`);

  const { data: animes } = response.data;

  const { current_page: currentPage, last_visible_page: lastPage } =
    response.data.pagination;

  return {
    animes,
    currentPage,
    lastPage,
  };
};

export default getAnimes;
