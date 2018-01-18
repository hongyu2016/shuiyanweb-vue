<template>
  <div class="bottom">
    <b-container>
      <b-row>
        <b-col cols="12" md="12" class="friend-link">
          <b-link :href="list.friendlink_url" target="_blank" class="friend-link-a" v-for="list in link" :key="list.friendlink_id">{{list.friendlink_name}}</b-link>
        </b-col>
        <b-col cols="12" md="12" class="copyright">
          Copyright © 2017.水研村 All rights reserve
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
	export default {
		name: '',
		data () {
			return {
				link:[]
      }
		},
    mounted(){
			this.getlist();
    },
		methods: {
      getlist(){
        this.$http.get(`${this.hostUrl}/api/index/friendlink`).then((res)=>{
          if(res.data.success){
          	this.link=res.data.data;
          }
        });
      }
    }
	}
</script>
<style scoped>
  .bottom{
    padding: 10px;
    background-color: rgba(0,0,0,1);
  }
  .bottom .copyright{
    font-size: 14px;
    color: #969595;
  }
  .friend-link{
    margin-bottom: 5px;
  }
  .friend-link .friend-link-a{
    color: aliceblue;
    padding: 3px;
  }
</style>
