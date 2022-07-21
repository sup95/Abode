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
            <h1> Talks </h1>

            <!-- talk -->
            <p class="header">
            <span class="event">S/He Talks Tech, Bangalore</span></br>
            Forgotten Histories
            <span class="date">Feb '20</span></br>
            </p>

            <div class="media">
                <div class="subdiv" style="margin-right: 45px">
                    <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.1972%;">
                        <iframe class="iframe" src="https://speakerdeck.com/player/cf4bcb215d394d028be0fe5252afff6c" allowfullscreen scrolling="no" allow="encrypted-media"></iframe>
                    </div>
                </div>
            </div>
            
            <br/>
            <hr class="hr">

            <!-- talk -->
            <p class="header">
            <span class="event">ACCU Conference, London</span></br>
            The Story of Villagers, Marbles and Oh, A Blockchain!
            <span class="date">April '19</span></br>
            </p>

            <div class="media">
                <div class="subdiv" style="margin-right: 45px">
                    <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.1972%;">
                        <iframe class="iframe" src="https://speakerdeck.com/player/3e9b418b1bf84747854934cb713d3006" allowfullscreen scrolling="no" allow="encrypted-media"></iframe>
                    </div>
                </div>
                <div class="subdiv">
                    <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.1972%;">
                        <iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/rl2lXDkOcyU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            
            <br/>
            <hr class="hr">

            <!-- talk -->
            <p class="header">
            <span class="event">ACCU Conference, London</span></br>
            Going Multiplatform With Kotlin
            <span class="date">April '19</span></br>
            </p>

            <div class="media">
                <div class="subdiv" style="margin-right: 45px">
                    <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.1972%;">
                        <iframe class="iframe" src="https://speakerdeck.com/player/1292a438493749d4b6b364421cb93aa8" allowfullscreen scrolling="no" allow="encrypted-media"></iframe>
                    </div>
                </div>
                <div class="subdiv">
                    <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.1972%;">
                        <iframe class="iframe" src="https://www.youtube.com/embed/j_FAvj5ouIg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            <br/>
            <hr class="hr">

            <!-- talk -->
            <p class="header">
            <span class="event">Great Indian Developer Summit, Bangalore</span></br>
            Town Hall Panel Discussion
            <span class="date">April '18</span></br>
            </p>

            <div class="media">
                <div class="subdiv">
                    <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.1972%;">
                        <iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/eAlIPFdOJnU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    </div>
                </div>
            </div>

            <br/>
            <hr class="hr">
            
            <!-- talk -->
            <p class="header">
            <span class="event">Great Indian Developer Summit, Bangalore</span></br>
            TensorFlow for Mobile Machine Learning
            <span class="date">April '18</span></br>
            </p>

            <div class="media">
                <div class="subdiv" style="margin-right: 45px">
                    <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 74.9296%;">
                        <iframe class="iframe" src="https://speakerdeck.com/player/42b0b70e055841348e132ff4a85f9c69" allowfullscreen scrolling="no" allow="encrypted-media"></iframe>
                    </div>
                </div>
            </div>

            <br/>
            <hr class="hr">
            
            <!-- talk -->
            <p class="header">
            <span class="event">Mobile and Disruptive Technology Summit, Bangalore</span></br>
            Mobile, AI and TensorFlow
            <span class="date">Oct '17</span></br>
            </p>

            <div class="media">
                <div class="subdiv" style="margin-right: 45px">
                    <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 74.9296%;">
                        <iframe class="iframe" src="https://speakerdeck.com/player/5201ac72e8c04f1eaf7bfdfc85904f44" allowfullscreen scrolling="no" allow="encrypted-media"></iframe>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=PT+Sans");

.iframe {
    border: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
}

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

.media   {
    display: flex;
    justify-content: flex-start;
}

.subdiv {
    width: 35%;
}

.header {
  text-align: left;
  font-size: 18px;
  font-weight: bold;
}

.event {
  font-weight: lighter;
  font-size: 12px;
  color: #a0a0a0;
  text-transform: uppercase;
}

.date {
  font-weight: lighter;
  font-size: 12px;
  color: #a0a0a0;
  text-transform: uppercase;
  float: right;
}

.hr {
    border-top: 0.5px solid #e0e0e0;
    margin: 28px;
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
  .sidebar a {
    align-content: center;
  }
}

@media only screen and (max-width: 500px) {
  .goodreads-widget {
    width: 85%;
  }
}
</style>