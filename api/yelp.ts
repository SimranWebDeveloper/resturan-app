
import axiosLib, { AxiosInstance } from 'axios';

const yelpInstance: AxiosInstance = axiosLib.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer cCULugfu_HJ1rFaJAJAEukRD1E5Os-74sDi5mhWk6KMtyk9zPhjvnwEtlxyev03Z77fpFozOBU1kAbTSMGmEwl8wIWyUGWLSSDqJ9e8_keAWdsQWQpUkLBM_d-JRZnYx`, // Replace with your actual Yelp API key
    },
});

export default yelpInstance;
