<template>
	<div class="home">
		<head-bar></head-bar>
		 <!-- <div class="nav">  
	      <mt-button size="small" @click.native.prevent="active = 'tab-container1'">tab 1</mt-button>  
	      <mt-button size="small" @click.native.prevent="active = 'tab-container2'">tab 2</mt-button>  
	      <mt-button size="small" @click.native.prevent="active = 'tab-container3'">tab 3</mt-button>  
	    </div>  
	    <div class="page-tab-container">  
	      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>  
	        <mt-tab-container-item id="tab-container1">  
	          <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>  
	        </mt-tab-container-item>  
	        <mt-tab-container-item id="tab-container2">  
	          <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>  
	        </mt-tab-container-item>  
	        <mt-tab-container-item id="tab-container3">  
	          <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>  
	        </mt-tab-container-item>  
	      </mt-tab-container>  
	    </div>   -->
	</div>
</template>
<script>
	import HeadBar from '@/components/HeadBar.vue'
	export default{
		components: {
	        "head-bar": HeadBar
	    },
		data(){
			return {
				// value: '',
				// active: 'tab-container1',
				result:[
					{
						'title':'1',
						'value':'wo'
				    },
				    {
						'title':'1',
						'value':'wo'
				    },
				    {
						'title':'1',
						'value':'wo'
				    }
				]
			}
			
		}

	}
</script>