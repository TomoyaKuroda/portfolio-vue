<template>
<div id="canada">
<div class="contents-wrap">
	<div class="contents-img">
		<img src="../assets/barrie.jpg" alt="">
	</div>
	<div class="contents-text">
		<h2>Full of nature - Barrie</h2>
		<p>People who live here are very kind.
			We can see many animals(e.g., squirrel).
		</p>
	</div>
</div>

<div class="contents-wrap">
	<div class="contents-img">
		<img src="../assets/niagara_falls.jpg" alt="">
	</div>
	<div class="contents-text">
		<h2>Beautiful Falls</h2>
		<p>
			I went to Niagara Falls with my friend in Fall 2017.

        </p>
	</div>
</div>



</div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
    export default{
        name:"canada"
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