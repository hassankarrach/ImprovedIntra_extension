import { Data } from '../types/types'
import { ElObserver } from '../utils/Observer'
import { CursusSwitch, PageContainer } from '../utils/QuerySelectors'
import { GetHeader } from './Html-elements'

class UiMonitor {
  private Data: Data

  constructor() {
    this.Data = {
      UsefullElements: {
        PageContainer: null,
        CursusSwitch: null,
        PointsDonation: null,
        HeaderContainer: null,
        HolyGraph: null,
        LoginSwitch: null,
      },
      FullName: 'Hassan Karrach',
      Login: 'hkarrach',
      NickName: 'Zero',
      Status: 'online',
      Location: 'Unavailable',
      lastSeen: '4h ago', // Last Seen
      Avatar: '.jpg',
      BannerUrl: '.gif', //Banner
      DeadlineDate: new Date('2021-12-31'),
      Level: 5,
      Progress: 50,
      CoalisionSvg: 'logo.svg',
      CoalisionName: 'Bios',
      CoalisionScore: 100,
      CoalitionRank: 1,
      WalletPoints: 14,
      EvaluationPoints: 40,
      Grade: 'Learner',
      Rank: 5, // Rank
    }
  }

  InjectFonts = (FontUrl: string) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = FontUrl
    document.head.appendChild(link)
  }

  setUsefullElements = (
    PageContainer:string,
    HeaderContainerSelector: string,
    PointsDonationSelector: string,
    HolyGraphSelector: string,
    CursusSwitchSelector: string,
    LoginSwitchSelector: string,
  ) => {
    ElObserver(PageContainer, (el: HTMLElement) => {
      this.Data.UsefullElements.PageContainer = el

      console.log("get here")

      const DebugerEl = document.createElement('div')
      // give it id
      DebugerEl.id = 'Debuuger'
      DebugerEl.innerText = 'Debuuger'
      
      DebugerEl.addEventListener('click', () => {
        this.Debuger()
      })
    
      el.appendChild(DebugerEl)
      // this.InjectBanner()
      // this.HideCurrentHeader()
    })
    ElObserver(HeaderContainerSelector, (el: HTMLElement) => {
      this.Data.UsefullElements.HeaderContainer = el
      // this.HideCurrentHeader()
    })
    ElObserver(PointsDonationSelector, (el: HTMLElement) => {
      this.Data.UsefullElements.PointsDonation = el
    })
    ElObserver(HolyGraphSelector, (el: HTMLElement) => {
      this.Data.UsefullElements.HolyGraph = el
    })
    ElObserver(CursusSwitchSelector, (el: HTMLElement) => {
      this.Data.UsefullElements.CursusSwitch = el
      const Container = document.querySelector('#CursusSwitchPlaceHolder') as HTMLElement;
      Container.appendChild(el)
    })
    ElObserver(LoginSwitchSelector, (el: HTMLElement) => {
      this.Data.UsefullElements.LoginSwitch = el
      const Container = document.querySelector('#LoginSwitchHolder') as HTMLElement;
      Container.append(el);
    })
  }

  HideCurrentHeader = () => {
    if (this.Data.UsefullElements.HeaderContainer)
      this.Data.UsefullElements.HeaderContainer.style.opacity = '0'
  }

  InjectBanner = () => {
    const HeaderContent = GetHeader(this.Data)
    const Header = document.createElement('div') as HTMLElement
    Header.innerHTML = HeaderContent

    if (this.Data.UsefullElements.PageContainer)
      this.Data.UsefullElements.PageContainer.prepend(Header)
  }

  Debuger = () => {
    console.log('Debuger')
    console.log(this.Data)  
  }
}

export { UiMonitor }
