// MAIN COLORS - VUESAX THEME COLORS
let colors = {
    // primary: '#7367F0',

    // primary: '#7367F0',
    primary: localStorage.getItem('primaryColor') || '#7367F0',
    success: '#28C76F',
    danger: '#EA5455',
    warning: '#FF9F43',
    dark: '#1E1E1E',
}

import Vue from 'vue'
import Vuesax from 'vuesax'
Vue.use(Vuesax, { theme: { colors } });


// CONFIGS
const themeConfig = {
    theme: localStorage.getItem('theme') || 'light',						// options[String]: 'light'(default), 'dark', 'semi-dark'
    sidebarCollapsed: localStorage.getItem('reduced_sidebar') || false,			// options[Boolean]: true, false(default)
    navbarColor: localStorage.getItem('navbarColorLocal') || "#7367F0",				// options[String]: HEX color / rgb / rgba / Valid HTML Color name - (default: #fff)
    navbarType: "sticky",				// options[String]: floating(default) / static / sticky / hidden
    footerType: "sticky",				// options[String]: static(default) / sticky / hidden
    routerTransition: localStorage.getItem('routerTransitionLocal') || 'zoom-fade',		// options[String]: zoom-fade / slide-fade / fade-bottom / fade / zoom-out / none(default)
    disableCustomizer: false,			// options[Boolean]: true, false(default)
    hideScrollToTop: localStorage.getItem('hideScrollToTopLocal') || false,				// options[Boolean]: true, false(default)
    disableThemeTour: true,					// options[Boolean]: true, false(default)
    // NOTE: themeTour will be disabled in screens < 1200. Please refer docs for more info.
}

export default themeConfig
