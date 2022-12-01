<template>
<div class="overflow-clip tracking-[1px]">
<!-- 導覽列 -->
<Header />
<!-- Banner -->
<div class="pt-20">
  <img src="/bg-n2.jpg" class="max-h-[480px] w-full">
</div>
<!-- 單篇文章 -->
<div class="bg-white overflow-x-hidden">
  <div class="max-w-5xl mx-auto px-10 py-20">
    <div class="flex flex-col min-h-[560px]">

<!--     <nav class="flex pb-6" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <a href="/" class="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 font-semibold">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
            首頁
          </a>
        </li>
        <li>
          <div class="flex items-center">
            <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            <a href="/news" class="ml-1 text-sm text-gray-700 hover:text-gray-900 md:ml-2 font-semibold">News</a>
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            <span class="ml-1 text-sm text-gray-500 md:ml-2 font-semibold">{{ data.newsdata.title }}</span>
          </div>
        </li>
      </ol>
    </nav> -->
      <div class="w-full flex flex-row py-4">
<!--         <div class="w-1/7 bg-white rounded flex flex-col md:mr-6 p-6 border-gray-200 border-r-4 space-y-4">
          <p class="font-semibold">分享</p>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
          </span>
        </div> -->
        <div class="w-full">
          <span class="text-red-600 font-bold">最新消息</span>
          <h2 class="text-gray-900 font-bold text-3xl py-4">2022 {{ data.newsdata.title }}</h2>
          <!-- <small>{{ data.newsdata.id }}</small> -->
          <hr class="border-2 border-gray-200 my-2">
          <p class="text-sm py-6 break-all">{{ data.newsdata.body }}</p>

        </div>
      </div>
    </div>

<!--     <div class="border rounded-lg p-10 min-h-[260px] flex justify-center items-center bg-cover bg-center" style="background-image: url('/bg-8.jpeg');">
    </div> -->
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
import { ref, reactive, onMounted, onUnmounted } from "vue";
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

export default {
  setup () {
    const route = useRoute();

    const data = reactive({
		  newsdata:'',
	  });

    onMounted(() => {
      const id = route.params.id;
        axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        // axios.get('http://localhost:3000/datas/'+id)
          .then((res)=>{
          	data.newsdata = res.data
            console.log(res.data)
        })
    });
    return {
      data
    }
  },
  components: {
    Header,
    Footer,
  },
}
</script>
