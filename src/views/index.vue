<template>
  <div class="main">
    <!--菜单-->
    <b-menu></b-menu>

    <!--轮播图-->
    <b-slide></b-slide>

    <div style="height: 600px;width: 100%;"></div>

  </div>

</template>
<script>
  import menu from '@/components/Menu'
  import slide from '@/components/Slide'
  export default {
    name: 'index',
    data () {
      return {

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
