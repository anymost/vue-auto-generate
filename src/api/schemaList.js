import * as constant from '../constant';
const schemaList = [
    {
        name: constant.TEST,
        path: '/test',
        method: 'get',
        params: {
            page: 'number',
            q: 'string'
        }
    }
];

export default schemaList;
