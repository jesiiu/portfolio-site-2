<script setup></script>
<template>
  <footer>
    <div class="footer__container">
      <div class="footer-title"><h1>KACPER JESS</h1></div>
      <div class="footer-sections">
        <ul class="footer-list">
          <li class="footer-list-element" @click="moveToSection('about')"><a>Start</a></li>
          <li class="footer-list-element" @click="moveToSection('description')"><a>O Mnie</a></li>
          <li class="footer-list-element" @click="moveToSection('techstack')"><a>Tech Stack</a></li>
          <li class="footer-list-element" @click="moveToSection('portfolio')"><a>Portfolio</a></li>
          <li class="footer-list-element" @click="moveToSection('contact')"><a>Kontakt</a></li>
        </ul>
      </div>
      <div class="copyrights"><small>© Created by Kacper Jess</small></div>
    </div>
  </footer>
</template>
<style lang="scss">
footer {
  width: 100%;
  height: 40vh;
  background: #7678ed;
  padding: 0;
  display: block;
}
.footer__container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer-sections {
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}
.footer-list {
  height: 100%;
  margin-top: 3rem;
  list-style-type: none;
  .footer-list-element {
    transition: all 0.3s ease-in-out;
    display: inline-block;
    a {
      cursor: pointer;
    }
    &:hover {
      color: #000d20;
      transform: translateY(-2px);
    }
  }
}
.copyrights {
  bottom: 1;
}
@media screen and (max-width: 680px) {
  .footer-list-element {
    padding: 0.4rem;
    a {
      font-size: 0.85rem;
    }
  }
}
</style>
<script>
export default {
  methods: {
    moveToSection(sectionId) {
      const targetSection = document.getElementById(sectionId)
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>
