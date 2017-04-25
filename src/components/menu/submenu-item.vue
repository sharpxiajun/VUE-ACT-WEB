<template>
  <li>
    <a  @click.prevent="handleClick">
      <slot></slot>
    </a>
  </li>
</template>
<script>
  export default {
    name:"bsSubmenuItem",
    componentName: 'bsSubmenuItem',
    data() {
      return {
        name:"xiajun"
      }
    },
    props:{
      pagerRouter: {
        type: String
      }
    },
    methods:{
      handleClick() {
        this.$router.push(this.pagerRouter);
      }
    }
  }
</script>
