import { UiMonitor } from './DomMonitor'

import {
  MyProfileContainer,
  UserProfileContainer,
  PointsDonation,
  HolyGraph,
  CursusSwitch,
  LoginSwitch,
  MyPageContainer,
  UserPageContainer,
} from '../utils/QuerySelectors'

const Ui = new UiMonitor()

// Inject Font
Ui.InjectFonts('https://fonts.cdnfonts.com/css/xirod');

document.addEventListener('DOMContentLoaded', () => {
  Ui.setUsefullElements(
    MyPageContainer,
    UserPageContainer,
    MyProfileContainer,
    UserProfileContainer,
    PointsDonation,
    HolyGraph,
    CursusSwitch,
    LoginSwitch,
  )
})
