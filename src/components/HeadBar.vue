<template>
	<div class="head">
			<mt-search
			  v-model="value"
			  :result.sync="result"
			  cancel-text="取消"
			  placeholder="搜索">
			   <mt-cell
			    v-for="item in result"
			    :title="item.title"
			    :value="item.value">
			  </mt-cell>
			</mt-search>
		</div>
</template>
<script>
	export default{
		name:'HeadBar',
		data(){
			return {
				value: '',
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