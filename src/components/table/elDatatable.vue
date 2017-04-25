<template>
  <div class="desc">
    <div class="bg-light lter b-b wrapper-md ng-scope" style="margin-bottom: 8px;">
      <h1 class="m-n font-thin h3">基本用法-实例-01</h1>
      <ul class="list-group list-group-lg no-radius m-b-none m-t-n-xxs" style="margin: 20px;">
        <li class="list-group-item clearfix b-l-3x ng-scope b-l-info">
          <div class="clear">
            <div>
              <span class="label bg-light m-l-sm ng-binding">基本用法01:</span>
            </div>
            <div class="text-ellipsis m-t-xs ng-binding">
              checkbox-filter-def: 来定义选择过滤的控件
            </div>
          </div>
        </li>
        <li class="list-group-item clearfix b-l-3x ng-scope b-l-primary">
          <div class="clear">
            <div>
              <span class="label bg-light m-l-sm ng-binding">基本用法02:</span>
            </div>
            <div class="text-ellipsis m-t-xs ng-binding">
              actions-def: 来定义与列无关的表格动作
            </div>
          </div>
        </li>
        <li class="list-group-item clearfix b-l-3x ng-scope b-l-warning">
          <div class="clear">
            <div>
              <span class="label bg-light m-l-sm ng-binding">基本用法03:</span>
            </div>
            <div class="text-ellipsis m-t-xs ng-binding">
              row-action-def: 定义表里各列的操作
            </div>
          </div>
        </li>
        <li class="list-group-item clearfix b-l-3x ng-scope b-l-danger">
          <div class="clear">
            <div>
              <span class="label bg-light m-l-sm ng-binding">基本用法04:</span>
            </div>
            <div class="text-ellipsis m-t-xs ng-binding">
              action-col-width: 定义动作列的最小宽度
            </div>
          </div>
        </li>
      </ul>
    </div>
    <data-tables :data='tableData'
                 action-col-width='200'
                 @row-click='rowClick'
                 :row-action-def='getRowActionsDef()'
                 :actions-def='getActionsDef()'
                 :checkbox-filter-def='getCheckFilterDef()' ref='table1'>
      <el-table-column prop='flow_no' label='服务编号' sortable='custom'></el-table-column>
      <el-table-column prop='content' label='服务内容' sortable='custom'></el-table-column>
      <el-table-column prop='create_time' label='服务时间' sortable='custom'></el-table-column>
      <el-table-column prop='state' label='服务状态' sortable='custom'></el-table-column>
      <el-table-column prop='flow_type' label='服务类型' sortable='custom'></el-table-column>
      <el-table-column prop='building_group' label='分区' sortable='custom'></el-table-column>
      <el-table-column prop='building' label='楼栋' sortable='custom'></el-table-column>
      <el-table-column prop='room_no' label='房号' sortable='custom'></el-table-column>
      <el-table-column prop='cellphone' label='手机号' sortable='custom'></el-table-column>
    </data-tables>

    <div class="bg-light lter b-b wrapper-md ng-scope" style="margin-bottom: 8px;margin-top: 16px;">
      <h1 class="m-n font-thin h3">基本用法-实例-02</h1>
      <ul class="list-group list-group-lg no-radius m-b-none m-t-n-xxs" style="margin: 20px;">
        <li class="list-group-item clearfix b-l-3x ng-scope b-l-danger">
          <div class="clear">
            <div>
              <span class="label bg-light m-l-sm ng-binding">隐藏action列:</span>
            </div>
            <div class="text-ellipsis m-t-xs ng-binding">
              has-action-col: false，隐藏动作栏
            </div>
          </div>
        </li>
        <li class="list-group-item clearfix b-l-3x ng-scope b-l-success">
          <div class="clear">
            <div>
              <span class="label bg-light m-l-sm ng-binding">定义搜索框:</span>
            </div>
            <div class="text-ellipsis m-t-xs ng-binding">
              search-def: 来定义搜索过滤的控件
            </div>
          </div>
        </li>
      </ul>
    </div>
    <data-tables :data='tableData1'
                 :has-action-col='false'
                 @row-click='rowClick'
                 :search-def='getSearchDef()'>
      <el-table-column prop='flow_no' label='服务编号' sortable='custom'></el-table-column>
      <el-table-column prop='content' label='服务内容' sortable='custom'></el-table-column>
      <el-table-column prop='create_time' label='服务时间' sortable='custom'></el-table-column>
      <el-table-column prop='state' label='服务状态' sortable='custom'></el-table-column>
      <el-table-column prop='flow_type' label='服务类型' sortable='custom'></el-table-column>
      <el-table-column prop='building_group' label='分区' sortable='custom'></el-table-column>
      <el-table-column prop='building' label='楼栋' sortable='custom'></el-table-column>
      <el-table-column prop='room_no' label='房号' sortable='custom'></el-table-column>
      <el-table-column prop='cellphone' label='手机号' sortable='custom'></el-table-column>
    </data-tables>

    <div class="bg-light lter b-b wrapper-md ng-scope" style="margin-bottom: 8px;margin-top: 16px;">
      <h1 class="m-n font-thin h3">基本用法-实例-03</h1>
      <ul class="list-group list-group-lg no-radius m-b-none m-t-n-xxs" style="margin: 20px;">
        <li class="list-group-item clearfix b-l-3x ng-scope b-l-danger" title="col-not-row-click: 让某些列不能触发行点击事件，比如action列，里面有很多button，点击这些button的时候可能不小心点击到td，通过这个属性，设置一些列，则这些列不会触发行点击事件。action列默认不会触发行点击事件">
          <div class="clear">
            <div>
              <span class="label bg-light m-l-sm ng-binding">实例说明:</span>
            </div>
            <div class="text-ellipsis m-t-xs ng-binding">
              col-not-row-click: 让某些列不能触发行点击事件，比如action列，里面有很多button，点击这些button的时候可能不小心点击到td，通过这个属性，设置一些列，则这些列不会触发行点击事件。action列默认不会触发行点击事件
            </div>
          </div>
        </li>
      </ul>
    </div>
    <data-tables :data='tableData1'
                 :col-not-row-click='["flow_no", "create_time"]'
                 :row-action-def='getRowActionsDef()'
                 @row-click='rowClick'>
      <el-table-column prop='flow_no' label='服务编号' sortable='custom'></el-table-column>
      <el-table-column prop='content' label='服务内容' sortable='custom'></el-table-column>
      <el-table-column prop='create_time' label='服务时间' sortable='custom'></el-table-column>
      <el-table-column prop='state' label='服务状态' sortable='custom'></el-table-column>
      <el-table-column prop='flow_type' label='服务类型' sortable='custom'></el-table-column>
      <el-table-column prop='building_group' label='分区' sortable='custom'></el-table-column>
      <el-table-column prop='building' label='楼栋' sortable='custom'></el-table-column>
      <el-table-column prop='room_no' label='房号' sortable='custom'></el-table-column>
      <el-table-column prop='cellphone' label='手机号' sortable='custom'></el-table-column>
    </data-tables>

  <div class="bg-light lter b-b wrapper-md ng-scope" style="margin-bottom: 8px;margin-top: 16px;">
    <h1 class="m-n font-thin h3">基本用法-实例-04</h1>
    <ul class="list-group list-group-lg no-radius m-b-none m-t-n-xxs" style="margin: 20px;">
      <li class="list-group-item clearfix b-l-3x ng-scope b-l-danger">
        <div class="clear">
          <div>
            <span class="label bg-light m-l-sm ng-binding">pagination用法:</span>
          </div>
          <div class="text-ellipsis m-t-xs ng-binding">
            pagination-def: 自定义pagination的初始值
          </div>
        </div>
      </li>
    </ul>
  </div>
  <data-tables :data='tableData1'
               :row-action-def='getRowActionsDef()'
               :pagination-def='getPaginationDef()'
               @row-click='rowClick'>
    <el-table-column prop='flow_no' label='服务编号' sortable='custom'></el-table-column>
    <el-table-column prop='content' label='服务内容' sortable='custom'></el-table-column>
    <el-table-column prop='create_time' label='服务时间' sortable='custom'></el-table-column>
    <el-table-column prop='state' label='服务状态' sortable='custom'></el-table-column>
    <el-table-column prop='flow_type' label='服务类型' sortable='custom'></el-table-column>
    <el-table-column prop='building_group' label='分区' sortable='custom'></el-table-column>
    <el-table-column prop='building' label='楼栋' sortable='custom'></el-table-column>
    <el-table-column prop='room_no' label='房号' sortable='custom'></el-table-column>
    <el-table-column prop='cellphone' label='手机号' sortable='custom'></el-table-column>
  </data-tables>

    <div class="bg-light lter b-b wrapper-md ng-scope" style="margin-bottom: 8px;margin-top: 16px;">
      <h1 class="m-n font-thin h3">基本用法-实例-05</h1>
      <ul class="list-group list-group-lg no-radius m-b-none m-t-n-xxs" style="margin: 20px;">
        <li class="list-group-item clearfix b-l-3x ng-scope b-l-danger" title="也许默认的过滤方法不适合你，那么你可以自定义过滤方法。checkbox-filter-def和search-def都有一个filterFunction属性，定义一个函数即可。本例设定的过滤方案是: 过滤state_code值等于搜索栏的值。所以在搜索栏输入created时可以显示未处理的数据">
          <div class="clear">
            <div>
              <span class="label bg-light m-l-sm ng-binding">高级用法：自定义过滤方法:</span>
            </div>
            <div class="text-ellipsis m-t-xs ng-binding">
              也许默认的过滤方法不适合你，那么你可以自定义过滤方法。checkbox-filter-def和search-def都有一个filterFunction属性，定义一个函数即可。本例设定的过滤方案是: 过滤state_code值等于搜索栏的值。所以在搜索栏输入created时可以显示未处理的数据
            </div>
          </div>
        </li>
      </ul>
    </div>
    <data-tables :data='tableData1'
                 :checkbox-filter-def='getCheckFilterDef()'
                 :row-action-def='getRowActionsDef()'
                 :search-def='getSearchDef1()'
                 action-col-width='200'
                 @row-click='rowClick'>
      <el-table-column prop='flow_no' label='服务编号' sortable='custom'></el-table-column>
      <el-table-column prop='content' label='服务内容' sortable='custom'></el-table-column>
      <el-table-column prop='create_time' label='服务时间' sortable='custom'></el-table-column>
      <el-table-column prop='state' label='服务状态' sortable='custom'></el-table-column>
      <el-table-column prop='flow_type' label='服务类型' sortable='custom'></el-table-column>
      <el-table-column prop='building_group' label='分区' sortable='custom'></el-table-column>
      <el-table-column prop='building' label='楼栋' sortable='custom'></el-table-column>
      <el-table-column prop='room_no' label='房号' sortable='custom'></el-table-column>
      <el-table-column prop='cellphone' label='手机号' sortable='custom'></el-table-column>
    </data-tables>
  </div>

