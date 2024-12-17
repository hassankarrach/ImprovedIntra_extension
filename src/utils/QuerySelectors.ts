// ========= Usefull Html Elements =>
export const PageContainer = 'body > div.page > div.page-content.page-content-fluid > div > div.align-top > div';
export const HeaderContainer = 'body > div.page > div.page-content.page-content-fluid > div > div.align-top > div > div.container-item.profile-item.full-width';
export const CursusSwitch = 'body > div.page > div.page-content.page-content-fluid > div > div.align-top > div > div.container-item.profile-item.full-width > div > div.user-column.flex.flex-direction-column > div._ > div.col-md-3.padding-0.profile-infos.profile-right-box > div > div > div:nth-child(3) > span.user-cursus > select';
export const LoginSwitch =  '#title-selector';
export const PointsDonation = 'body > div.page > div.page-content.page-content-fluid > div > div.align-top > div > div.container-item.profile-item.full-width > div > div.user-column.flex.flex-direction-column > div._ > div.col-md-3.padding-0.profile-infos.profile-right-box > div > div > div.user-correction-point.user-inline-stat > span.user-correction-point-value.d-flex.align-items-center > div:nth-child(3) > span > a';
export const HolyGraph = 'body > div.page > div.page-content.page-content-fluid > div > div.align-top > div > div.container-item.profile-item.full-width > div > div.user-column.flex.flex-direction-column > div.user-primary > div > h2 > div.pull-right.button-actions.margin-right-42 > a:nth-child(1)';


export const UserProfile = document.querySelector('body > div.page > div.page-content.page-content-fluid > div > div.container-item.full-width.profile-item.profile-on-users') as HTMLElement;

// ========= User data =>
export const FullName = document.querySelector('div') as HTMLElement
export const Login = document.querySelector('div') as HTMLElement
export const EvaluationPoints = document.querySelector('div') as HTMLElement
export const WalletPoints = document.querySelector('div') as HTMLElement
export const Level = document.querySelector('div') as HTMLElement
export const Progress = document.querySelector('div') as HTMLElement
export const Grade = document.querySelector('div') as HTMLElement
export const Location = document.querySelector('div') as HTMLElement
export const Avatar = document.querySelector('div') as HTMLElement
export const DeadlineDate = document.querySelector(
  '#milestones-tab > div.milestone > div.container-end-goal > div',
) as HTMLElement

// ========= Coalision =>
export const CoalisionSvg = document.querySelector('div') as HTMLElement
export const CoalisionName = document.querySelector('div') as HTMLElement
export const CoalisionScore = document.querySelector('div') as HTMLElement
export const CoalitionRank = document.querySelector('div') as HTMLElement

