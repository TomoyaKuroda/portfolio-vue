<template>
<div id="top">
    <h2>Welcome to my portfolio website</h2>
    <div class="contents-wrap">
	<div class="contents-box">
		<img src="../assets/fuji.jpg" alt="flexbox">
		<h2><router-link :to="{name:'about-me'}">About Me</router-link></h2>
		<p>I grew up in Japan. I used to climb many mountains and take beautiful pictures.


</p>
	</div>

	<div class="contents-box">
		<img src="../assets/programming.jpg" alt="flexbox">
		<h2><router-link :to="{name:'programming-skills'}">Programming Skills</router-link></h2>
		<p>I am currently enrolled at Georgian College and studying programming. You can see some projects which I have developed so far.</p>
	</div>

	<div class="contents-box">
		<img src="../assets/contact.jpg" alt="flexbox">
		<h2><router-link :to="{name:'contact'}">Contact</router-link></h2>
		<p>Please feel free to contact me!</p>
	</div>
</div>
</div></template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
    export default{
        name:"top"
    };
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
*{
    font-family: 'Roboto Condensed', sans-serif;
}
h2{
    text-align:center;
    padding-bottom:1rem;
}
.contents-wrap {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}

.contents-box {
	margin-bottom: 3rem;
	padding: 3rem;
	width: 32%;
	background-color: #f0f0f0;
}

.contents-box img {
	display: block;
	margin-bottom: 3rem;
	width: 100%;
	height: auto;
}

.contents-box h2 {
	margin-bottom: 2rem;
	font-size: 2.2rem;
	text-align: center;
}

@media screen and (max-width: 768px){
	.contents-wrap {
		flex-direction: column;
	}

	.contents-box {
		width: 100%;
	}
}
</style>