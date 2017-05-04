//2017-04-05 根据权限增加菜单路由
export const addMenu = ({ commit }, menuItems) => {
    commit('ADD_MENU', menuItems);
}

export const loadRoutes = ({ commit }) => {
    commit('LOAD_ROUTES');
}

//add by  fuminjie  用于新增点击左侧菜单生成tab vuex进行管理   2017-04-27
export const addActive = ({ commit },tab) => {
    commit('ADD_ACTIVE',tab);
}

//add by  fuminjie  用于删除tab菜单栏 vuex进行管理   2017-04-27
export const removeActive = ({ commit },tab) => {
    commit('REMOVE_ACTIVE',tab);
}