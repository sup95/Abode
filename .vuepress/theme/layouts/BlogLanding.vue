<template>
  <div class="super-container">
    <div class="sidebar">
      <span><a href="/"><img :src="require('../assets/SupriyaSrivatsa.jpg')" class="photoImg" title="Home"/></a></span>
      <span><a href="/blog/"><img :src="require('../assets/navigators/blog.png')" class="navImages" title="Blog"/></a></span>
      <span><a href="/milestones/"><img :src="require('../assets/navigators/flag.png')" class="navImages" title="Milestones"/></a></span>
      <span><a href="/art/"><img :src="require('../assets/navigators/poetry.png')" class="navImages" title="Art"/></a></span>
      <span><a href="/reachout/"><img :src="require('../assets/navigators/reachout.png')" class="navImages" title="Reach Out"/></a></span>
    </div>
    <div class="container">
      <Content/>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=PT+Sans');

.sidebar {
  display: inline-block;
  margin: 0;
  padding: 0;
  width: 100px;
  position: fixed;
  height: 100%;
  overflow: auto;
}

.sidebar a {
  display: inline-flex;
  justify-content: space-between;
  padding: 16px;
}

.navImages {
  height: 26px;
}

.photoImg {
  height: 50px;
  border-radius: 30%;
}

.container{
  font-family: 'PT Sans', sans-serif;
  text-align: justify;
  padding: 20px;
  max-width: 550px;
  width: 80%;
  margin: 20px auto;
  color: #353839;
}

@media screen and (max-width: 500px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {float:none; vertical-align: middle;}
  div.container {margin-left: 0;}
}

</style>