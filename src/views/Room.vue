<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

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
  <div class="hero-content flex-col lg:flex-row-reverse px-10">
  	<div class="lg:w-1/2 flex justify-center items-center max-w-[320px] md:max-w-[620px]">
  		<img src="/bg-n1.jpg" class="mask mask-squircle shadow-2xl float" />
  	</div>
  	<div class="lg:w-1/2 pt-6 lg:pt-0">
      <h1 class="text-3xl md:text-5xl font-bold text-gray-900">海景主題民宿</h1>

      <p class="text-sm md:text-xl py-6 text-gray-600">白色獨棟、雙人玻璃屋、挑高樓中樓設計</p>
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
	      <h1 class="mb-5 text-5xl font-bold">極致享受</h1>
	      <p class="mb-5">提供渡假就該有的精巧空間感</p>
	    </div>
	  </div>
	</div>
	<!-- 特色介紹 -->
	<div class="max-w-5xl mx-auto px-10">
		<h2 class="text-2xl font-bold text-center pt-20">VILLA</h2>
		<p class="text-sm font-thin text-center pb-20">Villa</p>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
			<div class="bg-gray-200 rounded p-10">
				<h5 class="text-3xl py-2 font-bold">戶外設施</h5>
				<p class="text-sm">戲水池、MINI營火區、投影休閒區、戶外沖洗區、共用廚房、瓦斯烤肉爐 (1爐租借$500/晚)</p>
			</div>
			<div class="bg-gray-200 rounded p-10">
				<h5 class="text-3xl py-2 font-bold">代訂服務</h5>
				<p class="text-sm">東港-小琉球來回船票、機車、BBQ烤肉套餐、浮潛、深潛、自由潛水、SUP立槳、獨木舟、<br>探索拉美各項活動、合家麻花捲、龜龜燒烤訂位</p>
			</div>
			<div class="bg-gray-200 rounded p-10">
				<h5 class="text-3xl py-2 font-bold">週遭景點</h5>
				<p class="text-sm">花瓶岩、美人洞、落日亭、烏鬼洞、山豬溝生態步道、肚仔坪、碧雲寺、小琉球海洋館、拉美FUN+園區</p>
			</div>
		</div>

		<div class="overflow-x-auto py-12">
		  <table class="table w-full">
		    <thead>
		      <tr>
		        <th>房型</th>
		        <th>淡季平日</th>
		        <th>淡季假日</th>
		        <th>旺季平日</th>
		        <th>旺季假日</th>
		        <th>連續假日</th>
		      </tr>
		    </thead>
		    <tbody>
		      <tr>
		        <th>價格</th>
		        <td>3000</td>
		        <td>4000</td>
		        <td>4000</td>
		        <td>5000</td>
		        <td>6000</td>
		      </tr>
		    </tbody>
		  </table>
		  <p class="text-[10px] text-center py-4 text-red-600 font-bold">#以上房價 不包含 船票 及 機車</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
			<div class="bg-gray-200 rounded p-10">
				<h5 class="text-3xl py-2 font-bold">額外事項</h5>
				<p class="text-sm">每棟雙人房含2份早餐</p>
				<p class="text-sm">每棟可再加2人(計價方式如下)</p>
				<p class="text-sm">第3人開始加收加人費用，<br>1棟最多入住4人(大人/小孩)。</p>
			</div>
			<div class="bg-gray-200 rounded p-10">
				<h5 class="text-3xl py-2 font-bold">多人事項</h5>
				<p class="text-sm">加人(每晚)費用：平日：600(人)　/　假日：800(人)</p>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-4 px-4 py-4">
			<div class="bg-gray-200 rounded p-10">
				<h5 class="text-3xl py-2 font-bold">特殊日期</h5>
				<p class="text-sm">淡季 : 11月至隔年3月</p>
				<p class="text-sm">旺季 : 4月至10月</p>
				<p class="text-sm">平日 : 週日至週四</p>
				<p class="text-sm">假日 : 週五、週六及國定假日</p>
				<p class="text-sm">跨年、春節、三大節、迎王祭等連續假日，房價依連續假日計算</p>
				<p class="text-sm">房價表適用至2022年底</p>
			</div>
		</div>

		<div class="space-y-6 flex flex-col justify-center">

			<div class="flex justify-center items-center pt-12">
				<img src="/qrcode.png" width="240px">
			</div>

			<a href="/">
				<div class="flex flex-row justify-center items-center btn border-teal-400 hover:bg-teal-500 hover:border-teal-500 bg-teal-400 w-[240px] rounded py-2 font-semibold text-white mx-auto">
				訂房專線
				</div>
			</a>

			<div>
				<h2 class="font-bold py-4">訂房須知：</h2>
				<ul class="font-semibold text-gray-900 text-sm space-y-2">
					<li>VILLA為維護每位旅客住宿品質，請愛護旅店設施，如有任何訂房疑問，請詢問線上客服人員。</li>
					<li>本民宿依照交通部觀光局交路字第0990000402號函發布下列規定辦理之。 旅客解約時，得要求依下列標準返還已繳之訂金：</li>
					<li>1. 旅客於預定住宿日14日前(不含住宿當天)取消者，得請求退還已付訂金100%。</li>
					<li>2. 旅客於預定住宿日10至13日前(不含住宿當天)取消者，得請求退還已付訂金70%。</li>
					<li>3. 旅客於預定住宿日7至9日前(不含住宿當天)取消者，得請求退還已付訂金50%。</li>
					<li>4. 旅客於預定住宿日4至6日前(不含住宿當天)取消者，得請求退還已付訂金40%。</li>
					<li>5. 旅客於預定住宿日2至3日前(不含住宿當天)取消者，得請求退還已付訂金30%。</li>
					<li>6. 旅客於預定住宿日1日前(不含住宿當天)取消者，得請求退還已付訂金20%。</li>
					<li>7. 旅客於預定住宿日當日取消或怠於通知者， 得不退還已付全部訂金。</li>
					<li class="text-red-600"># 退款須知：行政轉帳手續費用須由顧客支付，手續費$100</li><br>
					<li>住宿當日若要求退房者一律不退訂金，VILLA室內禁煙，貴賓如有需要請移駕陽台或戶外，感謝您的配合。</li>
					<li>VILLA Check-in 時我們會請貴賓出示身分證明文件以方便做住宿登記，煩請貴賓攜帶身分證明文件。</li>
					<li>VILLA 嚴禁毒品。</li><br>
					<li>入住當天逢發布陸上颱風警報（陸上警戒區需包含屏東縣）或屏東縣宣布停止上班上課時，可全額扣除手續費後退回訂金（以中央氣象局頒布狀況為準則）。 颱風警報發佈外的正常氣候情況降雨，民宿不接受氣候因素退訂．訂房前請先詳讀訂房規則後再進行訂房動作。</li>
					<li class="text-red-600"># 預訂改延期則訂金保留為１內年使用(延期限1次，延期後無法改為取消退款）</li>
				</ul>
			</div>

			<h2 class="text-2xl font-bold text-center pt-20">代訂船票</h2>

			<div>
				<div class="pt-4 pb-12">
					<img src="/ticket.jpeg" class="rounded-lg">
				</div>

				<div class="border rounded-lg bg-white p-10 mb-12">
					<h2 class="card-title py-6 underline decoration-teal-400 decoration-4 flex flex-row justify-start items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					  <path stroke-linecap="round" stroke-linejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
					</svg>藍白航運</h2>
					<p class="text-2xl font-bold py-2">東港 - 小琉球來回船票</p>
					<p class="text-sm">全票$410：12歲以上未滿65歲</p>
					<p class="text-sm">半票$210：3歲～未滿12歲以下孩童、65歲以上敬老半票、持有身心障礙手冊</p>
					<p class="text-sm pt-2"># 持身心障礙手冊，陪同人享有陪同半票。</p>
					<p class="text-sm"># 3歲以下之幼童請於現場購買保險票。</p>
					<div class="flex items-center justify-center py-6">
					  <button class="btn bg-teal-400 border-teal-400 hover:bg-teal-600 hover:border-teal-600">
					  	<a href="/">立即代訂</a>
					  </button>
					</div>
				</div>

			</div>


		</div>

	</div>

	<!-- 頁尾 -->
	<Footer />

</div>

</div>


</template>
