<script setup></script>

<template>
  <section class="description__container">
    <div class="description__content">
      <div class="description-me">
        <div class="me-left">
          <h1 class="me-left-title">O mnie</h1>
          <p class="me-left-text">
            👋 Cześć, <br /><br />🎓 Jestem absolwentem Uniwersytetu Merito w Poznaniu, gdzie
            zdobyłem tytuł inżyniera informatyki ze specjalizacją w e-commerce. <br />💼 Aktualnie
            rozwijam swoją karierę w firmie e-commerce, gdzie pełnię rolę twórcy oprogramowania do
            integracji firmowego systemu ERP z popularnymi marketplace'ami, takimi jak Pigu,
            Allegro, a także z platformami e-commerce, głównie Prestashop, oraz narzędziem
            Baselinker. <br />🚀 Poza tworzeniem aplikacji integrujących systemy zajmuje się również
            usprawnieniem oraz optymalizacją procesów biznesowych oraz ich automatyzacją. <br />🛠️
            Stawiam na ciągły rozwój, aby być na bieżąco z najnowszymi trendami w technologii.
            <br />💡 Posiadam solidne umiejętności programistyczne oraz doświadczenie pozwalają mi
            skutecznie realizować projekty związane z rozwijaniem funkcjonalności oraz
            dostosowywaniem systemów do aktualnych potrzeb rynkowych.
          </p>
        </div>
        <div class="me-right">
          <ul class="work-list">
            <li class="work-list-element">
              <span class="list-element"
                ><em
                  >Developer - Mastersport Sp. z o. o. <br />
                  od 2022.05.01</em
                ><br /><small
                  >Wytwarzanie nowego oprogramowania <br />
                  Integracja systemu ERP z marketplace'ami <br />
                  Optymaliazcja procesów biznesowych <br />
                  Rozwój aplikacji <br />
                  Wdrażanie aplikacji <br />
                  Administracja serwera <br /> </small
              ></span>
            </li>
            <li class="work-list-element not">
              <span
                ><em
                  >Informatyk - Matex Sp. z o. o. <br />
                  od 2022.01.01 do 2022.04.31</em
                ><br /><small>
                  Zarządanie siecią LAN <br />
                  Administracja serwera firmy <br />
                  Help Desk <br /> </small
              ></span>
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
  width: 100%;
  height: 100vh;
  display: block;
}
.description__content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.description-me {
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}
.description {
  width: 100%;
  height: max-content;
}
.me-left {
  padding: 3rem;
  flex: 6;
  flex-wrap: nowrap;
}
.me-left-title {
  width: 100%;
  border-bottom: 1px solid $border-color;
  padding-bottom: 0.8rem;
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
  align-items: center;
  gap: 5rem;
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
</style>

<script></script>
