<template>
	<div class="index">
		<!-- <mt-header fixed title="fixed top"> -->
		<!-- 	<mt-search
			  v-model="value"
			  cancel-text="取消"
			  placeholder="搜索">
			</mt-search> -->
		<!-- </mt-header> -->
		<!-- <h1>尤文图斯</h1> -->
		<router-view ></router-view>
		<!-- <mt-tabbar v-model="selected">
		  <mt-tab-item id="home">
		    <img slot="icon" src="../assets/image/index.svg">
		    首页
		  </mt-tab-item>
		  <mt-tab-item id="视频">
		    <img slot="icon" src="../assets/image/video.svg">
		    视频
		  </mt-tab-item>
		  <mt-tab-item id="发现">
		    <img slot="icon" src="../assets/image/find.svg">
		    发现
		  </mt-tab-item>
		  <mt-tab-item id="我的">
		    <img slot="icon" src="../assets/image/my.svg">
		    我的
		  </mt-tab-item>
		</mt-tabbar> -->
	</div>
</template>
<script>
	export default{
		data(){
			return {
				selected: '',
				value: ''
			}
		},
		 watch: {
	      selected: function (val, oldVal) {
	        console.log(val)
	         switch(val){
                case 'home':
                    this.$router.push('/home');
                break;
                case 'video':
                    this.$router.push('/video');
                break;
                case 'find':
                    this.$router.push('/find');
                break;
                case 'my':
                    this.$router.push('/my');
                break;
            }

	      }
	    }
	}
</script>