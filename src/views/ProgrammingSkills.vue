<template>
<div id="programming-skills">
<div class="contents-wrap">
	<div class="contents-img">
<img src="../assets/java.gif" alt="">
	</div>
	<div class="contents-text">
		<h2>Java</h2>
		<p>I can create classes and methods. Also I'm able to work with JavaFX objects.
		</p>
	</div>
</div>

<div class="contents-wrap">
	<div class="contents-img">
		<img src="../assets/asp.jpg" alt="">
	</div>
	<div class="contents-text">
		<h2>ASP.NET</h2>
		<p>
			I developed a website using ASP.NET. <a href="https://tomoya-a1sss.azurewebsites.net/">Here</a> is the live link.
        </p>
	</div>
</div>



</div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
    export default{
        name:"programming-skills"
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