// ========= Svgs =>
export const LocationSvg = `
  <svg
    class="Icon"
    style="ertical-align: middle;fill: currentColor;overflow: hidden;"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 256 256"
    enable-background="new 0 0 256 256"
    xml:space="preserve"
  >
    <metadata>Svg Vector Icons : http://www.onlinewebfonts.com/icon</metadata>
    <g>
      <g>
        <path
          d="M229,22.2H27c-9.4,0-17,7.8-17,17.3v132.2c0,9.5,7.6,17.3,17,17.3h91.8v26.8H77.1c-5,0-9,4-9,9c0,5,4,9,9,9h101.7c5,0,9-4,9-9c0-5-4-9-9-9h-41.7V189H229c9.4,0,17-7.8,17-17.3V39.5C246,30,238.4,22.2,229,22.2z M227.7,170.7H28.3V40.5h199.4V170.7z"
        />
      </g>
    </g>
  </svg>
`
export const WalletSvg = `
  <svg
    class="Icon"
    style="ertical-align: middle;fill: currentColor;overflow: hidden;"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 458.531 458.531"
    xml:space="preserve"
  >
    <g id="XMLID_830_">
      <g>
        <g>
          <path
            d="M336.688,343.962L336.688,343.962c-21.972-0.001-39.848-17.876-39.848-39.848v-66.176
							c0-21.972,17.876-39.847,39.848-39.847h103.83c0.629,0,1.254,0.019,1.876,0.047v-65.922c0-16.969-13.756-30.725-30.725-30.725
							H30.726C13.756,101.49,0,115.246,0,132.215v277.621c0,16.969,13.756,30.726,30.726,30.726h380.943
							c16.969,0,30.725-13.756,30.725-30.726v-65.922c-0.622,0.029-1.247,0.048-1.876,0.048H336.688z"
          />
          <path
            d="M440.518,219.925h-103.83c-9.948,0-18.013,8.065-18.013,18.013v66.176c0,9.948,8.065,18.013,18.013,18.013h103.83
							c9.948,0,18.013-8.064,18.013-18.013v-66.176C458.531,227.989,450.466,219.925,440.518,219.925z M372.466,297.024
							c-14.359,0-25.999-11.64-25.999-25.999s11.64-25.999,25.999-25.999c14.359,0,25.999,11.64,25.999,25.999
							C398.465,285.384,386.825,297.024,372.466,297.024z"
          />
          <path
            d="M358.169,45.209c-6.874-20.806-29.313-32.1-50.118-25.226L151.958,71.552h214.914L358.169,45.209z"
          />
        </g>
      </g>
    </g>
  </svg>
`
export const EvaluationSvg = `
  <svg
    class="Icon"
    style="ertical-align: middle;fill: currentColor;overflow: hidden;"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M426.666667 170.666667H170.666667c-47.146667 0-84.906667 38.186667-84.906667 85.333333L85.333333 768c0 47.146667 38.186667 85.333333 85.333334 85.333333h682.666666c47.146667 0 85.333333-38.186667 85.333334-85.333333V341.333333c0-47.146667-38.186667-85.333333-85.333334-85.333333H512l-85.333333-85.333333z"
    />
  </svg>
`
export const DiscordSvg = `<svg
  xmlns="http://www.w3.org/2000/svg"
  shape-rendering="geometricPrecision"
  text-rendering="geometricPrecision"
  image-rendering="optimizeQuality"
  fill-rule="evenodd"
  clip-rule="evenodd"
  viewBox="0 0 512 512"
>
  <path
    fill="var(--main-midDark-bg)"
    d="M105 0h302c57.928.155 104.845 47.072 105 104.996V407c-.155 57.926-47.072 104.844-104.996 104.998L105 512C47.074 511.844.156 464.926.002 407.003L0 105C.156 47.072 47.074.155 104.997 0H105z"
  />
  <g data-name="å¾å± 2">
    <g data-name="Discord Logos">
      <path
        fill="white"
        id="SocialIconInner"
        fill-rule="nonzero"
        d="M368.896 153.381a269.506 269.506 0 00-67.118-20.637 186.88 186.88 0 00-8.57 17.475 250.337 250.337 0 00-37.247-2.8c-12.447 0-24.955.946-37.25 2.776-2.511-5.927-5.427-11.804-8.592-17.454a271.73 271.73 0 00-67.133 20.681c-42.479 62.841-53.991 124.112-48.235 184.513a270.622 270.622 0 0082.308 41.312c6.637-8.959 12.582-18.497 17.63-28.423a173.808 173.808 0 01-27.772-13.253c2.328-1.688 4.605-3.427 6.805-5.117 25.726 12.083 53.836 18.385 82.277 18.385 28.442 0 56.551-6.302 82.279-18.387 2.226 1.817 4.503 3.557 6.805 5.117a175.002 175.002 0 01-27.823 13.289 197.847 197.847 0 0017.631 28.4 269.513 269.513 0 0082.363-41.305l-.007.007c6.754-70.045-11.538-130.753-48.351-184.579zM201.968 300.789c-16.04 0-29.292-14.557-29.292-32.465s12.791-32.592 29.241-32.592 29.599 14.684 29.318 32.592c-.282 17.908-12.919 32.465-29.267 32.465zm108.062 0c-16.066 0-29.267-14.557-29.267-32.465s12.791-32.592 29.267-32.592c16.475 0 29.522 14.684 29.241 32.592-.281 17.908-12.894 32.465-29.241 32.465z"
        data-name="Discord Logo - Large - White"
      />
    </g>
  </g>
</svg>`
export const FacebookSvg = `<svg
  xmlns="http://www.w3.org/2000/svg"
  shape-rendering="geometricPrecision"
  text-rendering="geometricPrecision"
  image-rendering="optimizeQuality"
  fill-rule="evenodd"
  clip-rule="evenodd"
  viewBox="0 0 512 509.64"
>
  <rect
    fill="var(--main-midDark-bg)"
    width="512"
    height="509.64"
    rx="115.612"
    ry="115.612"
  />
  <path
    fill="#fff"
    id="SocialIconInner"
    d="M287.015 509.64h-92.858V332.805h-52.79v-78.229h52.79v-33.709c0-87.134 39.432-127.522 124.977-127.522 16.217 0 44.203 3.181 55.651 6.361v70.915c-6.043-.636-16.536-.953-29.576-.953-41.976 0-58.194 15.9-58.194 57.241v27.667h83.618l-14.365 78.229h-69.253V509.64z"
  />
</svg>`
export const XSvg = `<svg
  xmlns="http://www.w3.org/2000/svg"
  shape-rendering="geometricPrecision"
  text-rendering="geometricPrecision"
  image-rendering="optimizeQuality"
  fill-rule="evenodd"
  clip-rule="evenodd"
  fill="var(--main-midDark-bg)"
  viewBox="0 0 512 509.64"
>
  <rect width="512" height="509.64" rx="115.61" ry="115.61" />
  <path
    fill="white"
    id="SocialIconInner"
    fill-rule="nonzero"
    d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z"
  />
</svg>`
export const PhoneSvg = `<svg
  id="Layer_1"
  data-name="Layer 1"
  xmlns="http://www.w3.org/2000/svg"
  fill="var(--main-midDark-bg)"
  viewBox="0 0 122.88 122.88"
>
  <style>
    .cls-1 {
      fill-rule: evenodd;
    }
    .cls-2 {
      fill: white !important;
      transition: fill 0.3s ease;
    }
    .MyBanner .Right .Socials .Item:hover .cls-2 {
      fill: var(--main-color) !important;
    }
  </style>
  <title>call-square</title>
  <path
    class="cls-1"
    d="M21.87,0H101a21.93,21.93,0,0,1,21.87,21.87V101A21.93,21.93,0,0,1,101,122.88H21.87A21.93,21.93,0,0,1,0,101V21.87A21.93,21.93,0,0,1,21.87,0Z"
  />
  <path
    class="cls-2"
    d="M43.93,55.89C48.86,64.78,55.31,73,67.24,79.09c1.79.92,3.42,0,4.82-1.45,2.08-2.06,5-7.9,8.49-6.27l13,7.5c2.66,1.8,1.87,6,0,9.24-2.57,4.54-7.77,6-12.68,6.76C73.38,96,66.66,93.46,58.54,88.42c-2-1.21-4.09-2.51-6.19-4.09-13.31-10-27-28.2-24.46-44.3C29,32.87,33.73,27,43,27.83L51.32,42c1.7,2.12.45,4.09-2.14,6s-6.85,4.16-5.25,7.93Z"
  />
</svg>`
export const LinkedInSvg = ``
export const GithubSvg = ``
