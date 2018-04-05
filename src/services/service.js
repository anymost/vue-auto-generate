import axios from 'axios';
import qs from 'qs';
import { Message } from 'bfui';
import config from './config';

const service = axios.create({ config });
const message = Message;

service.defaults.withCredentials = true;

// POST传参序列化(添加请求拦截器)
service.interceptors.request.use(
    config => {
        // 在发送请求之前做某件事
        if (
            config.method === 'post' ||
            config.method === 'put' ||
            config.method === 'delete'
        ) {
            // 序列化
            config.data = qs.parse(config.data);
        }
        return config;
    },
    error => {
        message({
            showClose: true,
            type: 'warning',
            message: '报错信息'
        });
        return Promise.reject(error);
    }
);

// 返回状态判断(添加响应拦截器)
service.interceptors.response.use(
    res => {
        // judge from res.data.code and handle error
        return res;
    },
    error => {
        message({
            showClose: true,
            type: 'warning',
            message: '请求失败'
        });
        return Promise.reject(error);
    }
);

export default service;
