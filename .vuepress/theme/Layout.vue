<template>
  <div>
    <div class="left" id="left"/>
    <div class="right" id="right">
        <div id="landingDiv">
            <p id="landingHeader"> 
                Hi! I'm <br>
                <span id="name"> 
                    Supriya <br/> Srivatsa 
                </span> 
                <span class="imgRow">
                    <a href="https://twitter.com/SupriyaSrivatsa" target="_blank">
                        <span class = "imgCol">
                            <img class="socialMediaImg" :src="require('./assets/social-networks/twitter.png')" />
                        </span>
                    </a>
                    <a href="https://github.com/sup95" target="_blank">
                        <span class = "imgCol">
                            <img :src="require('./assets/social-networks/github.png')" />
                        </span>
                    </a>
                    <a href="https://stackoverflow.com/users/4233180/supriya" target="_blank">
                        <span class = "imgCol">
                            <img :src="require('./assets/social-networks/so.png')" />
                        </span>
                    </a>
                    <a href="https://www.linkedin.com/in/supriya-srivatsa/" target="_blank">
                        <span class = "imgCol">
                            <img :src="require('./assets/social-networks/linkedin.png')" />
                        </span>
                    </a>
                </span>
            </p>
            
            <span id="landingContent">
                I build, break and fix code. <br/>
                I speak internationally on topics niche and intriguing. <br/>
                Sometimes, I scribble poetry.
            </span>

            <!--div class="bottomNavigationPane">
                <div><img :src="require('./assets/navigators/blog.png')" /></div>
                <div><img :src="require('./assets/navigators/flag1.png')" /></div>
                <div><img :src="require('./assets/navigators/poetry1.png')" height="40px" /></div>
            </div-->
        </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=PT+Sans');

.left {
  background-image: url("assets/SupriyaSrivatsa.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  position: absolute;
  display: block; 
  left: 0px;
  top: 0px;
  height: 100%;
  width: 45%;
  transition: width 1s;
}

.right {
  position: absolute;
  display: flex; 
  background-color: white;
  color: #414a4c;
  right: 0px;
  top: 0px;
  height: 100%;
  width: 55%;
  transition: width 1s;
}

#landingDiv {
  padding: 10%;
  font-family: 'PT Sans', sans-serif;
}

#landingHeader {
  font-size: 23px;
  font-family: 'PT Sans', sans-serif;
  text-transform: uppercase;
}

#name  {
  font-size: 80px;
  font-weight: bold;
  color: #232b2b;
}

#landingContent {
  font-size: 23px;
}

.bottomNavigationPane   {
    align-items:center;
    margin-bottom: 3%;
    margin-top: 15%;
    bottom: 0;
    display: flex;
    justify-content: space-between;
}

.imgRow {
  display: flex;
}

.imgCol {
  justify-content: space-between;
  padding: 5px;
}

@media only screen and (max-width: 768px) {
  /* The portrait approach */
  .right {
      top: 50%;
      height: 100%;
      width: 100%; 
    }
   
  .left {
      height: 50%;
      width: 100%;
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
      clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
    }
}

@media only screen and (min-width: 768px) {
   /* The landscape approach */
  .left {
    -webkit-clip-path: polygon(0 0, 100% 0, 92% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 92% 100%, 0 100%);
  }
}



</style>