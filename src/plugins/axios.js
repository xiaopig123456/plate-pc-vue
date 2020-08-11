import Vue from 'vue'
import VueAxios from "vue-axios"
import axios from "axios"
import NProgress from 'nprogress'

// axios 请求拦截
axios.defaults.withCredentials = true;

axios.defaults.baseURL = process.env.NODE_ENV === 'development'?process.env.VUE_APP_BASE_URL_DEV:process.env.VUE_APP_BASE_URL_PROD;

axios.interceptors.request.use(
  config=>{
    NProgress.start();

    /*const token = localStorage.getItem('ACCESS_TOKEN');
    if(token){
      config.headers.Authorization = `Bearer ${token}`;
    }*/
    return config;
  },
  error => {
    return Promise.reject(error)
  }
);

axios.interceptors.response.use(
  function (response) {
    NProgress.done();
    return response.data;
  },
  function (error) {
    /*if(util.getObjValue(error,'response.data.status') === 401){

    }else{

    }*/
    return Promise.reject(error);
  }
);

Vue.use(VueAxios, axios)