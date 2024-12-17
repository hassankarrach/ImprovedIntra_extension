import { UiMonitor } from './DomMonitor'

import {
  HeaderContainer,
  PointsDonation,
  HolyGraph,
  CursusSwitch,
  LoginSwitch,
  PageContainer,
} from '../utils/QuerySelectors'

const Ui = new UiMonitor()

// Inject Font
Ui.InjectFonts('https://fonts.cdnfonts.com/css/xirod')

document.addEventListener('DOMContentLoaded', () => {
  Ui.setUsefullElements(
    PageContainer,
    HeaderContainer,
    PointsDonation,
    HolyGraph,
    CursusSwitch,
    LoginSwitch,
  )
})
