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
            >{{ project.title }}
            <a :href="project.link" target="_blank"
              ><v-icon name="io-logo-github" id="github-icon" scale="2" /></a
          ></span>
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
  a {
    text-decoration: none;
    color: white;
  }
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
          description: `Aplikacja, stworzona w celu optymalizacji procesu obsługi zamówień, stanowi wszechstronne narzędzie do agregowania zamówień pochodzących z różnych platform sprzedażowych, w tym z Baselinkera. Jej funkcjonalność przekłada się na efektywne zarządzanie czasem realizacji zamówień, co z kolei wpływa na poprawę opinii klientów oraz wzrost sprzedaży.
Aplikacja umożliwia integrację z kilkoma punktami sprzedaży stacjonarnych/magazynami, co pozwala na obsługę zamówień pochodzących z różnych źródeł, takich jak kilka sklepów. Dzięki tej elastyczności użytkownicy mają możliwość rezerwacji zamówienia przez wybrany punkt sprzedaży, generowania dokumentów sprzedażowych, pobierania etykiet wysyłkowych dla zamówień oraz modyfikowania statusów obsługi bezpośrednio na platformie.
Przejrzysty interfejs aplikacji ułatwia korzystanie z jej funkcji, a zaawansowane opcje pozwalają na sprawną koordynację procesów magazynowych. W rezultacie, użytkownicy mogą skuteczniej zarządzać swoimi zamówieniami, dostarczając klientom satysfakcję i podnosząc efektywność sprzedaży.`,
          link: 'https://github.com/jesiiu?tab=repositories',
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
              name: `RestAPI`
            },
            {
              name: `Nginx`
            }
          ]
        },
        {
          title: `Chatbot AI/ML`,
          description: `Aplikacja powstała w ramach projektu dyplomowego - pracy inżynierskiej, celem której było stworzenie zaawansowanego Chatbota opartego na modelu SI. Wykorzystano bibliotekę PyTorch, dostosowaną do specyfikacji projektu, w celu efektywnego szkolenia modelu. Proces ten opierał się na nadzorowanym uczeniu maszynowym przy użyciu zbioru treningowego zawierającego różnorodne pytania i odpowiedzi związane z funkcjonalnością e-commerce.
Opracowany Chatbot został zintegrowany z serwerem zdalnym, a jego funkcjonalność udostępniona poprzez aplikację z endpointem REST API. To umożliwia użytkownikom przekazywanie zapytań do Chatbota, który w odpowiedzi dostarcza trafne odpowiedzi, dostosowane do intencji związanych z obszarem działalności e-commerce. Cała infrastruktura została starannie skonfigurowana, aby zapewnić płynne i niezawodne działanie aplikacji.`,
          link: 'https://github.com/jesiiu/chatbot-thesis',
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
          description: `Aplikacja została stworzona z myślą o efektywnej wymianie informacji o produktach, wraz z opisami, między systemem ERP a platformami e-commerce. Jej głównym celem jest umożliwienie wystawiania aukcji sprzedażowych, aktualizacji cen oraz bieżącego monitorowania stanu magazynowego.
Proces komunikacji aplikacji opiera się na pobieraniu danych z baz danych MSSQL lub PGSQL, a następnie przesyłaniu ich do platform e-commerce za pomocą udostępnionego interfejsu API. Alternatywnie, możliwe jest korzystanie z formatów plików takich jak JSON, XML lub CSV do przekazywania informacji. Ta elastyczność pozwala dostosować wymianę danych do specyficznych wymagań docelowych platform.
Dzięki tym aplikacją przedsiębiorstwo moze skutecznie zarządzać swoim asortymentem, zachowując zgodność z aktualnymi danymi magazynowymi i cenowymi na różnych platformach e-commerce. Procesy wymiany danych są zoptymalizowane, co przyczynia się do efektywności działalności handlowej online..`,
          link: 'https://github.com/jesiiu?tab=repositories',
          techstack: [
            {
              name: `Python`
            },
            {
              name: `C#`
            },
            {
              name: `MSSQL`
            },
            {
              name: `PGSQl`
            },
            {
              name: `REST/SOAP`
            }
          ]
        },
        {
          title: `Mniejsze projekty`,
          description: `Aplikacje stworzone z myślą o optymalizacji procesów biznesowych, mają na celu nie tylko ułatwienie pracy pracownikom, ale także zwiększenie ogólnej efektywności operacyjnej firmy. Skupiają się na minimalizacji liczby kroków wymaganych do wykonania danej czynności, eliminowaniu powtarzających się zadań oraz wykluczaniu błędów, co w rezultacie przyczynia się do zwiększenia automatyzacji.
Te innowacyjne aplikacje zmierzają do usprawnienia codziennych operacji poprzez inteligentne zoptymalizowanie procesów. Redukcja zbędnych kroków i eliminacja powtarzających się zadań umożliwia pracownikom skupienie się na bardziej strategicznych aspektach swojej pracy. Ponadto, eliminacja błędów wpływa pozytywnie na jakość wykonywanych zadań.
Dzięki zastosowaniu tych aplikacji, firma może zwiększyć efektywność swoich operacji, osiągając większą automatyzację i minimalizując czas oraz nakłady potrzebne do wykonania kluczowych działań biznesowych.`,
          link: 'https://github.com/jesiiu?tab=repositories',
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
              name: 'ElectronJS'
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
