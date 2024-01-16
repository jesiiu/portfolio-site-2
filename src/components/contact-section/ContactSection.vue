<script setup></script>
<template>
  <section class="contact__container container-xl" id="contact">
    <div class="contact__content">
      <div class="contact-options">
        <div
          class="option"
          v-for="(option, optionIndex) in contactOptions"
          :key="optionIndex"
          :id="option.id"
        >
          <div class="option-title-container">
            <h2 class="option-title">{{ option.title }}</h2>
            <v-icon :name="option.icon" class="option-title-icon" scale="1.4" />
          </div>
          <span class="option-value">{{ option.value }}</span>
          <a class="option-cta" href="mailto:{{ option.value }}" v-if="option.id === 'email'">{{
            option.action
          }}</a>
          <a class="option-cta" target="_blank" v-else :href="option.link">{{ option.action }}</a>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.contact__container {
  height: 60vh;
}
.contact__content {
  width: 100%;
  height: 100%;
  display: block;
}
.contact-options {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding: 1rem;
}
.option {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem;
  justify-content: center;
  border-radius: 20px;
  align-items: center;
  &#email {
    flex: 3;
    box-shadow:
      10px -10px 50px 5px #ff0606,
      -10px 10px 25px 5px #ffffff;
  }
  &#messenger {
    flex: 3;
    box-shadow: 0px 0px 50px 5px #116df7;
  }
  &#whatsapp {
    flex: 3;
    box-shadow: 0px 0px 50px 5px #14b306;
  }
  .option-cta {
    border: 1px solid transparent;
    min-width: 100%;
    width: 100%;
    padding: 1rem;
    border-radius: 20px;
    background: white;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    word-break: keep-all;
    text-align: center;
    text-decoration: unset;
    color: black;
    font-weight: 600;
    font-size: 0.854rem;
  }
  .option-cta:hover {
    background: transparent;
    border: 1px solid white;
    color: white;
  }
}
.option-title-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 1280px) {
  .contact__container {
    height: 100%;
    width: 960px;
    padding-bottom: 5rem;
  }
  .contact-options {
    flex-direction: column;
  }
}

@media screen and (max-width: 980px) {
  .contact__container {
    width: 660px;
  }
}
@media screen and (max-width: 680px) {
  .contact__container {
    padding: 0;
  }
  .contact__content {
    padding: 2rem;
  }
}
</style>
<script>
export default {
  data() {
    return {
      contactOptions: [
        {
          title: 'Email',
          icon: 'md-email',
          value: 'kacper.jess74@gmail.com',
          action: 'Kontakt email',
          id: 'email'
        },
        {
          title: 'Messenger',
          icon: 'bi-messenger',
          value: 'm.me/kacper.jess.7',
          link: 'https://m.me/kacper.jess.7',
          action: 'Kontakt messenger',
          id: 'messenger'
        },
        {
          title: 'WhatsApp',
          icon: 'ri-whatsapp-fill',
          value: '+48696921301',
          link: 'https://api.whatsapp.com/send?phone=696921301',
          action: 'Kontakt WhatsApp',
          id: 'whatsapp'
        }
      ]
    }
  }
}
</script>
