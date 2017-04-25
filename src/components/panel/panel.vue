<template>
  <div class="panel panel-default">
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name:"xiajun"
      }
    }
  }
</script>
