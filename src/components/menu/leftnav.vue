<template>
  <nav class="navi">
    <bs-menu :app-settings="appSettings">
      <bs-menu-title><span>概览</span></bs-menu-title>
      <bs-menu-item pager-router="readme" index="1">
        <i class="glyphicon glyphicon-calendar icon text-info-dker"></i>
        <span class="font-bold">框架说明</span>
      </bs-menu-item>
      <bs-menu-item index="2">
        <span class="pull-right text-muted">
          <i class="fa fa-fw fa-angle-right text"></i>
          <i class="fa fa-fw fa-angle-down text-active"></i>
        </span>
        <b class="badge bg-info pull-right">3</b>
        <i class="glyphicon glyphicon-envelope icon text-info-lter"></i>
        <span class="font-bold">ECHART 图表</span>
        <bs-submenu slot="child">
          <bs-submenu-item pager-router="helloEcharts">
            <span>ECHART3示例01</span>
          </bs-submenu-item>
          <bs-submenu-item pager-router="elDatatable">
            <span>ECHART3示例02</span>
          </bs-submenu-item>
          <bs-submenu-item>
            <span>ECHART3示例03</span>
          </bs-submenu-item>
        </bs-submenu>
      </bs-menu-item>
      <bs-menu-item index="3">
        <span class="pull-right text-muted">
          <i class="fa fa-fw fa-angle-right text"></i>
          <i class="fa fa-fw fa-angle-down text-active"></i>
        </span>
        <b class="label bg-primary pull-right">3</b>
        <i class="glyphicon glyphicon-stats icon text-primary-dker"></i>
        <span class="font-bold">Grid组件</span>
        <bs-submenu slot="child">
          <bs-submenu-item pager-router="test">
              <span>Grid组件-staticTable</span>
          </bs-submenu-item>
          <bs-submenu-item pager-router="elDatatable">
              <span>Grid组件-ELTable</span>
          </bs-submenu-item>
          <bs-submenu-item>
            <span>Grid组件-DataTable</span>
          </bs-submenu-item>
        </bs-submenu>
      </bs-menu-item>
      <bs-menu-item index="4">
        <span class="pull-right text-muted">
          <i class="fa fa-fw fa-angle-right text"></i>
          <i class="fa fa-fw fa-angle-down text-active"></i>
        </span>
        <b class="badge bg-danger pull-right">3</b>
        <i class="glyphicon glyphicon-th-large icon text-success"></i>
        <span class="font-bold">更多页面布局</span>
        <bs-submenu slot="child">
          <bs-submenu-item>
            <span>布局样式一</span>
          </bs-submenu-item>
          <bs-submenu-item>
            <span>布局样式二</span>
          </bs-submenu-item>
        </bs-submenu>
      </bs-menu-item>
      <bs-menu-line></bs-menu-line>
      <bs-menu-title><span>基础组件</span></bs-menu-title>
      <bs-menu-item>
        <i class="glyphicon glyphicon-th"></i>
        <span class="font-bold">Table</span>
      </bs-menu-item>
      <bs-menu-item>
        <i class="glyphicon glyphicon-briefcase icon"></i>
        <span class="font-bold">UI Kits</span>
      </bs-menu-item>
      <bs-menu-item>
        <i class="glyphicon glyphicon-list"></i>
        <span class="font-bold">Form</span>
      </bs-menu-item>
      <bs-menu-item>
        <i class="glyphicon glyphicon-signal"></i>
        <span class="font-bold">Chart</span>
      </bs-menu-item>
      <bs-menu-item>
        <i class="glyphicon glyphicon-file icon"></i>
        <span class="font-bold">Pages</span>
      </bs-menu-item>
      <bs-menu-line></bs-menu-line>
      <bs-menu-title><span>典型示例</span></bs-menu-title>
      <bs-menu-item>
        <i class="icon-user icon text-success-lter"></i>
        <span class="font-bold">图表和Grid混合</span>
      </bs-menu-item>
      <bs-menu-item>
        <i class="icon-question icon"></i>
        <span class="font-bold">树状菜单和Grid混合</span>
      </bs-menu-item>
      <bs-menu-line></bs-menu-line>
    </bs-menu>
  </nav>
</template>
<script>
  import bsMenu from './menu.vue';
  import bsMenuTitle from './menu-title.vue';
  import bsMenuItem from './menu-item.vue';
  import bsSubmenu from './submenu.vue';
  import bsSubmenuItem from './submenu-item.vue';
  import bsMenuLine from './menu-line.vue';
  export default {
    data() {
      return {
        name:"xiajun"
      }
    },
    props:{
      appSettings:{
        type:Object
      }
    },
    components:{
      bsMenu,bsMenuTitle,bsMenuItem,bsSubmenu,bsSubmenuItem,bsMenuLine
    },
    created() {
      console.log("created")
      console.log(this)
    }
  }
</script>
