<script setup></script>
<template>
  <div class="cta">
    <button class="btn-talk btn" @click="moveToSection('contact')">
      <span class="btn-text">Porozmawiajmy</span>
    </button>
    <button class="btn-file-cv btn">
      <span class="btn-text">CV</span>
    </button>
  </div>
</template>

<style lang="scss">
.cta {
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
}
.btn-talk {
  background: #ffc300;
  border-color: transparent !important;
  color: black;
  &:hover {
    background: #3f37c9;
    color: white;
    border-color: white !important;
  }
}
.btn-file-cv {
  background: transparent;
  border-color: #ffc300 !important;
  color: white;
  &:hover {
    background: #3f37c9;
    color: white;
    border-color: white !important;
  }
}
.btn {
  padding: 1rem;
  border: 1px solid;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.btn-text {
  font-weight: 600;
  font-size: 0.9rem;
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
