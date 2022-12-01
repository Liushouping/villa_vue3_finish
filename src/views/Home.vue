<script>
import { ref, reactive, onMounted ,onUnmounted } from "vue";
import { KinesisContainer, KinesisElement } from 'vue-kinesis';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

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
        	isLoading,
        };
    },
    components: {
    	Header,
		Footer,
	},
}
</script>

<template>
	
<div class="overflow-clip tracking-[1px]">
<!-- 導覽列 -->
<Header />
<!-- Banner -->
<div class="hero min-h-screen bg-gray-50 sticky top-0">
  <div class="hero-content flex-col lg:flex-row-reverse px-10">

  	<div class="lg:w-1/2 flex justify-center items-center max-w-[360px] md:max-w-[360px] lg:max-w-[760px]">
  		<img src="/bg-n1.jpg" class="mask mask-squircle shadow-2xl float lg:px-12" />
  	</div>
  	<div class="lg:w-1/2 pt-6 lg:pt-0">
      <h1 class="text-3xl md:text-5xl font-bold text-gray-900">VILLA</h1>

      <p class="text-[12px] md:text-[16px] py-6 text-gray-900 font-bold tracking-[2px]">#海景戲水池 #樓中樓星光玻璃屋 #露天電影 #BBQ</p>

      <button class="relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-bold uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 rounded-lg">
      	<a href="/room">立即訂房</a>
      </button>
    </div>
    <!-- 輪播文字 -->
	<div class="text-gray-300 text-xl py-4 font-bold mt-20 absolute bottom-0 hidden md:flex">
		<div class="flex w-max animate-move-left" style="animation-play-state:running">
			<div class="w-fit px-6">VILLA
			</div>
			<div class="w-fit px-6">#樓中樓星光玻璃屋
			</div>
			<div class="w-fit px-6">#BBQ
			</div>
			<div class="w-fit px-6">#海景戲水池
			</div>
			<div class="w-fit px-6">#露天電影
			</div>
			<div class="w-fit px-6">VILLA
			</div>
			<div class="w-fit px-6">#樓中樓星光玻璃屋
			</div>
			<div class="w-fit px-6">#BBQ
			</div>
			<div class="w-fit px-6">#海景戲水池
			</div>
			<div class="w-fit px-6">#露天電影
			</div>
			<div class="w-fit px-6">VILLA
			</div>
			<div class="w-fit px-6">#樓中樓星光玻璃屋
			</div>
			<div class="w-fit px-6">#BBQ
			</div>
			<div class="w-fit px-6">#海景戲水池
			</div>
			<div class="w-fit px-6">#露天電影
			</div>
			<div class="w-fit px-6">VILLA
			</div>
			<div class="w-fit px-6">#樓中樓星光玻璃屋
			</div>
			<div class="w-fit px-6">#BBQ
			</div>
			<div class="w-fit px-6">#海景戲水池
			</div>
			<div class="w-fit px-6">#露天電影
			</div>
			<div class="w-fit px-6">VILLA
			</div>
			<div class="w-fit px-6">#樓中樓星光玻璃屋
			</div>
			<div class="w-fit px-6">#BBQ
			</div>
			<div class="w-fit px-6">#海景戲水池
			</div>
			<div class="w-fit px-6">#露天電影
			</div>
			<div class="w-fit px-6">VILLA
			</div>
			<div class="w-fit px-6">#樓中樓星光玻璃屋
			</div>
			<div class="w-fit px-6">#BBQ
			</div>
			<div class="w-fit px-6">#海景戲水池
			</div>
			<div class="w-fit px-6">#露天電影
			</div>
		</div>
	</div>
  </div>

  <!-- 泡泡 -->
<!--     <div class="bubbles opacity-40">
      <img v-for="n in 7" src="/bubble.svg">
    </div> -->
