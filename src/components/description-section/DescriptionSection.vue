<script setup></script>

<template>
  <section class="description__container container-xl" id="description">
    <div class="description__content">
      <div class="description-me">
        <div class="me-left">
          <h1 class="me-left-title">O mnie</h1>
          <p class="me-left-text" v-html="description_text"></p>
        </div>
        <div class="me-right">
          <div class="work-list-bg"></div>
          <ul class="work-list">
            <li v-for="(work, workIndex) in worklist" :key="workIndex" class="work-list-element">
              <span class="list-element">
                <em v-html="work.title"></em><br />
                <small v-html="work.description"></small>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
$list-bar-color: #a0a0a0;
$border-color: #a0a0a0;
.description__container {
  height: 100%;
  min-height: 70vh;
  padding: 1rem;
}
.description__content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2rem;
}
.description-me {
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: row;
  gap: 2rem;
}
.description {
  width: 100%;
  height: max-content;
}
.me-left {
  flex: 6;
  flex-wrap: nowrap;
  position: relative;
}
.me-left::before {
  content: '';
  position: absolute;
  width: 100px;
  height: 0px;
  box-shadow: -50px 120px 300px 30px #ffd60a;
  left: 140px;
  top: 0;
}
.me-left::after {
  content: '';
  position: absolute;
  width: 100px;
  height: 0px;
  box-shadow: 0px 0px 500px 25px #e44608;
  overflow: hidden;
  right: 100px;
}
.me-left-title {
  width: 100%;
  border-bottom: 1px solid $border-color;
  padding-bottom: 0.8rem;
  font-weight: 600;
}
.me-left-text {
  padding-top: 1rem;
  font-size: 1.05rem;
  font-weight: 500;
}
.me-right {
  display: flex;
  flex-direction: column;
  flex: 4;
  align-items: flex-end;
  gap: 5rem;
  position: relative;
  background: transparent;
}
.work-list-bg {
  content: '';
  position: absolute;
  width: 100%;
  height: 0px;
  // background: radial-gradient(
  //   ellipse at right,
  //   rgba(57, 17, 129, 0.8) 0%,
  //   rgba(57, 17, 129, 0) 70%
  // );
  box-shadow: 200px 170px 200px 80px rgb(57, 17, 129);
}
.work-list {
  max-width: 20rem;
}
li {
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1rem;
  em {
    font-weight: 600;
  }
}
.work-list-element::before {
  content: '';
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  top: calc(0.5rem / 2 - 0.5rem / 2 + 0.5rem);
  left: 0;
  border-style: solid;
  border-width: 0.2rem;
  border-color: $list-bar-color;
  border-radius: 10rem;
  box-sizing: border-box;
}
.work-list-element:not(:last-child)::after {
  content: '';
  position: absolute;
  top: calc(0.5rem / 2 - 0.5rem / 2 + 0.5rem) + 0.5rem + 0.125rem;
  left: calc(0.5rem / 2 - 0.125rem / 2);
  width: 0.125rem;
  height: calc(100% - -0.5rem - 0.125rem * 2);
  background-color: $list-bar-color;
  border-radius: 10rem;
}
@media screen and (max-width: 980px) {
  .description__container {
    height: 100%;
  }
  .description-me {
    flex-direction: column;
    align-items: center;
  }
  .work-list-bg {
    box-shadow: 0px 250px 200px 80px rgb(57, 17, 129);
  }
}
@media screen and (max-width: 786px) {
  .me-left::before {
    width: 100%;
    box-shadow: -50px 120px 300px 2px #ffd60a;
  }
  .me-left::after {
  width: 100%;
  box-shadow: 0px 0px 500px 2px #e44608;
}
}
</style>

<script>
export default {
  data() {
    return {
      description_text: `👋 Cześć, <br /><br />🎓 Jestem absolwentem Uniwersytetu Merito w Poznaniu, gdzie
            zdobyłem tytuł inżyniera informatyki ze specjalizacją w e-commerce. <br />💼 Aktualnie
            rozwijam swoją karierę w firmie e-commerce, gdzie pełnię rolę twórcy oprogramowania do
            integracji firmowego systemu ERP z popularnymi marketplace'ami, takimi jak Pigu,
            Allegro, a także z platformami e-commerce, głównie Prestashop, oraz narzędziem
            Baselinker. <br />🚀 Poza tworzeniem aplikacji integrujących systemy zajmuje się również
            usprawnieniem oraz optymalizacją procesów biznesowych oraz ich automatyzacją. <br />🛠️
            Stawiam na ciągły rozwój, aby być na bieżąco z najnowszymi trendami w technologii.
            <br />💡 Posiadam solidne umiejętności programistyczne oraz doświadczenie pozwalają mi
            skutecznie realizować projekty związane z rozwijaniem funkcjonalności oraz
            dostosowywaniem systemów do aktualnych potrzeb rynkowych.`,
      worklist: [
        {
          title: `Developer - Mastersport Sp. z o. o. <br />
                  od 2022.05.01`,
          description: `Wytwarzanie nowego oprogramowania <br />
                  Integracja systemu ERP z marketplace'ami <br />
                  Optymaliazcja procesów biznesowych <br />
                  Rozwój aplikacji <br />
                  Wdrażanie aplikacji <br />
                  Administracja serwera <br /> `
        },
        {
          title: `Informatyk - Matex Sp. z o. o. <br />
                  od 2022.01.01 do 2022.04.30`,
          description: `Zarządanie siecią LAN <br />
                  Administracja serwera firmy <br />
                  Help Desk <br /> `
        }
      ]
    }
  }
}
</script>
