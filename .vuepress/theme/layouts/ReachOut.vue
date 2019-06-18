<template>
    <div class="get-in-touch">
        <h1>
            <!--img :src="require('../assets/navigators/reachout.png')" class="reachOutImg" title="Reach Out"/-->
            Get In Touch!
        </h1>
        <p>For any comments, questions, a discussion or just a hello - drop in a message! :)</p>
        <form name="reachout" method="POST" data-netlify="true">
            <div class="form-field">
                <input id="name" type="text" placeholder="Name">
            </div>
            <div class="form-field">
                <input id="email" type="email" placeholder="Email">
            </div>
            <div class="form-field">
                <textarea id="message" placeholder="Message"/>
            </div>
            <div class="submit-field">
                <input class="submit-btn" type="submit" value="Send">
            </div>
        </form>
    </div>
</template>

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

input[type=submit] {
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
</style>