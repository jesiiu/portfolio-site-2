<script setup></script>
<template>
  <footer>
    <div class="footer__container">
      <div class="footer-title"><h1>Kacper Jess</h1></div>
      <div class="footer-sections">
        <ul>
          <li><a>Start</a></li>
          <li><a>O Mnie</a></li>
          <li><a>Tech Stack</a></li>
          <li><a>Portfolio</a></li>
          <li><a>Kontakt</a></li>
        </ul>
      </div>
      <div class="copyrights"><small>© Created by Kacper Jess</small></div>
    </div>
  </footer>
</template>
<style lang="scss">
footer {
  width: 100%;
  height: 50vh;
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
ul {
  height: 100%;
  margin-top: 3rem;
  list-style-type: none;
  li {
    display: inline-block;
    a {
      cursor: pointer;
    }
  }
}
.copyrights {
  bottom: 1;
}
</style>
