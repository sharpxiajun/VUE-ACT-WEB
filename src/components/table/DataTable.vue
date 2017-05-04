<template>
  <div>
    <div class="bg-light lter b-b wrapper-md">
      <h1 class="m-n font-thin h3">Datatable列表展示</h1>
    </div>
    <div class="desc">
      <panel>
        <panel-header slot="header">
          DataTables示例
        </panel-header>
        <v-datatable :v-options="{
          sAjaxSource: '/table/datatable',
          aoColumns: [
          { mData: 'engine' },
          { mData: 'browser' },
          { mData: 'platform' },
          { mData: 'version' },
          { mData: 'grade' }
        ]}" cls="table table-striped m-b-none">
          <thead>
          <tr>
            <th  style="width:20%">渲染引擎</th>
            <th  style="width:25%">浏览器</th>
            <th  style="width:25%">操作系统</th>
            <th  style="width:15%">引擎版本</th>
            <th  style="width:15%">CSS级别</th>
          </tr>
          </thead>
          <tbody></tbody>
        </v-datatable>
      </panel>
    </div>
  </div>
</template>
<script>
  import vDatatable from "../datatable/vDatatable.vue";
  import panel from '../panel/panel.vue';
  import panelHeader from '../panel/panel-header.vue';
  import panelFooter from '../panel/panel-footer.vue';
  export default {
    data() {
      return {
        name:"xiajun"
      }
    },
    components: {
      vDatatable,panel,panelHeader,panelFooter
    }
  }
</script>
