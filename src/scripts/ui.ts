import { InjectElements } from './utils'

const UserName = document.querySelector(
  '.user-primary .user-infos .profile-name .name span',
) as HTMLElement
const UserLogin = document.querySelector(
  '.user-primary .user-infos .profile-name .btn-group .dropdown-toggle .login',
) as HTMLElement
const CoalitionName = document.querySelector(
  '.user-primary .user-infos .profile-name .coalition-name .coalition-span',
) as HTMLElement
const CoalitionLogoUrl = document.querySelector(
  'body > div.page > div.page-content.page-content-fluid > div > div.align-top > div > div.container-item.profile-item.full-width > div.container-inner-item.profile-item-top.profile-banner.home-banner.flex.flex-direction-row > div.user-column.flex.flex-direction-column > div.user-primary > div > h2 > div.mini-banner.visible-xs.visible-sm.visible-md.inline.margin-right-10.hidden-lg > a > div'
) as HTMLImageElement


document.addEventListener('DOMContentLoaded', () => {
  // console.log(CoalitionLogoUrl);
  
  //display none of container
  InjectElements(UserName, UserLogin);

  // Container?.prepend(banner)
})
