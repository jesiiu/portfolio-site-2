import { createApp } from 'vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  ViFileTypeVue,
  ViFileTypeScss,
  ViFileTypeJsOfficial,
  ViFileTypeTypescriptOfficial,
  ViFileTypeHtml,
  ViFileTypePython,
  FaLaravel,
  SiCsharp,
  IoLogoElectron,
  ViFileTypeNode,
  SiMicrosoftsqlserver,
  ViFileTypePgsql,
  ViFileTypeNginx,
  ViFileTypeApache,
  FcDebian,
  IoLogoGithub,
  MdEmail,
  BiMessenger,
  RiWhatsappFill
} from 'oh-vue-icons/icons'
import App from './App.vue'

const app = createApp(App)
addIcons(
  ViFileTypeVue,
  ViFileTypeScss,
  ViFileTypeJsOfficial,
  ViFileTypeTypescriptOfficial,
  ViFileTypeHtml,
  ViFileTypePython,
  FaLaravel,
  SiCsharp,
  IoLogoElectron,
  ViFileTypeNode,
  SiMicrosoftsqlserver,
  ViFileTypePgsql,
  ViFileTypeNginx,
  ViFileTypeApache,
  FcDebian,
  IoLogoGithub,
  MdEmail,
  BiMessenger,
  RiWhatsappFill
)
app.component('v-icon', OhVueIcon)
app.mount('#app')
