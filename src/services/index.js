import request from './service';

const index = data => {
    const { path, method, params } = data;
    let payload = { url: path, method };
    payload = method === 'post' ? { ...payload, data: params } : { ...payload, params };
    return request(payload);
};

export default index;
