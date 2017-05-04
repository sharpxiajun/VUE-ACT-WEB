<template>
  <section>
    <el-row class="container">
      <el-col :span="24" class="header">
        <el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
          {{collapsed?'':sysName}}
        </el-col>
        <el-col :span="10">
          <div class="tools" @click.prevent="collapse">
            <i class="fa fa-align-justify"></i>
          </div>
        </el-col>
        <el-col :span="4" class="userinfo">
          <el-dropdown trigger="hover">
            <span class="el-dropdown-link userinfo-inner">Tester</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item  @click.native="aboutSys">关于</el-dropdown-item>
              <el-dropdown-item divided @click.native="changePw">修改密码</el-dropdown-item>
              <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-col>
      <el-col :span="24" class="main">
        <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
          <!--导航菜单 :default-active="activeName" 点击菜单tab后 左侧菜单活跃状态变化-->
          <el-menu  class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleSelect"
                    unique-opened router v-show="!collapsed">
            <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
              <el-submenu :index="index+''" v-if="!item.leaf">
                <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
                <el-menu-item v-for="child in item.children" :index="child.path" v-if="!child.hidden"><i :class="child.iconCls"></i>{{child.name}}</el-menu-item>
              </el-submenu>
              <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
            </template>
          </el-menu>
          <!--导航菜单-折叠后-->
          <ul class="el-menu el-menu-vertical-demo collapsed" v-show="collapsed" ref="menuCollapsed">
            <li v-for="(item,index) in $router.options.routes" v-if="!item.hidden" class="el-submenu item">
              <template v-if="!item.leaf">
                <div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"><i :class="item.iconCls"></i></div>
                <ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)">
                  <li v-for="child in item.children" v-if="!child.hidden" class="el-menu-item" style="padding-left: 40px;" :class="$route.path==child.path?'is-active':''" @click="handleCollSelect(index,child.path)"><i :class="child.iconCls"></i>{{child.name}}</li>
                </ul>
              </template>
              <template v-else>
                <div class="el-submenu__title el-menu-item" style="padding-left: 20px;height: 56px;line-height: 56px;padding: 0 20px;" :class="$route.path==item.children[0].path?'is-active':''" @click="handleCollSelect(index,item.children[0].path)"><i :class="item.iconCls"></i></div>
              </template>
            </li>
          </ul>
        </aside>
        <section class="content-container">
          <div class="grid-content bg-purple-light">
            <el-tabs v-model="activeName" type="card"  @tab-click="handleClickTab" @tab-remove="handleRemoveTab" closable>
              <el-tab-pane v-for="(item, index) in this.activeMenu" :label="item.title" :name="item.name">
                <el-col :span="24" class="content-wrapper">
                  <transition name="fade" mode="out-in">
                    <router-view></router-view>
                  </transition>
                </el-col>
              </el-tab-pane>
            </el-tabs>
          </div>
        </section>
      </el-col>
    </el-row>
  </section>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex';
  export default {
    data() {
      return {
        activeName: '/ircsoperatorinfo',
        sysName:'ElementUI示例',
        sysVersion:'1.0.0.0',
        collapsed:false
      }
    },
    computed:{
      ...mapGetters([
        'activeMenu',
        'menuitems'
      ])
    },
    methods: {
      //折叠导航栏
      collapse:function(){
        this.collapsed=!this.collapsed;
      },
      showMenu(i,status){
        this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
      },
      aboutSys() {
        this.$message(this.sysName + this.sysVersion);
      },
      handleOpen() {
        //console.log('handleOpen');
      },
      handleClose() {
        //console.log('handleClose');
      },
      handleClickTab(tab, event){
        this.$router.push(tab.name);
      },
      handleRemoveTab(tab){
        this.removeActive(tab);
        if(this.activeMenu.length > 0){
          this.activeName = this.activeMenu[this.activeMenu.length - 1].name;
          this.$router.push(this.activeMenu[this.activeMenu.length - 1].name);
        }
      },
      handleSelect: function (index, indexPath) {
        //index: 选中菜单项的 indexPath: 选中菜单项的 index path
        const title = this.handleTitle(index,indexPath);
        const tab = {title: title, name: index};
        this.addActive(tab);
        this.activeName = index;
      },
      handleTitle: function(index, indexPath){
        let authorization = JSON.parse(sessionStorage.getItem('authorization'));
        let title;
        const childrenMenu = authorization[parseInt(indexPath[0])].children;
        childrenMenu.forEach(
          function (item) {
            if(item.path == index){
              title = item.name;
            }
          }
        );
        return title;
      },
      handleCollSelect: function(index,indexPath){
        const colltitle = this.handleCollTitle(index,indexPath);
        const colltab = {title: colltitle, name: indexPath};
        this.addActive(colltab);
        this.activeName = indexPath;
        this.$router.push(indexPath);
      },
      handleCollTitle: function(index, indexPath){
        let authorization = JSON.parse(sessionStorage.getItem('authorization'));
        let title;
        const childrenMenu = authorization[index].children;
        childrenMenu.forEach(
          function (item) {
            if(item.path == indexPath){
              title = item.name;
            }
          }
        );
        return title;
      },
    ...mapActions([
        'addActive',
        'removeActive'
      ])
    },
    mounted() {
      var user = sessionStorage.getItem('user');
      if (user) {
        /*user = JSON.parse(user);
        this.userId = user.userId || '';
        this.password = user.password || '';
        this.username = user.username || '';*/
      }

    }
  }
