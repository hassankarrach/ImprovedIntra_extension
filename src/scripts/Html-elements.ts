import { Data } from '../types/types'
import {
  DiscordSvg,
  EvaluationSvg,
  FacebookSvg,
  LocationSvg,
  PhoneSvg,
  WalletSvg,
  XSvg,
} from '../utils/QuerySelectors'


const HeaderLeft = (Data : Data) => {
  return `
  <div class="Left">
    ${Banner(Data)}
    ${Extra()}
  </div>
    `
}
const HeaderRight = (Data : Data) => {
  return `
  <div class="Right">
    ${Socials()}
    <div class="Switches">
      <div id="CursusSwitchPlaceHolder"></div>
      <div id="LoginSwitchHolder"></div>
    </div>
  </div>
    `
}
const Header = (Data : Data) => {
  return `
    <div class="MyBanner">
      ${HeaderLeft(Data)}
      ${Blackhole('01/16/1992')}
      ${HeaderRight(Data)}
    </div>
  `
}
const Rank = (Rank: number) => {
  return ` <div class="Rank">
    <div class="Top3_badge">
      <svg
        class="Bagde"
        style="ertical-align: middle;fill: currentColor;overflow: hidden;"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 297.334 297.334"
        xml:space="preserve"
      >
        <g>
          <path
            d="M255.5,0h-213c-4.418,0-8.333,3.582-8.333,8v223c0,2.923,1.76,5.612,4.324,7.017l106.583,58.334
                    c1.196,0.655,2.561,0.983,3.884,0.983c1.323,0,2.667-0.328,3.864-0.983l106.344-58.334c2.564-1.404,4.001-4.094,4.001-7.017V8
                    C263.167,3.582,259.918,0,255.5,0z M247.167,226.261l-98.5,53.952l-98.5-53.952V16h197V226.261z"
          />
          <polygon
            points="215.167,209.092 215.167,171.5 148.751,206.5 82.167,171.5 82.167,209.001 148.75,245.334 	"
          />
          <polygon
            points="215.167,153.438 215.167,115.846 148.751,150.846 82.167,115.846 82.167,153.347 148.75,189.68 	"
          />
          <polygon
            points="122.753,115.683 149.499,96.263 176.247,115.723 166.032,84.33 192.778,65 159.718,65 149.499,33.557 139.282,65 
                    106.222,65 132.968,84.336 	"
          />
        </g>
      </svg>

      <div class="Rank">
        <h1>top ${Rank}</h1>
        <span>on his promo</span>
      </div>
    </div>
  </div>`
}
const Coalision = () => {
  return `<div class="CoalisionLogo"></div>`
}
const Status = (Status: string) => {
  return `
    <div class="Status">
      <div class="Dot"></div>
      <span>4h ago</span>
    </div>
  `
}
const UserInfos = (UserName: string, Login: string) => {
  return `<div class="UserInfos">
    <h1>${UserName}</h1>
    <p>@${Login}</p>
  </div>`
}
const ProgBar = (Level: number, Progress: number) => {
  return `
    <div class="ProgBar">
      <div class="ProgData">
        <h2>Level ${Level} - ${Progress}%</h2>
      </div>
    </div>
  `
}
const Banner = (Data : Data) => {
  return `
        <div class="Banner">
            ${Rank(Data.Rank)}
            ${Coalision()}
            ${Status(Data.Status)}
            ${UserInfos(Data.FullName, Data.Login)}
            ${ProgBar(Data.Level, Data.Progress)}
            <div class="Avatar"></div>
        </div>
    `
}
const Extra = () => {
  return `
        <div class="Extra">
            ${ExtraItem('Location', 'C3R1P2', LocationSvg)}
            ${ExtraItem('Wallet', '12₳', WalletSvg)}
            ${ExtraItem('Points', '12 Points', EvaluationSvg)}
        </div>
    `
}
const ExtraItem = (ItemName: string, ItemValue: string, ItemSvg: string) => {
  return `
        <div class="Item ${ItemName}">
            ${ItemSvg}
            <span>${ItemValue}</span>
        </div>
    `
}
const Blackhole = (DeadlineDate: string) => {
  const Days = 5 //tmp
  const Hours = 13 //tmp

  return `
    <div class="Blackhole">
      <div class="Days">
        <h1>${Days}</h1>
        <h2>Days</h2>
      </div>

      <div class="Hours">
        <h1>${Hours}</h1>
        <h2>Hours</h2>
      </div>

      <div class="FinalDate">
        <h1>Milestone Deadline</h1>
        <h2>${DeadlineDate}</h2>
      </div>
    </div>
  `
}
const SocialItem = (SocialName: string, SocialSvg: string) => {
  return `
    <div class="Item">
      ${SocialSvg}
      <h3>${SocialName}</h3>
    </div>
  `
}
const Socials = () => {
  return `
    <div class="Socials">
      ${SocialItem('@Zero', DiscordSvg)}
      ${SocialItem('@Zero', FacebookSvg)}
      ${SocialItem('@Zero', XSvg)}
      ${SocialItem('34634634634', PhoneSvg)}
    </div>
  `
}
export const GetHeader = (Data: Data) => {
  return Header(Data);
}
