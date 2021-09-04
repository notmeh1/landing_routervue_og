<template>
  <div>
    <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand">V8</a
        ><button
          data-toggle="collapse"
          data-target="#navbarResponsive"
          class="navbar-toggler"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa fa-bars"></i>
        </button>
        <ul class="nav navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/administrador/simple">Simple</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/administrador/avanzado">Avanzado</router-link>
          </li>
        </ul>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="nav navbar-nav ml-auto">
            <li class="nav-item" role="presentation">
              <router-link :to="{ name: 'inicio' }">portada</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link :to="{ name: 'sobremi' }">sobre mí</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link :to="{ name: 'contacto' }">contacto</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link to="/post/1">último post</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
