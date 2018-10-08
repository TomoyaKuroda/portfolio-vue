<template>
<div id="about-me">
<div class="contents-wrap">
	<div class="contents-img">
		<img src="../assets/me.jpg" alt="">
	</div>
	<div class="contents-text">
		<h2>Nice to meet you!</h2>
		<p>Hi, I'm Tomoya.
			After graduating from a university in Japan, I worked as a sales clerk to earn money and came to Canada to study programming. I live in Barrie and experience a lot of things.
		</p>
	</div>
</div>


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
<img src="../assets/barrie.jpg" alt="">
	</div>
	<div class="contents-text">
		<h2>Full of nature - Barrie</h2>
		<p>I live in Barrie where there is my college. Barrie is nice and full of nature. I also went to Toronto and Niagara.
            
        </p>
	</div>
</div>

</div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
    export default{
        name:"about-me"
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