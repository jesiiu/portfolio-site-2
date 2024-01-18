import { createApp } from 'vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { MotionPlugin } from '@vueuse/motion'
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
  RiWhatsappFill,
  BiLinkedin
} from 'oh-vue-icons/icons'
import App from './App.vue'

const app = createApp(App)
app.use(MotionPlugin)
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
  RiWhatsappFill,
  BiLinkedin
)
app.component('v-icon', OhVueIcon)
app.mount('#app')
