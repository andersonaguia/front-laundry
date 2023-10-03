import axios from "axios";
import { commandMachines } from "../../contexts/Machines/Machines.interfaces";

const api = axios.create({
  baseURL : process.env.REACT_APP_URL_BASE
})

export { api }

export const findCommandMachines = async (): Promise<commandMachines[]> => {
  return new Promise(async (resolve, reject) => {
    try {

      const result = await api.get("/machines/all");
      resolve(result.data);
    } catch (err) {
      reject(err);
    }
  });
};
