<script setup>
import AboutSection from './components/about-section/AboutSection.vue'
import DescriptionSection from './components/description-section/DescriptionSection.vue'
import TechStackSection from './components/techstack-section/TechstackSection.vue'
import PortfolioSection from './components/portfolio-section/PortfolioSection.vue'
import ContactSection from './components/contact-section/ContactSection.vue'
import FooterSection from './components/footer/FooterSection.vue'
</script>

<template>
  <AboutSection />
  <DescriptionSection />
  <TechStackSection />
  <PortfolioSection />
  <ContactSection />
  <FooterSection />
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
  cursor: default;
}

html {
  scroll-behavior: smooth;
}
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: #000000;
}
::-webkit-scrollbar-thumb {
  background: #cfcfcf;
}

body {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  background: #000d20;
  color: white;
  line-height: 1.7;
  overflow-x: hidden;
}

#app {
  height: max-content;
  width: 100%;
  display: block;
}
.container-xl {
  width: 1260px;
  margin: 0 auto;
}
.container-l {
  width: 960px;
  margin: 0 auto;
}
span {
  font-family: 'Poppins', sans-serif;
}
@media screen and (max-width: 1400px) {
  .container-xl {
    width: 960px;
  }
}
@media screen and (max-width: 980px) {
  .container-xl {
    width: 100%;
  }
}
@media screen and (max-width: 1260px) {
  .container-l {
    width: 100%;
  }
}
</style>

<script></script>
