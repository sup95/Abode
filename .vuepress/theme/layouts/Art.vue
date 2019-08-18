<template>
  <div class="super-container">
    <div class="sidebar">
      <a href="/"><img :src="require('../assets/SupriyaSrivatsa.jpg')" class="photoImg" title="Home"/></a>
      <a href="/blog/"><img :src="require('../assets/navigators/blog.png')" class="navImages" title="Blog"/></a></span>
      <a href="/milestones/"><img :src="require('../assets/navigators/flag.png')" class="navImages" title="Milestones"/></a></span>
      <a href="/art/"><img :src="require('../assets/navigators/poetry.png')" class="navImages" title="Art"/></a></span>
      <a href="/reachout/"><img :src="require('../assets/navigators/reachout.png')" class="navImages" title="Reach Out"/></a></span>
    </div>

    <div class="container">
        <div class="grid">
            <div class="grid-sizer"></div>
            <div class="grid-item">
                <img src="../assets/art/mysore_palace_1.jpg" title="Mysore Palace" />
            </div>
            <div class="grid-item">
                <img src="../assets/art/ganesha_mysore_palace.jpg" title="Mysore Palace" />
            </div>
            <div class="grid-item">
                <img src="../assets/art/kukkarahalli_lake.jpg" title="Kukkarahalli Lake" />
            </div>
            <div class="grid-item">
                <img src="../assets/art/mysore_palace_3.jpg" title="Mysore Palace" />
            </div>
            <div class="grid-item">
                <img src="../assets/art/mysore_palace_4.jpg" title="Mysore Palace" />
            </div>
            <div class="grid-item">
                <img src="../assets/art/mysore_palace_5.jpg" title="Mysore Palace" />
            </div>
            <div class="grid-item">
                <img src="../assets/art/andaman.jpg" title="Andaman" />
            </div>
            <div class="grid-item">
                <img src="../assets/art/elephant_island_andaman.jpg" title="Elephant Island, Andaman" />
            </div>
            <div class="grid-item">
                <img src="../assets/art/ross_island_andaman.jpg" title="Ross Island, Andaman" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Masonry from "masonry-layout";
const imagesLoaded = require('imagesloaded');
export default {
    mounted: function() {
        var grid = document.querySelector('.grid');

        var msnry = new Masonry( grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter: 8,
        percentPosition: true
        });

        imagesLoaded( grid ).on( 'progress', function() {
            msnry.layout();
        });
    }
}
</script>

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
  max-width: 800px;
  width: 80%;
  margin: 0px auto;
  color: #353839;
}

/* clear fix */
.grid:after {
  content: '';
  display: block;
  clear: both;
}

.grid-sizer,
.grid-item {
  /*width: 33.333%;*/
  width: 24%;
}

.grid-item {
  float: left;
  margin-bottom: 8px;
}

.grid-item img {
  display: block;
  max-width: 100%;
  border-radius: 5%;
  /*box-shadow: 10px 10px 16px -15px rgba(122,122,122,0.8);*/
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
  .grid-sizer, .grid-item {
  width: 48%;
}
}


</style>