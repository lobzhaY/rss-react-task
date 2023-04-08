import axios from 'axios';
import { AUTHORIZATION, URL_API } from '../../constants/constants';
import { ICardStateMain } from '../../interface/componentsInterface/cardItemInterface';

// export const getItems = axios({ url: `${URL_API}?query=${value || 'photo'}&client_id=${AUTHORIZATION}` })
export default async function getItems(value: string) {
  let data = [];
  try {
    const res = await axios.get(`${URL_API}?query=${value || 'photo'}&client_id=${AUTHORIZATION}`);
    data = res.data.data.results;
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
      return error.response?.data
    } else if (error instanceof Error) {
      console.log(error.message);
      return error.message
    }
  }
  // return data;
  /* console.log(value);
  return axios
    .get(`${URL_API}?query=${value || 'photo'}&client_id=${AUTHORIZATION}`)
    .then((data) => {
      console.log(data.data.results);
      return data.data.results as ICardStateMain[];
    }); */
}
