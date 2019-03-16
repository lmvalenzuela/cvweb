<template>
  <div id="app">
    <div id="nav" class="nav">
      <div class="navLink">
        <router-link to="/">Home</router-link>
      </div>
      <div class="navLink">
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import '@/scss/styles.scss';
</style>
