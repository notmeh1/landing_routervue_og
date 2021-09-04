<template>
  <div>
    <Navbar/>
    <transition name="fade">
    <router-view/>
    </transition>
  </div>
  
</template>

<script>
import Navbar from "./components/navbar.vue";
export default {
  components: {
    Navbar,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* Como el fondo de la pagina es blanca, la transicion tambien lo es, quizas??*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0%;
}
</style>
