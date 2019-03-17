<template>
  <div id="app">
    <div id="nav" class="nav">
      <div class="navLink">
        <router-link to="/">Español</router-link>
      </div>
      <div class="navLink">
        <router-link to="/english">English</router-link>
      </div>
      <div class="navLink">
        <a href="./cv_lmva.pdf" target="_blank">PDF</a>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import '@/scss/styles.scss';
</style>


