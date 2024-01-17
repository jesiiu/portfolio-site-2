<script setup></script>
<template>
  <section class="techstack__container container-l" id="techstack">
    <div class="techstack__content">
      <h5>Moje umiejętności</h5>
      <h2>Tech Stack</h2>
      <div class="techstack__grid">
        <div
          v-for="(stack, stackIndex) in technologies"
          :key="stackIndex"
          class="stack"
          :class="stack.className"
          v-motion-fade-visible
          :visible="{opacity: 1, y: 0}"
        >
          <div class="name">{{ stack.name }}</div>
          <div class="icons">
            <div
              v-for="(icon, iconIndex) in stack.techs"
              :key="iconIndex"
              class="icon"
              :id="icon.id"
            >
              <v-icon :name="icon.iconName" scale="3" />
              <v-icon
                v-if="icon.id == 'js'"
                name="vi-file-type-typescript-official"
                class="tsicon"
                scale="3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.techstack__container {
  height: 100%;
  padding-top: 5rem;
}
.techstack__content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h5 {
    font-size: 1.2rem;
    font-weight: 400;
  }
  h2 {
    font-size: 2rem;
  }
}
.techstack__grid {
  margin-top: 3rem;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 8rem;
  margin-top: 5rem;
}
.stack {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .name {
    font-weight: 600;
    font-size: 1.4rem;
  }
  &.backendstack {
    flex-direction: row-reverse;
  }
  &.servers {
    flex-direction: row-reverse;
  }
}
.name {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-left: 1rem;
  flex: 3;
  border-right: 1px solid white;
}
.backendstack {
  &.name {
    flex: 3;
  }
  &.icons {
    flex: 7;
  }
}
.backendstack,
.servers {
  .name {
    border-right: none;
    border-left: 1px solid white;
  }
}
.icons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: 100%;
  width: 100%;
  flex: 7;
  position: relative;
}
.jstscontainer {
  padding: 2rem;
  position: relative;
}
.stack {
  &.servers {
    .icons {
      grid-template-rows: repeat(1, 1fr);
    }
  }
  &.database {
    .icons {
      grid-template-rows: repeat(1, 1fr);
    }
  }
}
.icon {
  position: relative;
  place-self: center;
  padding: 2.4rem;
  background: #00213f;
  border-radius: 10px;
  z-index: 999;
  margin: 2rem;
  &#vue {
    box-shadow: 0px 0px 25px 2px #0dd459;
  }
  &#scss {
    box-shadow: 0px 0px 25px 2px #ff149d;
  }
  &#js {
    box-shadow:
      2px -2px 15px 2px rgb(17, 0, 255),
      -2px 2px 15px 5px rgb(255, 217, 0);
  }
  &#html {
    box-shadow: 0px 0px 25px 2px #ff9901;
  }
  &#electron {
    box-shadow: 0px 0px 25px 2px #0adae9;
  }
  &#python {
    box-shadow: 0px 0px 25px 2px #eeff06;
  }
  &#laravel {
    box-shadow: 0px 0px 25px 2px #f82205;
  }
  &#csharp {
    box-shadow: 0px 0px 25px 2px #bc0ae9;
  }
  &#node {
    box-shadow: 0px 0px 25px 2px #6cc24a;
  }
  &#mssql {
    box-shadow: 0px 0px 25px 2px #bebebe;
  }
  &#pgsql {
    box-shadow: 0px 0px 25px 2px #0746ce;
  }
  &#nginx {
    box-shadow: 0px 0px 25px 2px #2daf05;
  }
  &#apache {
    box-shadow: 0px 0px 25px 2px #f14704;
  }
  &#debian {
    box-shadow: 0px 0px 25px 2px #d70a53;
  }
}
.icon::after {
  content: '';
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.726);
  z-index: 1;
  display: none;
  border-radius: 12px;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
}
.icon:hover::after {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 600;
  opacity: 1;
}
#vue:hover::after {
  content: 'VUE';
}
#scss:hover::after {
  content: 'SCSS';
}
#js:hover::after {
  content: 'JS/TS';
}
#html:hover::after {
  content: 'HTML';
}
#electron:hover::after {
  content: 'Electron';
}
#python:hover::after {
  content: 'Python';
}
#laravel:hover::after {
  content: 'Laravel';
}
#csharp:hover::after {
  content: 'C#';
}
#node:hover::after {
  content: 'NodeJS';
}
#mssql:hover::after {
  content: 'MSSQL';
}
#pgsql:hover::after {
  content: 'PGSQL';
}
#nginx:hover::after {
  content: 'Nginx';
}
#apache:hover::after {
  content: 'Apache';
}
#debian:hover::after {
  content: 'Debian';
}
.tsicon {
  position: absolute;
  top: 50%;
  left: 51%;
  transform: translate(-50%, -50%);
}
.tsicon {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 0%);
}
@media screen and (max-width: 980px) {
  .stack {
    flex-direction: column;
    .name {
      border: unset;
      padding: 0;
    }
    &.backendstack,
    &.servers {
      flex-direction: column;
    }
    &.database {
      .icons {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  .icons {
    &.servers {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
@media screen and (max-width: 680px) {
  .icons {
    grid-template-columns: repeat(2, 1fr);
    &.servers {
      grid-template-columns: repeat(2, 1fr);
    }
    .icon {
      padding: 1.4rem;
    }
  }
  .techstack__grid {
    gap: 0;
  }
}
</style>
<script>
export default {
  data() {
    return {
      technologies: [
        {
          name: `Frontend`,
          className: `frontname`,
          techs: [
            {
              id: `vue`,
              iconName: `vi-file-type-vue`
            },
            {
              id: `scss`,
              iconName: `vi-file-type-scss`
            },
            {
              id: `js`,
              iconName: `vi-file-type-js-official`
            },
            {
              id: `html`,
              iconName: `vi-file-type-html`
            },
            {
              id: `electron`,
              iconName: `io-logo-electron`
            }
          ]
        },
        {
          name: `Backend`,
          className: `backendstack`,
          techs: [
            {
              id: `python`,
              iconName: `vi-file-type-python`
            },
            {
              id: `laravel`,
              iconName: `fa-laravel`
            },
            {
              id: `node`,
              iconName: `vi-file-type-node`
            },
            {
              id: `csharp`,
              iconName: `si-csharp`
            }
          ]
        },
        {
          name: `Database`,
          className: `database`,
          techs: [
            {
              id: `mssql`,
              iconName: `si-microsoftsqlserver`
            },
            {
              id: `pgsql`,
              iconName: `vi-file-type-pgsql`
            }
          ]
        },
        {
          name: `Servers`,
          className: `servers`,
          techs: [
            {
              id: `nginx`,
              iconName: `vi-file-type-nginx`
            },
            {
              id: `apache`,
              iconName: `vi-file-type-apache`
            },
            {
              id: `debian`,
              iconName: `fc-debian`
            }
          ]
        }
      ]
    }
  }
}
</script>
