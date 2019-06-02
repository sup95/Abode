<template>
    <div> 
        <img class="img404" :src="require('./assets/image404.png')" />
    </div>
</template>


<style scoped>

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