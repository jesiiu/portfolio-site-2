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
}
.about__animation-line {
  will-change: transform;
  width: 100px;
  height: 100px;
  position: absolute;
  animation: animation-line 5s linear infinite;
  bottom: -100px;
  left: -80px;
  background-image: linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%);
}
// .about__animation-line:nth-child(1) {
//   animation-delay: 3s;
// }
@keyframes animation-line {
  0% {
    transform: translateY(0px) translateX(0px);
  }
  24% {
    transform: translateY(-590px);
  }
  49% {
    transform: translateX(460px) translateY(-590px) rotate(90deg);
  }
  74% {
    transform: translateY(00px) translateX(460px);
  }
  100% {
    transform: translateX(0px) translateY(000px);
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
