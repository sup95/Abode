<template>
    <div > 
        <img class="img404" :src="require('../assets/success.png')" />
        <p class="success"><a href="/">Take Me Home</a></p>
    </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=PT+Sans');

.success {
    font-family: 'PT Sans', sans-serif;
    text-align: center;
}

.img404 {
    width: 40%;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

@media only screen and (min-width: 320px) {
  /* The desktop approach */
  .img404 {
      margin-top: 70%;
  }
}

@media only screen and (min-width: 600px) {
  /* The desktop approach */
  .img404 {
      margin-top: 20%;
  }
}

@media only screen and (min-width: 768px) {
  /* The desktop approach */
  .img404 {
      margin-top: 8%;
  }
}
</style>