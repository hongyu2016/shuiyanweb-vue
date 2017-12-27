<template>
  <div class="main">
    <!--菜单-->
    <b-menu></b-menu>

    <!--轮播图-->
    <b-slide></b-slide>

    <div style="height: 600px;width: 100%;background-color: red" class="foo"></div>

  </div>

</template>
<script>
  import menu from '@/components/Menu'
  import slide from '@/components/Slide'
  import scrollreveal from 'scrollreveal'
  export default {
    name: 'index',
    data () {
      return {

      }
    },
    mounted(){
      this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been rendered
        //监听滚动
        window.addEventListener('scroll', this.winScroll);
       // Changing the defaults
        window.sr = scrollreveal({ reset: true });

        // Customizing a reveal set
        sr.reveal('.foo', { duration: 200 });
      })
    },
    methods:{
      winScroll(){
        /*var top = obj.getBoundingClientRect().top //元素顶端到可见区域顶端的距离
        var se = document.documentElement.clientHeight //浏览器可见区域高度。
        if(top <= se ) {
          //code
        }*/
       
      }
    },
    components:{
        'b-menu':menu,
        'b-slide':slide
    }
  }
</script>
<style scoped>

  .main {
    width: 100%;
  }

</style>
