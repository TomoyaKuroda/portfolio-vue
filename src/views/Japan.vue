<template>
<div id="japan">
<div class="contents-wrap">
	<div class="contents-img">
		<img src="../assets/fuji.jpg" alt="">
	</div>
	<div class="contents-text">
		<h2>The highest mountain in Japan</h2>
		<p>When I was a high school student, I joined a mountaineering club.
            I love this activity because I can take such a beautiful picture.
            
        </p>
	</div>
</div>

<div class="contents-wrap">
	<div class="contents-img">
		<img src="../assets/cloud.jpg" alt="">
	</div>
	<div class="contents-text">
		<h2>Beautiful cloud</h2>
		<p>I like this picture the best.
			I felt the power of nature.
		</p>
	</div>
</div>

</div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
    export default{
        name:"japan"
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