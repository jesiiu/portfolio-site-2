<script setup></script>
<template>
  <section class="portfolio__container container-xl" id="portfolio">
    <div class="portfolio__content">
      <h5>Moje prace</h5>
      <h2>Portfolio</h2>
      <div class="portfolio__elements">
        <div
          class="portfolio__element"
          v-for="(project, projectIndex) in projects"
          :key="projectIndex"
        >
          <span class="element-title"
            >{{ project.title }} <v-icon name="io-logo-github" id="github-icon" scale="2"
          /></span>
          <div class="element-description">
            <p class="description-text">{{ project.description }}</p>
            <div class="elements-stack">
              <div class="grid-element"><span>Tech Stack</span></div>
              <div
                class="grid-element"
                v-for="(tech, techIndex) in project.techstack"
                :key="techIndex"
              >
                <small>{{ tech.name }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.portfolio__container {
  height: 100%;
  padding-top: 5rem;
}
.portfolio__content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h5 {
    font-size: 1.1rem;
    font-weight: 400;
  }
  h2 {
    font-size: 2rem;
  }
}
.portfolio__elements {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: columns;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
  position: relative;
  gap: 5rem;
  padding: 4rem 2rem;
}
.portfolio__element {
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.portfolio__element::before {
  content: '';
  position: absolute;
  width: 300px;
  height: 0px;
  box-shadow: -10px 20px 60px 4px #0623c7;
}
.element-title {
  font-weight: 600;
  font-size: 1.5rem;
  border-bottom: 1px solid white;
  padding-bottom: 1rem;
}
.element-description {
  width: 100%;
  height: max-content;
  display: flex;
  gap: 2rem;
  position: relative;
}
.description-text {
  flex: 6;
}
.elements-stack {
  flex: 4;
  width: 100%;
  display: grid;
  justify-content: end;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(8, 1fr);
  justify-items: flex-end;
  gap: 0rem;
  position: relative;
}
.grid-element {
  span {
    font-weight: 500;
  }
  small {
    font-size: 0.8rem;
    margin-right: 0.4rem;
  }
}
.grid-element:not(:first-child)::after {
  content: '';
  background: rgb(255, 255, 255);
  width: 10px;
  height: 10px;
  position: absolute;
  border-radius: 30px;
  margin-top: 10px;
  box-shadow: -10px 0px 50px 2px #c7c7c7;
}
.grid-element:not(:first-child) {
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.grid-element:not(:first-child):hover {
  transform: translateX(-10px);
}
#github-icon {
  margin-left: 0.4rem;
  transition: all 0.3s ease-in-out;
}
#github-icon:hover {
  transform: translateY(-5px);
}
@media screen and (max-width: 680px) {
  .element-title {
    text-align: center;
  }
  .element-description {
    flex-direction: column;
  }
  .portfolio__element:nth-child(odd) {
    text-align: left;
    .grid-element:not(:first-child)::after {
      display: none;
    }
    .grid-element:not(:first-child)::before {
      content: '';
      background: rgb(236, 236, 236);
      width: 10px;
      height: 10px;
      position: absolute;
      border-radius: 30px;
      margin-top: 10px;
      margin-left: -16px;
      box-shadow: -10px 0px 50px 2px #c7c7c7;
    }
  }
  .portfolio__element:nth-child(even) {
    text-align: right;
  }
  .elements-stack {
    display: flex;
    flex-direction: column;
  }
  .portfolio__element::before {
    width: 100%;
  }
}
</style>
<script>
export default {
  data() {
    return {
      projects: [
        {
          title: `OrdersHub`,
          description: ` Aplikacja utworzona na potrzeby projektu dyplomowego - pracy inżynierskiej. Model SI
              Chatbota został dostarczony przez bibliotekę PyTorch, która została odpowiednio
              skonfigurowana pod wymagania projektu. Model był uczony poprzez nadzorowane uczenie
              maszynowe zbiorem treningowym, który zawierał zestaw pytań oraz odpowiedzi w
              zależności od intencji związanych z działalnością e-commerce. Chatbot został
              umieszczony na serwerze zdalnym w postaci aplikacji która posiadała endpoint REST API,
              pozwalający na przesłanie zapytania użytkownika i uzyskania odpowedzi od Chatbota.`,
          techstack: [
            {
              name: `Vue`
            },
            {
              name: `Laravel`
            },
            {
              name: `PostgreSQL`
            },
            {
              name: `JS`
            },
            {
              name: `Nginx`
            }
          ]
        },
        {
          title: `Chatbot AI/ML`,
          description: `Aplikacja agregująca zamówienia pobierane z różnych platform sprzedażowych, w tym z
              Baselinkera. Pozwala to na optymalizację czasu realizacji zamówienia co z kolei
              przekłada się na lepsze opinie oraz zwiększenie sprzedaży. Aplikacja umożliwia
              podpięcie kilku magazynów przez które zamówienia mogą obsługiwane (na przykład kilka
              sklepów), zarezerwować zamówienie przez wybrany magazyn, tworzyć dokument sprzedażowy,
              pobrać etykietę wysyłkową dla zamówienia oraz zmienić status obsługi na platformie.`,
          techstack: [
            {
              name: `Python`
            },
            {
              name: `Flask`
            },
            {
              name: `SQLite`
            },
            {
              name: `RestAPI`
            },
            {
              name: `Nginx`
            }
          ]
        },
        {
          title: `Integracje ERP`,
          description: `Aplikacje przeznaczone do wymiany danych o produktach wraz z opisami, znajdujących się
              w systemie ERP, z platformami e-commerce w celu możliwości wystawienia aukcji
              sprzedażowych, aktualizacji cen oraz stanu magazynowego. Komunikacja odbywa się
              poprzez pobranie danych z bazy danych MSSQL lub PGSQL a następnie wysłanie ich przy
              użyciu dostarczonego przez target docelowy interfejsu API, ewentualnie poprzez plik
              JSON/XML/CSV.`,
          techstack: [
            {
              name: `Python`
            },
            {
              name: `C#`
            },
            {
              name: `NodeJS`
            },
            {
              name: `ElectronJS`
            },
            {
              name: `MSSQL`
            },
            {
              name: `PGSQl`
            }
          ]
        },
        {
          title: `Mniejsze projekty`,
          description: `Aplikacje optymalizujące procesy biznesowe oraz ułatwiające pracę pracownikom firmy.
              Ich działanie skupione jest na zmniejszeniu ilości wymaganych kroków do wykonania
              danego działania a dodatkowo eliminowanie powtarzania zbędnych czynności oraz
              wykluczanie błedów co docelowo pozwalan na większą automatyzację dzięki czemu zwiększa
              się efektywnośc pracy.`,
          techstack: [
            {
              name: `Python`
            },
            {
              name: `C#`
            },
            {
              name: `REST/SOAP`
            },
            {
              name: `MSSQL`
            },
            {
              name: `PGSQl`
            }
          ]
        }
      ]
    }
  }
}
</script>
