<template>
  <ul class="nav">
    <slot></slot>
  </ul>
</template>
<script>
  export default {
    name:"bsMenu",
    componentName: 'bsMenu',
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
    methods:{
      test() {
        this.$store.commit("testftn");
      }
    },
    mounted() {
    },
    created() {
      console.log("created menu")
      console.log(this)
    }
  }
</script>