</script>
<style scoped lang="scss">
  $color-primary: #58666e;

  .container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
  .header {
    height: 50px;
    line-height: 50px;
    background: $color-primary;
    color:#fff;
  .userinfo {
    text-align: right;
    padding-right: 35px;
    float: right;
  .userinfo-inner {
    cursor: pointer;
    color:#fff;
  img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 10px 0px 10px 10px;
    float: right;
  }
  }
  }
  .logo {
  //width:230px;
    height:50px;
    font-size: 20px;
    padding-left:20px;
    padding-right:20px;
    border-color: rgba(238,241,146,0.3);
    border-right-width: 1px;
    border-right-style: solid;
  img {
    width: 40px;
    float: left;
    margin: 10px 10px 10px 18px;
  }
  .txt {
    color:#fff;
  }
  }
  .logo-width{
    width:180px;
  }
  .logo-collapse-width{
    width:50px
  }
  .tools{
    padding: 0px 23px;
    width:14px;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
  }
  }
  .main {
    display: flex;
  // background: #324057;
    position: absolute;
    top: 50px;
    bottom: 0px;
    overflow: hidden;
  aside {
    flex:0 0 180px;
    width: 180px;
  // position: absolute;
  // top: 0px;
  // bottom: 0px;
  .el-menu{
    height: 100%;
  }
  .collapsed{
    width:50px;
  .item{
    position: relative;
  }
  .submenu{
    position:absolute;
    top:0px;
    left:50px;
    z-index:99999;
    height:auto;
    display:none;
  }

  }
  }
  .menu-collapsed{
    flex:0 0 50px;
    width: 50px;
  }
  .menu-expanded{
    flex:0 0 180px;
    width: 180px;
  }
  .content-container {
  // background: #f1f2f7;
    flex:1;
  // position: absolute;
  // right: 0px;
  // top: 0px;
  // bottom: 0px;
  // left: 230px;
    overflow-y: scroll;
    padding: 20px;
  .breadcrumb-container {
  //margin-bottom: 15px;
  .title {
    width: 180px;
    float: left;
    color: #475669;
  }
  .breadcrumb-inner {
    float: right;
  }
  }
  .content-wrapper {
    background-color: #fff;
    box-sizing: border-box;
  }
  }
  }
  }
</style>