</div>
<!-- 加購行程 -->
<div class="sticky top-0 bg-gray-100 overflow-x-hidden">

	<div class="hero min-h-screen" style="background-image: url('bg-n1.jpg');">
	  <div class="hero-overlay bg-opacity-50"></div>
	  <div class="hero-content text-center text-neutral-content">
	    <div class="max-w-md">
	      <h1 class="mb-5 text-5xl font-bold">加購行程</h1>
	      <p class="mb-5">讓假期更添歡樂，精選小琉球水上、陸地以及夜間活動</p>
	      <button class="btn bg-teal-400 border-teal-400 hover:bg-teal-600 hover:border-teal-600">
	      	<a href="/bbq">立即加購</a>
	  	  </button>
	    </div>
	  </div>
	</div>
	<!-- 特色介紹 -->
	<div class="max-w-5xl mx-auto px-10">
		<h2 class="text-2xl font-bold text-center pt-20">VILLA</h2>
		<p class="text-sm font-thin text-center pb-6 md:pb-20">Villa</p>
		<div class="grid lg:grid-cols-3 gap-20 justify-center items-start">
			<div class="flex flex-col">
				<img class="mask mask-squircle mx-auto" src="/bg-5.jpeg" width="360px" />
				<h5 class="py-6 text-center font-bold text-2xl">樓中樓星光玻璃屋</h5>
				<p>【獨棟】挑高樓中樓玻璃屋，精巧舒適的雙人房空間。 白天可遠眺台灣海峽的蔚藍，夜晚可欣賞繁星點點的浪漫</p>
			</div>
			<div class="flex flex-col">
				<img class="mask mask-squircle mx-auto" src="/bg-5.jpeg" width="360px" />
				<h5 class="py-6 text-center font-bold text-2xl">海景戲水池</h5>
				<p>小琉球湛藍天空，夢幻彩虹獨角獸。 戲水拍照零死角，悠閒拍照 渡假好 CHILL</p>
			</div>
			<div class="flex flex-col">
				<img class="mask mask-squircle mx-auto" src="/bg-5.jpeg" width="360px" />
				<h5 class="py-6 text-center font-bold text-2xl">露天電影&BBQ</h5>
				<p>結束白天的行程，開啟晚上的活動吧！民宿備有瓦斯烤肉爐，一起來場自在的 BBQ。烤肉之餘也能在戶外悠閒聊天，看電影。</p>
			</div>
		</div>
	</div>
	<!--  -->
	<div class="py-20">
		<kinesis-container class="flex flex-col justify-center items-center h-screen w-full">
				<div
				class="absolute bg-cover bg-center z-10 w-[110%] h-screen"
				style="background-image: url(/bg-n1.jpg);"
				>
				</div>
              <kinesis-element 
              :strength="20" 
              class="absolute z-20">
                <p class="text-white font-bold text-[32px]">Villa</p>
              </kinesis-element>
        </kinesis-container>
	</div>
	<!-- 主題民宿 -->
	<div class="container m-auto px-6 py-20 md:px-12 lg:px-20">
        <div class="m-auto text-center lg:w-8/12 xl:w-7/12">
            <h2 class="text-2xl text-gray-900 font-bold">主題民宿</h2>
            <p class="text-sm font-thin text-center pb-6 md:pb-20">Villa</p>
        </div>
        <div class="md:mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12 px-4">
            <div class="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
                <div aria-hidden="true" class="absolute top-0 w-full h-full rounded-2xl bg-white shadow"></div>
                <div class="relative p-6 space-y-6 lg:p-8">
                    <h3 class="text-3xl text-gray-700 font-semibold text-center">主題名宿</h3>
                    <div>
                        <div class="relative flex justify-around">
                            <div class="flex items-end">
                                <h1 class="font-bold text-xl underline decoration-teal-400 decoration-4">VILLA</h1>
                            </div>
                        </div>
                    </div>
                    <p class="text-sm">６座白色獨棟 雙人玻璃屋 挑高樓中樓設計 提供渡假就該有的精巧空間感 玻璃光感 結合小琉琉 自然美景 在白天 可儘情眺望台灣海峽及台灣本島之美 在無光害的夜晚 邀您仰望滿天星斗 戶外設施：戲水池、MINI營火區、投影休閒區、戶外沖洗區、共用廚房、瓦斯烤肉</p>

                    <div class="flex flex-row space-x-2 justify-center">
                    	<button type="submit" title="Submit" class="btn border-teal-400 hover:bg-teal-500 hover:border-teal-500 py-3 px-6 text-center rounded-xl bg-teal-400">
	                        <span class="text-white font-semibold">
	                            <a href="/room">詳細介紹</a>
	                        </span>
	                    </button>
	                    <button type="submit" title="Submit" class="btn border-teal-400 hover:bg-teal-500 hover:border-teal-500  py-3 px-6 text-center rounded-xl bg-teal-400">
	                        <span class="text-white font-semibold">
	                            <a href="/room">立即訂房</a>
	                        </span>
	                    </button>
                    </div>
                </div>
            </div>

            <div class="relative group md:w-6/12 lg:w-10/12">
                <div aria-hidden="true" class="absolute top-0 w-full h-full rounded-2xl bg-white shadow"></div>
                <div class="relative p-6 pt-10 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-16 lg:p-12 ">
                    <img src="/bg-n1.jpg">
                </div>
            </div>
        </div>
    </div>
	<!-- 最新消息 -->

	<div class="max-w-5xl mx-auto my-20">
		<Loading :active="isLoading"></Loading>
		<h2 class="text-2xl font-bold text-center">最新消息</h2>
		<p class="text-sm font-thin text-center pb-6 md:pb-20">News</p>
		<div class="grid grid-cols-2 gap-4 px-10">
			<div 
			v-for="(item, i) in data.newsdata.slice(0,4)"
			:key="item.title">
			<router-link :to="`/news/${item.id}`">
				<div 
				class="rounded-lg shadow bg-white p-10 flex flex-col justify-start relative transition-all hover:-translate-y-2 overflow-hidden relative">
					<span class="text-red-600 font-bold">News</span>
					<h5 class="text-xl font-bold">{{ item.title }}</h5>
					<p class="text-sm">{{ item.id }}</p>
					<hr class="my-4 border-4 border-gray-100">
					<p class="text-sm line-clamp-2 break-all">{{ item.body }}</p>
					<div class="absolute -top-6 right-6">
						<div class="w-[64px] h-[64px] rounded-full bg-teal-400">
						</div>
					</div>
				</div>
			</router-link>
			</div>
		</div>
		<div class="flex justify-center items-center py-10">
			<div class="btn bg-teal-400 border-teal-400 hover:bg-teal-600 hover:border-teal-600">
				<a href="/news">更多消息</a>
			</div>
		</div>
	</div>
	<!-- 輪播圖片 -->
	<div class="text-white text-xl mt-12 font-bold">
		<div class="flex w-max animate-move-left" style="animation-play-state:running">
			<div class="w-[360px] h-[360px] bg-cover" style="background-image: url('bg-n1.jpg');">
			</div>
			<div class="w-[360px] h-[360px] bg-cover" style="background-image: url('bg-n1.jpg');">
			</div>
			<div class="w-[360px] h-[360px] bg-cover" style="background-image: url('bg-n1.jpg');">
			</div>
			<div class="w-[360px] h-[360px] bg-cover" style="background-image: url('bg-n1.jpg');">
			</div>
			<div class="w-[360px] h-[360px] bg-cover" style="background-image: url('bg-n1.jpg');">
			</div>
			<div class="w-[360px] h-[360px] bg-cover" style="background-image: url('bg-n1.jpg');">
			</div>
			<div class="w-[360px] h-[360px] bg-cover" style="background-image: url('bg-n1.jpg');">
			</div>
			<div class="w-[360px] h-[360px] bg-cover" style="background-image: url('bg-n1.jpg');">
			</div>
			<div class="w-[360px] h-[360px] bg-cover" style="background-image: url('bg-n1.jpg');">
			</div>
			<div class="w-[360px] h-[360px] bg-cover" style="background-image: url('bg-n1.jpg');">
			</div>
			<div class="w-[360px] h-[360px] bg-cover" style="background-image: url('bg-n1.jpg');">
			</div>
			<div class="w-[360px] h-[360px] bg-cover" style="background-image: url('bg-n1.jpg');">
			</div>
			<div class="w-[360px] h-[360px] bg-cover" style="background-image: url('bg-n1.jpg');">
			</div>
			<div class="w-[360px] h-[360px] bg-cover" style="background-image: url('bg-n1.jpg');">
			</div>
		</div>
	</div>
	<!-- 頁尾 -->
	<Footer />

</div>

</div>


</template>
