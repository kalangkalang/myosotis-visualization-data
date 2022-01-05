import axios from "axios";
import axiosRetry from "axios-retry";
import CONST from "../util/constants";


const hostName = CONST.HOST_NAME;
const baseUrl = `${hostName}/${CONST.APPVERSION}`;

axiosRetry(axios, {
    retries: 3,
    retryDelay: axiosRetry.exponentialDelay,
    retryCondition: axiosRetry.isRetryableError
});


// Fungsi get-patch-post

// export function getDataPLC() {
//
// }