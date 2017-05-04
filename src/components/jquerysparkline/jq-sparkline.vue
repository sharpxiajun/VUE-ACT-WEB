<template>
  <div class="sparkline inline">
    <slot></slot>
  </div>
</template>
<script>
  import jqSparkline from '../../../node_modules/jquery-sparkline/jquery.sparkline'
  export default {
    data() {
      return {
        name:"xiajun"
      }
    },
    props:{
      data:{
        type:Array
      },
      params:{
        type:Object
      }
    },
    mounted() {
      $(this.$el).sparkline(this.data,this.params)
    }
  }
</script>
