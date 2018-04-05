import schemaList from '../api/schemaList';
import autoRequest from '../api/auto';

const actions = {};
const mutations = {};
const state = {};
const getters = {};

schemaList.forEach(schema => {
    const name = schema.name;
    actions[name] = async ({commit}, payload) => {
        const value = await autoRequest[name](payload);
        commit(name, value.data.data);
    };
    mutations[name] = (state, payload) => {
        state[name] = payload;
    };
    state[name] = {};
    getters[name] = state => state[name];
});

export default {
    actions,
    mutations,
    state,
    getters
};
