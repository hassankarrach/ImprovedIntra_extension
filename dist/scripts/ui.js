const InjectElements = (UserName, UserLogin) => {
    const Container = document.querySelector('.container-inner-item .user-column');
    const Banner = document.createElement('div');
    Banner.innerHTML = `
	<div class="MyBanner">
	<div class="Left">
	  <div class="Banner">
		<div class="Status">
		  <div class="Dot"></div>
		  <span>Online</span>
		</div>

		<div class="UserInfos">
		  <h1>${UserName === null || UserName === void 0 ? void 0 : UserName.innerText}</h1>
		  <p>@${UserLogin === null || UserLogin === void 0 ? void 0 : UserLogin.innerText}</p>
		</div>

		<div class="ProgBar">
		  <div class="ProgData">
			<h2>Level 5 - 50%</h2>
		  </div>
		</div>
		



		<div class="Avatar">
		</div>

	  </div>

	  <div class="Extra">
		<div class="Item Location">
		<svg class="Icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 256" enable-background="new 0 0 256 256" xml:space="preserve">
		<metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
		<g><g><path fill="#000000" d="M229,22.2H27c-9.4,0-17,7.8-17,17.3v132.2c0,9.5,7.6,17.3,17,17.3h91.8v26.8H77.1c-5,0-9,4-9,9c0,5,4,9,9,9h101.7c5,0,9-4,9-9c0-5-4-9-9-9h-41.7V189H229c9.4,0,17-7.8,17-17.3V39.5C246,30,238.4,22.2,229,22.2z M227.7,170.7H28.3V40.5h199.4V170.7z"/></g></g>
		</svg>

		<span>C3R1P2</span>
		</div>

		<div class="Item">
		  <svg class="Icon" fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
			  viewBox="0 0 458.531 458.531" xml:space="preserve">
			<g id="XMLID_830_">
				<g>
					<g>
						<path d="M336.688,343.962L336.688,343.962c-21.972-0.001-39.848-17.876-39.848-39.848v-66.176
							c0-21.972,17.876-39.847,39.848-39.847h103.83c0.629,0,1.254,0.019,1.876,0.047v-65.922c0-16.969-13.756-30.725-30.725-30.725
							H30.726C13.756,101.49,0,115.246,0,132.215v277.621c0,16.969,13.756,30.726,30.726,30.726h380.943
							c16.969,0,30.725-13.756,30.725-30.726v-65.922c-0.622,0.029-1.247,0.048-1.876,0.048H336.688z"/>
						<path d="M440.518,219.925h-103.83c-9.948,0-18.013,8.065-18.013,18.013v66.176c0,9.948,8.065,18.013,18.013,18.013h103.83
							c9.948,0,18.013-8.064,18.013-18.013v-66.176C458.531,227.989,450.466,219.925,440.518,219.925z M372.466,297.024
							c-14.359,0-25.999-11.64-25.999-25.999s11.64-25.999,25.999-25.999c14.359,0,25.999,11.64,25.999,25.999
							C398.465,285.384,386.825,297.024,372.466,297.024z"/>
						<path d="M358.169,45.209c-6.874-20.806-29.313-32.1-50.118-25.226L151.958,71.552h214.914L358.169,45.209z"/>
					</g>
				</g>
			</g>
		  </svg>

		  <span>12₳</span>
		</div>

		<div class="Item">
		  <svg class="Icon" style="ertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M426.666667 170.666667H170.666667c-47.146667 0-84.906667 38.186667-84.906667 85.333333L85.333333 768c0 47.146667 38.186667 85.333333 85.333334 85.333333h682.666666c47.146667 0 85.333333-38.186667 85.333334-85.333333V341.333333c0-47.146667-38.186667-85.333333-85.333334-85.333333H512l-85.333333-85.333333z"  /></svg>
		  <span>12 Points</span>
		</div>
	  </div>
	</div>

	<div class="Blackhole">
	  <h1>79<span>Days</span></h1>
	</div>

	<div class="Right">
	</div>
  </div>
	`;
    Container === null || Container === void 0 ? void 0 : Container.prepend(Banner);
};

const UserName = document.querySelector('.user-primary .user-infos .profile-name .name span');
const UserLogin = document.querySelector('.user-primary .user-infos .profile-name .btn-group .dropdown-toggle .login');
document.querySelector('.user-primary .user-infos .profile-name .coalition-name .coalition-span');
document.querySelector('body > div.page > div.page-content.page-content-fluid > div > div.align-top > div > div.container-item.profile-item.full-width > div.container-inner-item.profile-item-top.profile-banner.home-banner.flex.flex-direction-row > div.user-column.flex.flex-direction-column > div.user-primary > div > h2 > div.mini-banner.visible-xs.visible-sm.visible-md.inline.margin-right-10.hidden-lg > a > div');
document.addEventListener('DOMContentLoaded', () => {
    // console.log(CoalitionLogoUrl);
    //display none of container
    InjectElements(UserName, UserLogin);
    // Container?.prepend(banner)
});
