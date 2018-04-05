import schemaList from './schemaList';
import services from '../services';
import validateParams from '../tools/validateParams';
const auto = {};

schemaList.forEach(config => {
    auto[config.name] = (data) => {
        const paramsValid = validateParams(config.params, data);
        if (process.env.NODE_ENV !== 'production') {
            if (!paramsValid) {
                return Promise.reject('参数不合法，请检查!');
            }
        }
        return services({
            path: config.path,
            method: config.method,
            params: data
        });
    };
});


export default auto;
