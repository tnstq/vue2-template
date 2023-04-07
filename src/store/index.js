import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import home from './home';
//对外暴露Store类的一个实例
export default new Vuex.Store({
    //实现vuex仓库模块化开发
    modules: {
        home, 
    }
})