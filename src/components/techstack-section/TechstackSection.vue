<script setup></script>
<template>
  <section class="techstack__container">
    <div class="techstack__content">
      <h5>Moje umiejętności</h5>
      <h2>Tech Stack</h2>
      <div class="techstack__grid">
        <div class="stack frontendstack">
          <div class="name">Frontend</div>
          <div class="icons">
            <div class="icon" id="vue"><v-icon name="vi-file-type-vue" scale="3" /></div>
            <div class="icon" id="scss"><v-icon name="vi-file-type-scss" scale="3" /></div>
            <div class="icon" id="js">
              <v-icon name="vi-file-type-js-official" class="jsicon" scale="3" />
              <v-icon name="vi-file-type-typescript-official" class="tsicon" scale="3" />
            </div>
            <div class="icon" id="html"><v-icon name="vi-file-type-html" scale="3" /></div>
            <div class="icon" id="electron"><v-icon name="io-logo-electron" scale="3" /></div>
          </div>
        </div>
        <div class="stack backendstack">
          <div class="icons">
            <div class="icon" id="python"><v-icon name="vi-file-type-python" scale="3" /></div>
            <div class="icon" id="laravel"><v-icon name="fa-laravel" scale="3" /></div>
            <div class="icon" id="node"><v-icon name="vi-file-type-node" scale="3" /></div>
            <div class="icon" id="csharp"><v-icon name="si-csharp" scale="3" /></div>
          </div>
          <div class="name">Backend</div>
        </div>
        <div class="stack database">
          <div class="name">Database</div>
          <div class="icons database">
            <div class="icon" id="mssql"><v-icon name="si-microsoftsqlserver" scale="3" /></div>
            <div class="icon" id="pgsql"><v-icon name="vi-file-type-pgsql" scale="3" /></div>
          </div>
        </div>
        <div class="stack servers">
          <div class="icons servers">
            <div class="icon" id="nginx"><v-icon name="vi-file-type-nginx" scale="3" /></div>
            <div class="icon" id="apache"><v-icon name="vi-file-type-apache" scale="3" /></div>
            <div class="icon" id="debian"><v-icon name="fc-debian" scale="3" /></div>
          </div>
          <div class="name">Servers</div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.techstack__container {
  width: 100%;
  height: 100%;
  display: block;
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
  grid-template-rows: repeat(3, 1fr);
  gap: 8rem;
  padding: 1rem;
  padding-left: 5rem;
  padding-right: 5rem;
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
}
.name {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
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
  &.servers {
    height: 100%;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    justify-self: center;
  }
  &.database {
    height: 100%;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
}
.jstscontainer {
  padding: 2rem;
  position: relative;
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
    box-shadow: 0px 0px 25px 2px #f79606;
  }
  &#electron {
    box-shadow: 0px 0px 25px 2px #0adae9;
  }
  &#python {
    box-shadow: 0px 0px 25px 2px #deee05;
  }
  &#laravel {
    box-shadow: 0px 0px 25px 2px #f82205;
  }
  &#csharp {
    box-shadow: 0px 0px 25px 2px #bc0ae9;
  }
  &#node {
    box-shadow: 0px 0px 25px 2px #0adb2d;
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
    box-shadow: 0px 0px 25px 2px #c42929;
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
}
.icon:hover::after {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 600;
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
  content: 'Node JS';
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
</style>
