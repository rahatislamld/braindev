import axios from "axios";

export default async function postData(url, body) {
  return await axios.post(url, body);
}
