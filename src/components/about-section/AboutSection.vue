<script setup>
import AboutAction from './AboutAction.vue'
</script>

<template>
  <section class="about__container container-l" id="about">
    <div class="about__content" v-motion-fade :delay="100">
      <div class="about__elements">
        <div class="about__photo">
          <img src="../../../src/assets/img/2.webp" />
          <div class="about__animation-wrapper">
            <div class="about__animation-line"></div>
            <div class="about__animation-line"></div>
            <div class="about__animation-line"></div>
          </div>
        </div>

        <div class="about__description">
          <div class="description-text">
            <h5>{{ h5 }}</h5>
            <h2>{{ h2 }}</h2>
            <h4>{{ h4 }}</h4>
            <AboutAction />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.about__container {
  height: 100vh;
}
.about__content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.about__elements {
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  gap: 5rem;
  position: relative;
}
.about__photo {
  display: block;
  width: 400px;
  height: 500px;
  overflow: hidden;
  border-radius: 12px;
  position: relative;
  box-shadow: -40px 0px 200px 30px rgb(57, 17, 129);
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
.about__animation-wrapper {
  padding: 2px 2px 0;
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
  position: absolute;
  inset: 0;
  border-radius: inherit;
  -webkit-mask-composite: xor;
}
.about__animation-line {
  will-change: transform;
  width: 200px;
  height: 200px;
  position: absolute;
  animation: animation-line 10s linear infinite;
  bottom: -200px;
  background-image: linear-gradient(to top, #6d2eff00, #0c1532, #c50ebc, #ffc300 99%, #0c153200);
}
.about__animation-line:nth-child(1) {
  animation-delay: 5s;
}
@keyframes animation-line {
  0% {
    transform: matrix(1, 0, 0, 1, -100, 0);
  }
  18% {
    transform: matrix(1, 0, 0, 1, -100, -450);
  }
  21% {
    transform: matrix(0.7071, 0.7071, -0.7071, 0.7071, -100, -500);
  }
  30% {
    transform: matrix(0, 1, -1, 0, 0, -600);
  }
  49% {
    transform: matrix(0, 1, -1, 0, 180, -600);
  }
  51% {
    transform: matrix(-0.7071, 0.7071, -0.7071, -0.7071, 200, -600);
  }
  60% {
    transform: matrix(-1, 0, 0, -1, 290, -450);
  }
  // 68% {
  //   transform: matrix(-1, 0, 0, -1, 290, -350);
  // }
  // 80% {
  //   transform: matrix(-1, 0, 0, -1, 290, -250);
  // }
  // 90% {
  //   transform: matrix(-1, 0, 0, -1, 290, -150);
  // }
  // 95% {
  //   transform: matrix(-1, 0, 0, -1, 290, 100);
  // }
  90% {
    transform: matrix(-1, 0, 0, -1, 290, 0);
  }
}
.description-text {
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  h5 {
    font-size: 1.1rem;
  }
  h2 {
    font-size: 2.4rem;
    font-weight: 600;
  }
  h4 {
    font-size: 1rem;
    font-weight: 400;
    font-style: italic;
  }
}
.test-photo {
  width: 350px;
  height: 500px;
  background: whitesmoke;
}
@media screen and (max-width: 796px) {
  .about__container {
    height: 100%;
    padding: 3rem 0rem;
  }
  .about__elements {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
  .description-text {
    gap: 0;
  }
}
@media screen and (max-width: 680px) {
  .about__photo {
    width: 350px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      h2: 'Kacper Jess',
      h4: 'Junior Developer',
      h5: 'Cześć, nazywam się'
    }
  }
}
</script>
