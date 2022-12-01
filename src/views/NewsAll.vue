<template>
<div class="overflow-clip tracking-[1px]">
<!-- 導覽列 -->
<Header />
<!-- Banner -->
<div class="pt-20">
  <img src="/bg-n2.jpg" class="max-h-[480px] w-full">
</div>
<!-- 最新消息 -->
<div class="bg-gray-50 overflow-x-hidden">
  	<div class="max-w-5xl mx-auto my-20">
		<Loading :active="isLoading"></Loading>
		<div class="px-10 flex justify-between">
      <div>
        <h2 class="text-2xl font-bold">最新消息</h2>
        <p class="text-sm font-thin pt-1 pb-10">News</p>  
      </div>
      <div>
        <a href="/" class="btn bg-white border-gray-900 hover:bg-gray-900 hover:border-gray-900 text-gray-900 hover:text-white">返回首頁</a>
      </div>
    </div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4 px-10">
			<div 
			v-for="(item, i) in data.newsdata.slice(0,6)"
			:key="item.title">
			<router-link :to="`/news/${item.id}`">
				<div 
				class="min-h-[300px] rounded-lg shadow bg-white p-10 flex flex-col justify-start relative transition-all hover:-translate-y-2">
					<span class="text-red-600 font-bold">News</span>
          
					<h5 class="text-md font-bold">{{ item.title }}</h5>
<!-- 					<div class="flex flex-row py-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p class="text-[12px]">{{ item.time }}</p>
          </div> -->
          <div>
					 <hr class="my-4 border border-gray-100">
          </div>
					<div class="absolute top-6 right-6">
						<span class="border border-2"></span>
					</div>
				</div>
			</router-link>
			</div>
		</div>
		<div class="min-h-[260px] flex flex-col justify-center items-center mx-10 my-32 bg-gray-900 rounded-lg">
      <h5 class="text-sm md:text-3xl font-bold text-white">VILLA 享受渡假時刻！</h5>
      <p class="text-white font-thin pt-2">海景戲水池、樓中樓星光玻璃屋、露天電影&BBQ</p>
      <button class="btn border-gray-900 bg-gray-700 hover:bg-gray-600 hover:border-gray-600 flex items-center justify-center h-8 px-6 text-sm uppercase rounded-lg font-bold w-[120px] mt-10">
        <a href="/">立即訂房</a>
      </button>
    </div>
	</div>

  <!-- 頁尾 -->
  <Footer />

</div>

</div>
</template>

<script>
import { ref, reactive, onMounted ,onUnmounted } from "vue";
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import axios from 'axios';
const url = '/data.json';
export default {
    setup() {
    	const data = reactive({
		    newsdata:'',
		});
		const isLoading = ref(false);

        onMounted(() => {
        	isLoading.value = true;
            axios.get('https://jsonplaceholder.typicode.com/posts')
            // axios.get('http://localhost:3000/datas')
              .then((res)=>{
              	  setTimeout(() => {
                  	  isLoading.value = false
	                  if(res.data) {
	              	  	data.newsdata = res.data
	                  	console.log(res.data)
	              	  }
                  },800)     	  
            })
         });
        return {
        	data,
        	isLoading
        };
    },
    components: {
      Header,
      Footer,
    },
}
</script>
