import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
    menuitems: [],
    isLoadRoutes: false,
    //add by  fuminjie  用于新增点击左侧菜单生成tab 用于vuex进行管理   2017-04-27
    activeMenu:[{"title": "列表展示01", name: "/ircsoperatorinfo"}],
}

// 定义所需的 mutations
const mutations = {
    //新增菜单
    ADD_MENU(state, menuItems){
        renderingMenus(menuItems);
        state.menuitems = menuItems;
    },
    //是否已经加载路由标识
    LOAD_ROUTES(state){
        state.isLoadRoutes = !state.isLoadRoutes
    },
    //add by  fuminjie  用于新增点击左侧菜单生成tab 用于vuex进行管理   2017-04-27
    ADD_ACTIVE(state,tab){
        addTabs(state,tab);
    },
    //add by  fuminjie  用于删除tab菜单栏 vuex进行管理   2017-04-27
    REMOVE_ACTIVE(state,tab){
        removeTabs(state,tab);
    }

}
function addTabs(state,tab){
    let exist = false;
    state.activeMenu.forEach(
        function(item){
            if(item.name == tab.name){
                exist = true;
            }
        }
    );
    if(!exist){
        state.activeMenu.push(tab);
    }

}


function removeTabs(state,tab){
    let newTabs = [];
    state.activeMenu.forEach(
        function(item){
            if(item.name != tab){
                newTabs.push(item);
            }
        }
    );
    state.activeMenu = newTabs;
}


function renderingMenus(menuItems){
    menuItems.forEach(function(item){
        item.component = require("../views/" + item.component + ".vue");
        renderingSecond(item.children);
    });
}

function renderingSecond(params){
    params.forEach(function(item){
        item.component = require("../views/" + item.component + ".vue");
    });
}


// 创建 store 实例
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})
