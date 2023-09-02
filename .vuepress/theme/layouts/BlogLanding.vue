<template>
  <div class="super-container">
    <div class="sidebar">
      <a href="/"><img :src="require('../assets/SupriyaSrivatsa.jpg')" class="photoImg" title="Home"/></a>
      <a href="/blog/"><img :src="require('../assets/navigators/blog.png')" class="navImages" title="Blog"/></a></span>
      <a href="/bookshelf/"><img :src="require('../assets/navigators/reading.png')" class="navImages" title="Bookshelf"/></a></span>
      <a href="/talks/"><img :src="require('../assets/navigators/mic.png')" class="navImages" title="Talks"/></a></span>
      <a href="/reachout/"><img :src="require('../assets/navigators/reachout.png')" class="navImages" title="Reach Out"/></a></span>
    </div>
    <div class="container">

      <h1> Blog </h1>

      <br/>
      
            <div class="mm">
              <a style="text-decoration: none" href=" https://musingmosaic.substack.com?utm_source=navbar&utm_medium=web&r=23n7q">
              <img class="mmimg" src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffb6575fe-811a-4a11-86b3-b8d63fc676fe_836x836.png" alt="Musing Mosaic">
              <div class="mmtext">
                <p><a href=" https://musingmosaic.substack.com?utm_source=navbar&utm_medium=web&r=23n7q">Musing Mosaic </a></p>
                <p>Weaving together product, engineering and design musings </p>
              </div>
              </a>
            </div>
      

      <!--p>
        <ul v-for="page in $pagination.pages.sort((page1, page2) => page2.frontmatter.date - page1.frontmatter.date)">
            <p class="header">
            <span class="date">{{ page.frontmatter.date }}</span><br/>
            <router-link class="blogLink" :to="page.path">{{ page.title }}</router-link>
          </p>
        </ul>
      </p-->

    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=PT+Sans');

.sidebar {
  margin: 0;
  padding: 0px;
  width: auto;
  position: fixed;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.sidebar a {
  padding: 10px;
  margin: 20px 8px;
}

.navImages-active {
  height: 36px;
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
  max-width: 650px;
  width: 80%;
  margin: 0px auto;
  color: #353839;
}

.header {
  text-align: left;
  font-size: 18px;
  font-weight: bold;
}
.date {
  font-weight: lighter;
  font-size: 12px;
  color: #a0a0a0;
  text-transform: uppercase;
}

ul { 
  list-style:none; 
  padding-left:0; 
} 

.mm {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 15px;
  height: 100px;
}

.mmimg {
  height: 100px;
  width: 100px;
  float: left;
}

.mmtext {
  margin: 20px;
  padding-left: 100px;
}

@media screen and (max-width: 500px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .sidebar a {align-content: center;}
  .mm {
    height: 180px;
  }
}

</style>
