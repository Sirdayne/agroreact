import axios from 'axios';

const BASE_URL = `http://agroplanapi-test.azurewebsites.net/`

let apiToken = axios.create({
  baseURL: BASE_URL,
  timeout: 180000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
});

let api = axios.create({
  baseURL: BASE_URL + 'api/',
  timeout: 180000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  }
});

const AUTH_TOKEN = 'bearer vm8iF1iJhuMmwtQEabBzRFokPb3hQNwvJkoWl5vRywkKD7do2aehOX58-NoucoJl1CH09l8_FpfH8y8ZSHGbm_gRayN7QRpHRZnfk8UQ6DNLCZwDDziV9CTdpjL3VZ6xcytjY2TCKCunSS80pWe-lNFE21uwjg_FHY6qb3nEomoiPkGszjf1WZzjboyDzY_bYR-c2yQMkubYxktm48eQXQMqR5NA1ZXOGpLsrBOPjM1Ehldeebc_cmpg69XAD94_Ca9TYJyFJ0rIl2fMAfym2k-_MzL2cZt269LmRsl_bIEtrLGAFSea1DDJjxq1dyb9hUpqipOFEsGdxy_iYD3xubOQM0LDpH9numkQkNyrKeT_CSek_kcC5270xhgUlCgYoVYWtR_SdbFDsqRLLRGVga1mRofa2uKQvP_pQL1JgYr21NPNpvM0KtXXsmQ41wQ849-qeD795mM_v3XESRBkFz9L7wmDPUtjUiIbw1DzmAtDUSfh8ueiYtJN8y0g_hJtHiFOZbjDc52iA4tb3KlGwywpQ4OxHi5tuflQNgHHsTje8Wkk6EGgDhxUMUtBU6gX'


api.interceptors.request.use(function (config) {
  //config.headers['Authorization'] = localStorage.getItem('agromap.token')
  config.headers['Authorization'] = AUTH_TOKEN
  return config;
}, function (error) {
  return Promise.reject(error);
});

//let AUTH_TOKEN = 'Bearer '+ localStorage.getItem('agromap.token')
//api.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default{
  get(path) {
    return api.get(path)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.showError()
      });
  },
  postToken(path, data) {
    return apiToken.post(path, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.showError()
      });
  },
  showError() {
    console.log('error')
  }
}