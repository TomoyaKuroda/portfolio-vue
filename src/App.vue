<template>
<div id="app">
  <div class="container">
<header class="header">
	<h1>
    <router-link :to="{name:'top'}"><img src="./assets/top.png" alt="top"></router-link>
    </h1>
	<nav>
		<ul>
      <li class="square_btn"><router-link :to="{name:'japan'}">Japan</router-link></li>
      <li class="square_btn"><router-link :to="{name:'canada'}">Canada</router-link></li>
      <li class="square_btn"><router-link :to="{name:'taiwan'}">Taiwan</router-link></li>
		</ul>
	</nav>
</header>
  <router-view></router-view>
  </div>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
  export default{
    name:"app"
  };
</script>
<style lang="scss" scoped>
img {
width:100%;
max-width: 100%;
height: auto;
}
.header {
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

.header h1 {
	margin-right: auto;
}

.header ul {
	display: flex;
}

.header li {
	margin-left: 3rem;
}

@media screen and (max-width: 768px){
	.header {
		flex-direction: column;
	}

	.header h1 {
		margin: 0 auto 3rem;
	}

	.header li {
		margin: 0 1rem;
	}
}

@media screen and (max-width: 568px){
	.header li {
		margin: 0 .5rem;
		font-size: 1.2rem;
	}
}

  .square_btn{
    display: inline-block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #f7f7f7;
    border-left: solid 6px #ff7c5c;/*左線*/
    color: #ff7c5c;/*文字色*/
    font-weight: bold;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
}
  .square_btn:active {
      box-shadow: inset 0 0 2px rgba(128, 128, 128, 0.1);
      transform: translateY(2px);
  }

</style>