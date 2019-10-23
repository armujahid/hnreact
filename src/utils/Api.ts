import axios from "axios";
import { API_URL } from "./constants";

export async function getItem(id: any) {
  try {
    const itemResonse = await axios.get(`${API_URL}/item/${id}.json`);
    return { resolved: true, data: itemResonse.data };
  } catch (error) {
    return { resolved: false, data: error };
  }
}

export async function getList(name: any) {
  try {
    const itemResonse = await axios.get(`${API_URL}/${name}.json`);
    return { resolved: true, data: itemResonse.data };
  } catch (error) {
    return { resolved: false, data: error };
  }
}
