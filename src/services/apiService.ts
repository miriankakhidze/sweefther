import { OW_ENDPOINT, OW_KEY } from "@env";
import axios from "axios";

const instance = axios.create({
    baseURL: OW_ENDPOINT,
    timeout: 1000,
});

instance.defaults.params = { appId: OW_KEY }

export default instance 