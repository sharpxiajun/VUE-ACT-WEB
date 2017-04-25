<template>
  <li :class="{'active':menuActive}">
    <a href="javascript:void(0);" @click="handleClick" @mouseenter="handleMouseenter" :class="{'auto':style.menuActive}">
      <slot></slot>
    </a>
    <slot name="child"></slot>
  </li>
</template>
<script>
  export default {
    name:"bsMenuItem",
    componentName: 'bsMenuItem',
    data() {
      return {
        name:"xiajun",
        next:{},
        style:{
          isActive:false
        }
      }
    },
    props:{
      appSettings:{
        type:Object
      },
      pagerRouter: {
        type: String
      },
      index:{
        type:String
      }
    },
    methods:{
      handleClick() {
        if (this.$children.length > 0){
          //this.curIndex = this.index;
          if (this.$store.state.curMenuIndex !== this.index){
            this.$store.state.curMenuIndex = this.index;
          }else{
            this.$store.state.curMenuIndex = "0";
          }
        }else{
          this.$router.push(this.pagerRouter);
        }
      },
      handleMouseenter(evt) {
        if (this.$parent.appSettings.asideFolded){
          let _this = $(evt.target),backdrop = '.dropdown-backdrop',
            wrap = $(this.$parent.$parent.$parent.$refs.appaside),
            top,w_h = $(window).height(),offset = 50,min = 150,next;
          !_this.is('a') && (_this = _this.closest('a'));
          if( _this.next().is('ul') ){
            next = _this.next();
          }else{
            return;
          }

          _this.parent().addClass('active');
          top = _this.parent().position().top + offset;
          next.css('top', top);
          if( top + next.height() > w_h ){
            next.css('bottom', 0);
          }
          if(top + min > w_h){
            next.css('bottom', w_h - top - offset).css('top', 'auto');
          }
          next.appendTo(wrap);
          this.next = next;
          next.on('mouseleave.nav', function(e){
            console.log("d!@")
            $(backdrop).remove();
            next.appendTo(_this.parent());
            next.off('mouseleave.nav').css('top', 'auto').css('bottom', 'auto');
            _this.parent().removeClass('active');
          });

          $('.smart').length && $('<div class="dropdown-backdrop"/>').insertAfter('.app-aside').on('click', function(next){
            next && next.trigger('mouseleave.nav');
          });

          wrap.on('mouseleave', function(e){
            next && next.trigger('mouseleave.nav');
            $('> .nav', wrap).remove();
          });
        }
      }
    },
    computed:{
      menuActive(){
        return this.index === this.$store.state.curMenuIndex;
      }
    },
    created() {
      console.log(this);
      this.childMenuNm = this.$children.length;
    }
  }
</script>
