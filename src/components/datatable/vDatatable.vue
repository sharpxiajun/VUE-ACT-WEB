<template>
  <table :class="tableCls">
    <slot></slot>
  </table>
</template>
<script>
  import Datatable from '../../../node_modules/datatables/media/js/jquery.dataTables'
  import '../../../static/jquery/datatables/dataTables.bootstrap'
  import '../../../static/jquery/datatables/dataTables.bootstrap.css'

  export default {
    data() {
      return {
        name:"xiajun"
      }
    },
    props:{
      cls:{
        type:String
      },
      vOptions:{
        type:Object
      }
    },
    computed:{
      tableCls() {
        console.log(this.vOptions)
        console.log(this.cls)
        let retObj = {};
        if (this.cls){
          console.log(this.cls.split(/[ ]+/));
          let arr = this.cls.split(/[ ]+/);
          for (let val of arr){
            retObj[val] = true;
          }
        }
        return retObj;
      }
    },
    mounted() {
      console.log(this)
      console.log(this.vOptions)
      console.log(this.cls)
      let lang = {
        language: {
        "sProcessing": "处理中...",
        "sLengthMenu": "显示 _MENU_ 项结果",
        "sZeroRecords": "没有匹配结果",
        "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
        "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
        "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
        "sInfoPostFix": "",
        "sSearch": "搜索:",
        "sUrl": "",
        "sEmptyTable": "表中数据为空",
        "sLoadingRecords": "载入中...",
        "sInfoThousands": ",",
        "oPaginate": {
          "sFirst": "首页",
          "sPrevious": "上页",
          "sNext": "下页",
          "sLast": "末页"
        },
        "oAria": {
          "sSortAscending": ": 以升序排列此列",
          "sSortDescending": ": 以降序排列此列"
        }
      }};

      if (this.vOptions){
        console.log($)
        $(this.$el).DataTable($.extend(lang,this.vOptions));
      }
    }
  }
</script>
