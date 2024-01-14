<script setup>
import AboutSection from './components/about-section/AboutSection.vue'
import DescriptionSection from './components/description-section/DescriptionSection.vue'
</script>

<template>
  <AboutSection />
  <DescriptionSection />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');

* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  background: #000d20;
  color: white;
  line-height: 1.7;
}

#app {
  height: max-content;
  width: 100%;
  display: block;
  padding: 2rem;
}
span {
  font-family: 'Poppins', sans-serif;
}
</style>

<script></script>
