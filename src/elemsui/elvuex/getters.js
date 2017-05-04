//2017-04-05 根据权限增加菜单路由
const menuitems = state => state.menuitems

const isLoadRoutes = state => state.isLoadRoutes

//add by  fuminjie  用于新增点击左侧菜单生成tab 用于vuex进行管理   2017-04-27
const activeMenu = state => state.activeMenu

export {
    menuitems,
    isLoadRoutes,
    activeMenu,
}