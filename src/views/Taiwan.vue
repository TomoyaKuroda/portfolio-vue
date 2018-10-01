<template>
<div id="taiwan">
<div class="contents-wrap">
	<div class="contents-img">
		<img src="../assets/night.jpg" alt="">
	</div>
	<div class="contents-text">
		<h2>Shilin Night Market</h2>
		<p>Shilin Night Market is a famous tourist spot in Taiwan.
			 You can eat food at a budget restaurant and buy souvenirs.
        </p>
	</div>
</div>

<div class="contents-wrap">
	<div class="contents-img">
		<img src="../assets/101.jpg" alt="">
	</div>
	<div class="contents-text">
		<h2>Beautiful scenery</h2>
		<p>I took this picture at Taipei 101.</p>
	</div>
</div>



</div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
    export default{
        name:"taiwan"
    };
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Ubuntu');
*{
    font-family: 'Ubuntu', sans-serif;
}
.contents-wrap {
	display: flex;
	justify-content: space-between;
	margin-bottom: 7rem;
}
.contents-wrap:nth-child(odd) {
	flex-direction: row-reverse;
}

.contents-text {
	width: 60%; /*flex: 2;*/
}
.contents-img {
	width: 35%; /*flex: 1;*/
}

.contents-text h2 {
	margin-bottom: 2rem;
	font-size: 2.2rem;
}

.contents-img img {
	display: block;
	width: 100%;
	height: auto;
}

@media screen and (max-width: 768px){
	.contents-wrap,
	.contents-wrap:nth-child(odd)  {
		flex-direction: column;
	}

	.contents-text,
	.contents-img {
		width: 100%; /*flex: 1;*/
	}

	.contents-text {
		padding: 3rem;
	}

	.contents-text h2 {
		text-align: center;
	}
}
</style>