<template>
  <div class="progress ng-isolate-scope" :class="progressCls">
    <div class="progress-bar" :class="progressColor" :style="widthValue"></div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        name:"xiajun"
      }
    },
    props:["cls","percentage","type"],
    computed:{
      progressCls(){
        let retObj = {};
        if (this.cls){
          console.log(this.cls.split(/[ ]+/));
          let arr = this.cls.split(/[ ]+/);
          for (let val of arr){
            retObj[val] = true;
          }
        }
        return retObj;
      },
      widthValue() {
        return {
          width:this.percentage
        }
      },
      progressColor(){
        let retObj = {};
        if (this.type){
          retObj["progress-bar-" + this.type] = true;
        }
        return retObj;
      }
    },
    created() {
      console.log(this)
    }
  }
</script>