</template>
<script>
  import DataTables from 'vue-data-tables'
  export default {
    components: {
      DataTables
    },

    data() {
      return {
        tableData: [],
        tableData1: [],
        filteredData: []
      }
    },

    created() {
      let cn = [{
        'building': '5栋',
        'building_group': '南苑',
        'cellphone': '13400000000',
        'content': '墙体渗水，请尽快维修',
        'create_time': '2016-10-01 22:25',
        'flow_no': 'FW201601010001',
        'flow_type': '维修',
        'flow_type_code': 'repair',
        'id': '111111',
        'room_id': '00501',
        'room_no': '501',
        'state': '未处理',
        'state_code': 'created'
      }, {
        'building': '6栋',
        'building_group': '北苑',
        'cellphone': '13400000000',
        'content': '家里门锁坏了，请帮忙修一下',
        'create_time': '2016-10-01 22:25',
        'flow_no': 'FW201601010002',
        'flow_type': '维修',
        'flow_type_code': 'repair',
        'id': '2222222',
        'room_id': '00701',
        'room_no': '701',
        'state': '已派工',
        'state_code': 'assigned'
      }, {
        'building': '9栋',
        'building_group': '北苑',
        'cellphone': '13400000000',
        'content': '帮忙收一下衣服',
        'create_time': '2016-10-02 22:25',
        'flow_no': 'FW201601010002',
        'flow_type': '帮忙',
        'flow_type_code': 'help',
        'id': '2222222',
        'room_id': '00601',
        'room_no': '601',
        'state': '已结束',
        'state_code': 'closed'
      }]
      this.tableData1 = cn
      for (var i = 0; i < 100; i++) {
        this.tableData = this.tableData.concat(cn)
      }
    },

    methods: {
      rowClick(row) {
        this.$message('行 clicked')
        console.log('行 clicked', row)
      },
      getSearchDef() {
        return {
          offset: 12,
          placeholder: 'please input searchkey',
          props: ['state', 'flow_type'] // can be string or Array
        }
      },
      getSearchDef1() {
        return {
          offset: 12,
          filterFunction(el, filter) {
            return filter.val === el.state_code
          }
        }
      },
      getPaginationDef() {
        return {
          layout: 'total, prev, pager, next, jumper, sizes',
          pageSize: 1,
          pageSizes: [1, 2, 3],
          currentPage: 2
        }
      },
      getCheckFilterDef() {
        return {
          width: 14,
          props: 'state_code',
          def: [{
            'code': 'created',
            'name': '未处理'
          }, {
            'code': 'assigned',
            'name': '已派工'
          }, {
            'code': 'accepted',
            'name': '已接单'
          }, {
            'code': 'closed',
            'name': '已结束'
          }, {
            'code': 'cancelled',
            'name': '已取消'
          }]
        }
      },
      getActionsDef() {
        let self = this
        return {
          width: 5,
          def: [{
            name: '新建',
            handler() {
              self.$message('新建 clicked')
            },
            icon: 'plus'
          }, {
            name: '导出',
            handler() {
              self.$message('导出 clicked')
            },
            icon: 'upload'
          }]
        }
      },
      getRowActionsDef() {
        let self = this
        return [{
          type: 'primary',
          handler(row) {
            self.$message('编辑 clicked')
            console.log('编辑 in row clicked', row)
          },
          name: '编辑'
        }, {
          type: 'primary',
          handler(row) {
            self.$message('详情 in row clicked')
            console.log('详情 in row clicked', row)
          },
          name: '详情'
        }]
      }
    }
  }
</script>
