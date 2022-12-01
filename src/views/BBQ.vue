<script>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';

export default {
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
  <div class="hero-content flex-col lg:flex-row-reverse px-10 pt-18 md:pt-0">
  	<div class="lg:w-1/2 flex justify-center items-center max-w-[320px] md:max-w-[420px]">
  		<img src="/bg-4.jpeg" class="mask mask-squircle shadow-2xl float" />
  	</div>
  	<div class="lg:w-1/2 pt-2 lg:pt-0">
      <h1 class="text-3xl md:text-5xl font-bold text-gray-900">加購行程，添增歡樂</h1>

      <p class="text-sm md:text-xl py-6 text-gray-600">騎著車吹著海風環島 是一種快活，乘著海 暢玩水上、水下活動，探尋著海龜 是一種自由自在</p>
      <div class="btn bg-teal-400 border-teal-400 hover:bg-teal-600 hover:border-teal-600">
      	<a href="/">立即訂房</a>
      </div>
    </div>
  </div>

  <!-- 泡泡 -->
    <div class="bubbles opacity-40">
      <img v-for="n in 7" src="/bubble.svg">
    </div>
</div>
<!-- 加購行程 -->
<div class="sticky top-0 bg-gray-100 overflow-x-hidden">

	<div class="hero min-h-screen" style="background-image: url('bg-n1.jpg');">
	  <div class="hero-overlay bg-opacity-50"></div>
	  <div class="hero-content text-center text-neutral-content">
	    <div class="max-w-md">
	      <h1 class="mb-5 text-5xl font-bold">加購行程</h1>
	      <p class="mb-5">讓此次假期更添歡樂</p>
	    </div>
	  </div>
	</div>
	<!-- 特色介紹 -->
	<div class="max-w-5xl mx-auto px-10">
			<h2 class="text-2xl font-bold text-center pt-20">水上活動</h2>
			<p class="text-sm font-thin text-center pb-10">加購行程</p>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
				<div class="bg-gray-200 rounded p-10">
					<h5 class="text-3xl py-2 font-bold">浮潛</h5>
					<p>活動時間約 90分鐘</p>
					<p>$ 400/人</p>
				</div>
				<div class="bg-gray-200 rounded p-10">
					<h5 class="text-3xl py-2 font-bold">體驗深潛</h5>
					<p>活動時間約 120分鐘</p>
					<p>$ 2500/人</p>
				</div>
				<div class="bg-gray-200 rounded p-10">
					<h5 class="text-3xl py-2 font-bold">體驗自由潛水</h5>
					<p>活動時間約 120分鐘</p>
					<p>$ 2500/人</p>
				</div>
				<div class="bg-gray-200 rounded p-10">
					<h5 class="text-3xl py-2 font-bold">SUP</h5>
					<p>活動時間約 60分鐘</p>
					<p>1人1板　$1200/人</p>
					<p>2人1板　$1800/ 2人</p>
					<p>透明 1人1板$1500/人</p>
				</div>
				<div class="bg-gray-200 rounded p-10">
					<h5 class="text-3xl py-2 font-bold">獨木舟</h5>
					<p>活動時間約 90分鐘</p>
					<p>1人1板　$800/人</p>
					<p>2人1舟 ＄1200/ 2人</p>
					<p>透明 2人1舟 ＄1600/ 2人</p>
				</div>
				<div class="bg-gray-300 rounded p-10 flex justify-center items-center">
					<h5 class="text-3xl py-2 font-bold">加購行程</h5>
				</div>
			</div>

			<h2 class="text-2xl font-bold text-center pt-20">探索拉美 - 半潛艇</h2>
			<p class="text-sm font-thin text-center pb-10">加購行程</p>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
				<div class="bg-gray-200 rounded p-10">
					<h5 class="text-3xl py-2 font-bold">探索海洋</h5>
					<p>活動時間約 40分鐘</p>
					<p>全票 $380</p>
					<p>半票 $250</p>
					<p>保票 $60</p>
				</div>
				<div class="bg-gray-200 rounded p-10">
					<h5 class="text-3xl py-2 font-bold">知性巡航</h5>
					<p>活動時間約 60分鐘</p>
					<p>全票 $600</p>
					<p>半票 $500</p>
					<p>保票 $120</p>
				</div>
				<div class="bg-gray-200 rounded p-10">
					<h5 class="text-3xl py-2 font-bold">夕陽巡禮</h5>
					<p>活動時間約 60分鐘</p>
					<p>全票 $600</p>
					<p>半票 $500</p>
					<p>保票 $120</p>
				</div>
			</div>
			<div class="px-4 py-2">
				<p>※ 全票定義：12歲（含）以上</p>
				<p>※ 半票定義：3（含）～12歲／持殘障手冊及陪同票／65歲（含）以上</p>
				<p>※ 保票定義：3歲以下</p>
			</div>

			<h2 class="text-2xl font-bold text-center pt-20">導覽行程</h2>
			<p class="text-sm font-thin text-center pb-10">加購行程</p>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
				<div class="bg-gray-200 rounded p-10">
					<h5 class="text-3xl py-2 font-bold">潮間帶</h5>
					<p>活動時間約 60分鐘</p>
					<p>$100/人</p>
				</div>
				<div class="bg-gray-200 rounded p-10">
					<h5 class="text-3xl py-2 font-bold">夜間導覽</h5>
					<p>活動時間約 60分鐘</p>
					<p>$100/人</p>
				</div>
			</div>

			<h2 class="text-2xl font-bold text-center pt-20">代訂 BBQ套餐</h2>
			<p class="text-sm font-thin text-center pb-10">加購行程</p>
			<div class="grid grid-cols-1 gap-4 px-4">
				<div class="bg-gray-200 rounded p-10">
					<h5 class="text-3xl py-2 font-bold">BBQ 套餐組</h5>
					<p>一天行程後，不想外出用餐！<br>
					灣琉可為您代訂ＢＢＱ食材套餐，
					在民宿裡看電影 . 聊天．夯肉，
					食材由船運至小琉球，無法退換。</p><br>
					<p class="text-red-600"># 需入住一週前預訂，並付清食材全額款項</p>
				</div>
			</div>
			<div class="max-w-5xl mx-auto py-6 px-4">
				<div class="flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0">
					<img src="/menu.webp" class="md:w-1/2">
					<img src="/menu.webp" class="md:w-1/2">
				</div>
			</div>
	</div>

	<!-- 輪播文字 -->
	<div class="bg-teal-400 text-white text-xl py-4 font-bold mt-20">
		<div class="flex w-max animate-move-left" style="animation-play-state:running;">
			<div class="w-fit px-6">最夯海景主題民宿
			</div>
			<div class="w-fit px-6">最夯海景主題民宿
			</div>
			<div class="w-fit px-6">最夯海景主題民宿
			</div>
			<div class="w-fit px-6">最夯海景主題民宿
			</div>
			<div class="w-fit px-6">最夯海景主題民宿
			</div>
			<div class="w-fit px-6">最夯海景主題民宿
			</div>
			<div class="w-fit px-6">最夯海景主題民宿
			</div>
			<div class="w-fit px-6">最夯海景主題民宿
			</div>
			<div class="w-fit px-6">最夯海景主題民宿
			</div>
			<div class="w-fit px-6">最夯海景主題民宿
			</div>
			<div class="w-fit px-6">最夯海景主題民宿
			</div>
			<div class="w-fit px-6">最夯海景主題民宿
			</div>
		</div>
	</div>

	<!-- 套裝行程 -->
	<div class="flex flex-col items-center justify-center min-h-screen p-10 text-gray-700 bg-gray-100 md:p-20">
		<h2 class="text-2xl font-bold text-center pb-6 md:pb-20">套裝行程</h2>

		<div class="max-w-5xl mx-auto flex flex-col lg:flex-row justify-center items-center w-full space-y-4 lg:space-x-4 lg:space-y-0">
			<div class="bg-white rounded-lg shadow w-full lg:w-1/3 p-6">
				<h5 class="font-bold text-[21px]">兩人套裝</h5>

				<hr class="my-4">

				<ul class="space-y-0">
					<li class="font-semibold border-t border-l border-r py-2 px-4 rounded-[0px] flex flex-row justify-between">
						淡季平日 NT 2,100
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
						  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
						</svg>
					</li>
					<li class="font-semibold border-t border-l border-r py-2 px-4 rounded-[0px] flex flex-row justify-between">
						淡季假日 NT 2,100
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
						  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
						</svg>
					</li>
					<li class="font-semibold border-t border-l border-r py-2 px-4 rounded-[0px] flex flex-row justify-between">
						旺日平日 NT 2,100
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
						  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
						</svg>
					</li>
					<li class="font-semibold border-t border-l border-r py-2 px-4 rounded-[0px] flex flex-row justify-between">
						旺日假日 NT 2,100
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
						  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
						</svg>
					</li>
					<li class="font-semibold border-b border-t border-l border-r py-2 px-4 rounded-[0px] flex flex-row justify-between">
						連續假日 NT 2,100
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
						  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
						</svg>
					</li>
				</ul>

				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 my-4 mx-auto">
				  <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v14m7-7H5" />
				</svg>


				<ul class="flex flex-row border w-full">
					<li class="flex flex-row font-semibold p-2 text-[12px] w-1/3 justify-center items-center">
						3人入住<br>1棟雙人房
					</li>
					<li class="flex flex-row font-semibold border-r border-l p-2 text-[12px] w-1/3 justify-center items-center">
						東港-小琉球<br>來回船票4份
					</li>
					<li class="flex flex-row font-semibold p-2 text-[12px] w-1/3 justify-center items-center">
						2台機車<br>租24hr
					</li>
				</ul>

				<button class="w-full my-4 bg-teal-400 font-bold p-4 rounded text-white btn border-teal-400">
					立即訂房
				</button>
			</div>
			<div class="bg-white rounded-lg shadow w-full lg:w-1/3 p-6">
				<h5 class="font-bold text-[21px]">三人套裝</h5>

				<hr class="my-4">

				<ul class="space-y-0">
					<li class="font-semibold border-t border-l border-r py-2 px-4 rounded-[0px] flex flex-row justify-between">
						淡季平日 NT 2,100
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
						  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
						</svg>
					</li>
					<li class="font-semibold border-t border-l border-r py-2 px-4 rounded-[0px] flex flex-row justify-between">
						淡季假日 NT 2,100
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
						  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
						</svg>
					</li>
					<li class="font-semibold border-t border-l border-r py-2 px-4 rounded-[0px] flex flex-row justify-between">
						旺日平日 NT 2,100
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
						  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
						</svg>
					</li>
					<li class="font-semibold border-t border-l border-r py-2 px-4 rounded-[0px] flex flex-row justify-between">
						旺日假日 NT 2,100
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
						  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
						</svg>
					</li>
					<li class="font-semibold border-b border-t border-l border-r py-2 px-4 rounded-[0px] flex flex-row justify-between">
						連續假日 NT 2,100
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
						  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
						</svg>
					</li>
				</ul>

				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 my-4 mx-auto">
				  <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v14m7-7H5" />
				</svg>


				<ul class="flex flex-row border w-full">
					<li class="flex flex-row font-semibold p-2 text-[12px] w-1/3 justify-center items-center">
						3人入住<br>1棟雙人房
					</li>
					<li class="flex flex-row font-semibold border-r border-l p-2 text-[12px] w-1/3 justify-center items-center">
						東港-小琉球<br>來回船票4份
					</li>
					<li class="flex flex-row font-semibold p-2 text-[12px] w-1/3 justify-center items-center">
						2台機車<br>租24hr
					</li>
				</ul>

				<button class="w-full my-4 bg-teal-400 font-bold p-4 rounded text-white btn border-teal-400">
					立即訂房
				</button>
			</div>
			<div class="bg-white rounded-lg shadow w-full lg:w-1/3 p-6">
				<h5 class="font-bold text-[21px]">五人套裝</h5>

				<hr class="my-4">

				<ul class="space-y-0">
					<li class="font-semibold border-t border-l border-r py-2 px-4 rounded-[0px] flex flex-row justify-between">
						淡季平日 NT 2,100
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
						  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
						</svg>
					</li>
					<li class="font-semibold border-t border-l border-r py-2 px-4 rounded-[0px] flex flex-row justify-between">
						淡季假日 NT 2,100
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
						  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
						</svg>
					</li>
					<li class="font-semibold border-t border-l border-r py-2 px-4 rounded-[0px] flex flex-row justify-between">
						旺日平日 NT 2,100
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
						  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
						</svg>
					</li>
					<li class="font-semibold border-t border-l border-r py-2 px-4 rounded-[0px] flex flex-row justify-between">
						旺日假日 NT 2,100
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
						  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
						</svg>
					</li>
					<li class="font-semibold border-b border-t border-l border-r py-2 px-4 rounded-[0px] flex flex-row justify-between">
						連續假日 NT 2,100
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
						  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
						</svg>
					</li>
				</ul>

				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 my-4 mx-auto">
				  <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v14m7-7H5" />
				</svg>


				<ul class="flex flex-row border w-full">
					<li class="flex flex-row font-semibold p-2 text-[12px] w-1/3 justify-center items-center">
						3人入住<br>1棟雙人房
					</li>
					<li class="flex flex-row font-semibold border-r border-l p-2 text-[12px] w-1/3 justify-center items-center">
						東港-小琉球<br>來回船票4份
					</li>
					<li class="flex flex-row font-semibold p-2 text-[12px] w-1/3 justify-center items-center">
						2台機車<br>租24hr
					</li>
				</ul>

				<button class="w-full my-4 bg-teal-400 font-bold p-4 rounded text-white btn border-teal-400">
					立即訂房
				</button>
			</div>
		</div>

	</div>

	<div class="max-w-5xl mx-auto px-10 pb-20">
		<ul class="font-semibold text-gray-900 text-sm space-y-2">
			<li>淡季 : 11月至隔年3月</li>
			<li>旺季 : 4月至10月</li>
			<li>平日 : 週日至週四</li>
			<li>假日 : 週五、週六及國定假日</li>
			<li>跨年、春節、三大節等連續假日，房價依連續假日計算</li>
			<li>以上套裝價格適用至2022年底</li>
			<li>套裝方案未投保旅遊平安險，如需要，請自行投保。</li>
			<li>本民宿保有分配房間（型）權利，無法指定房間；若有任何房（間）型需求，訂房人員儘量為您安排。</li>
			<li>環島機車含油資，租借以24HR為基本計算單位。騎乘機車者請攜帶駕照。</li>
		</ul>
	</div>

	<!-- 頁尾 -->
	<Footer />

</div>

</div>


</template>
