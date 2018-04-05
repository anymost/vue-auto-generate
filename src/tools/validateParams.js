import { Message } from 'bfui';
const message = Message;

const toString = value => Array.prototype.toString.call(value);


const validate = (source, target) => {
    if (!source && !target) {
        return true;
    }

    if (!source && target) {
        message('请求参数应该为空!');
        return false;
    }

    if (source && !target) {
        message('需要传入请求参数!');
        return false;
    }

    const sourceNames = Object.keys(source);
    const targetNames = Object.keys(target);

    if (sourceNames.length !== targetNames.length) {
        message('目标参数和源参数数量不一致!');
        return false;
    }

    for (let i = 0; i < sourceNames.length; i++) {

        if (sourceNames[i] !== targetNames[i]) {
            message('目标参数和源参数名称不一致!');
            return false;
        }

        if (typeof source[sourceNames[i]] !== typeof target[targetNames[i]]) {
            message(`参数${sourceNames[i]}类型不一致!`);
            return false;
        }

        if (typeof source[sourceNames[i]] === 'object') {
            if (toString(source[sourceNames[i]]) !== toString(target[targetNames[1]])) {
                message(`参数${sourceNames[i]}类型不一致!`);
                return false;
            }
        }
    }

    return true;

};

export default validate;
