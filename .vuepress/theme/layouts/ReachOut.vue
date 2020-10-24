<template>
    <div class="container">
    <div class="sidebar">
      <a href="/"><img :src="require('../assets/SupriyaSrivatsa.jpg')" class="photoImg" title="Home"/></a>
      <a href="/blog/"><img :src="require('../assets/navigators/blog.png')" class="navImages" title="Blog"/></a></span>
      <a href="/milestones/"><img :src="require('../assets/navigators/reading.png')" class="navImages" title="Milestones"/></a></span>
      <a href="/art/"><img :src="require('../assets/navigators/poetry.png')" class="navImages" title="Art"/></a></span>
      <a href="/reachout/"><img :src="require('../assets/navigators/reachout.png')" class="navImages" title="Reach Out"/></a></span>
    </div>
    <div class="get-in-touch">
        <h1>
            <!--img :src="require('../assets/navigators/reachout.png')" class="reachOutImg" title="Reach Out"/-->
            Get In Touch
        </h1>
        <p>For any comments, questions, a discussion or just a hello - drop in a message! :)</p>
        <form name="reachout" method="POST" action="/reachout/success" netlify-honeypot="not-for-humans" data-netlify="true">
            <div class="form-field">
                <input id="name" name="username" type="text" placeholder="Name">
            </div>
            <div class="form-field">
                <input id="email" name="email" type="email" placeholder="Email">
            </div>
            <div class="form-field">
                <textarea id="message" name="message" placeholder="Message"/>
            </div>
            <input class="not-for-humans" name="not-for-humans" type="text">
            <div class="submit-field">
                <input class="submit-btn" id="sendBtn" type="submit" value="Send">
            </div>
        </form>
    </div>
    </div>
</template>

<script>
    export default {
        methods: {
            enableSend() {
                if(document.getElementById("message").value==="") { 
                    document.getElementById('sendBtn').disabled = true; 
                } 
                else { 
                    document.getElementById('sendBtn').disabled = false;
                }
            }
        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=PT+Sans');

.get-in-touch  {
    font-family: 'PT Sans', sans-serif;
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 550px;
    width: 80%;
    padding: 20px;
    color: #353839;
}

.form-field {
    padding: 2%;
}

.submit-field {
    text-align: center;
}

.reachOutImg {
    height: 26px;
    margin-right: 2%;
}

input {
    width: 100%;
    padding: 8px;
    margin: 10px;
    box-sizing: border-box;
    border: 2px solid #555;
    border-radius: 4px;
    outline: none;
    font-family: 'PT Sans', sans-serif;
}

textarea {
    width: 100%;
    height: 150px;
    padding: 8px;
    margin: 10px;
    box-sizing: border-box;
    border: 2px solid #555;
    border-radius: 4px;
    background-color: rgb(255, 254, 254);
    font-size: 14px;
    resize: none;
    outline: none;
    font-family: 'PT Sans', sans-serif;
}

input[type=submit]:enabled {
    width: auto;
    background-color: #353839;
    border-radius: 4px;
    border: none;
    color: white;
    padding: 12px;
    text-decoration: none;
    margin: 10px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 16px;
    font-family: 'PT Sans', sans-serif;
}

input[type=submit]:disabled {
    width: auto;
    background-color: #696969;
    border-radius: 4px;
    border: none;
    color: white;
    padding: 12px;
    text-decoration: none;
    margin: 10px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 16px;
    font-family: 'PT Sans', sans-serif;
    cursor:not-allowed
}

.not-for-humans {
    display: none;
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
}
</style>
