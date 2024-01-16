<script setup>
import AboutAction from './AboutAction.vue'
</script>

<template>
  <section class="about__container container-l">
    <div class="about__content">
      <div class="about-elements">
        <div class="about-photo">
          <img src="../../../src/assets/img/2.webp" />
        </div>
        <div class="about-description">
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
.about-elements {
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  gap: 5rem;
  position: relative;
}
.about-photo {
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
  .about-elements {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
  .description-text {
    gap: 0;
  }
}
@media screen and (max-width: 680px) {
  .about-photo {
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
