import { OW_KEY } from "@env";
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    timeout: 1000,
});

instance.defaults.params = { appId: OW_KEY }

export default instance 