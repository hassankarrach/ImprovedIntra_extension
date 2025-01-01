// Status type for interfaces
export type Status = 'online' | 'offline' | 'idle';

export interface UsefullElements {
    MyPageContainer : HTMLElement | null;
    UserPageContainer : HTMLElement | null;
    MyProfileContainer : HTMLElement | null;
    UserProfileContainer : HTMLElement | null;
    PointsDonation : HTMLElement | null;
    HolyGraph : HTMLElement | null;
    CursusSwitch : HTMLElement | null;
    LoginSwitch : HTMLElement | null;
}
 
export interface Data {
    UsefullElements : UsefullElements;
    FullName : string;
    Login : string;
    NickName : string;
    Status : Status;
    Location : string | null;
    lastSeen : string;
    Avatar : string;
    BannerUrl : string;
    DeadlineDate : Date;
    Level : number;
    Progress : number;
    CoalisionSvg : string;
    CoalisionName : string;
    CoalisionScore : number;
    CoalitionRank : number;
    WalletPoints : number;
    EvaluationPoints : number;
    Grade : string;
    Rank : number;
}
