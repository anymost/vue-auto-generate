import Vue from 'vue';
import Vuex from 'vuex';
import auto from './auto';
import custom from './custom';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auto,
        custom
    }
});
