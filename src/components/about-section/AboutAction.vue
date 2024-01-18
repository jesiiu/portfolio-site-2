<script setup></script>
<template>
  <div class="cta">
    <button class="btn-talk btn" @click="moveToSection('contact')">
      <span class="btn-text">Porozmawiajmy</span>
    </button>
    <button class="btn-file-cv btn">
      <span class="btn-text">CV</span>
    </button>
    <div class="cta-icons">
      <a
        v-for="(icon, iconIndex) in icons"
        :key="iconIndex"
        target="_blank"
        :href="icon.link"
        class="cta-icon"
      >
        <v-icon :name="icon.icon" scale="1.6" id="cta-icon"
      /></a>
    </div>
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
  position: relative;
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
.cta-icons {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: max-content;
  justify-content: space-around;
  position: absolute;
  bottom: -60px;
}
.cta-icon {
  cursor: pointer;
  height: 100%;
  transition: all 0.3s ease-in-out;
}
.cta-icon:hover {
  transform: translateY(-3px);
}
#cta-icon {
  cursor: pointer;
  fill: white !important;
  path {
    cursor: pointer;
  }
}
</style>

<script>
export default {
  data() {
    return {
      icons: [
        {
          name: 'github',
          icon: 'io-logo-github',
          link: 'https://github.com/jesiiu?tab=repositories'
        },
        {
          name: 'messenger',
          icon: 'bi-messenger',
          link: 'https://m.me/kacper.jess.7'
        },
        {
          name: 'linkedin',
          icon: 'bi-linkedin',
          link: 'https://www.linkedin.com/in/kacper-jess-27b835225/'
        },
        {
          name: 'whatsapp',
          icon: 'ri-whatsapp-fill',
          link: 'https://api.whatsapp.com/send?phone=696921301'
        }
      ]
    }
  },
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
