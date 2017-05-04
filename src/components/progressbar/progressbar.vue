<template>
  <div class="progress" :class="progressCls">
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
    props:["cls","percentage","type","childCls"],
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
        if (this.childCls){
          console.log(this.childCls.split(/[ ]+/));
          let arr = this.childCls.split(/[ ]+/);
          for (let val of arr){
            retObj[val] = true;
          }
        }
        return retObj;
      }
    },
    created() {
      console.log(this)
    }
  }
</script>
