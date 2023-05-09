import React from "react";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
// import HeaderMobile from "./Mob/HeaderMobile";
// import HeaderDesktop from "./Des/HeaderDesktop";

import './HeaderComponent.css';

const HeaderDesktopView = React.lazy(() => import('./Des/HeaderDesktop'));
const HeaderMobileView = React.lazy(() => import('./Mob/HeaderMobile'));

const HeaderComponent = () => {

    return (
        <>
            <React.Suspense fallback={<></>}>
                {(isBrowser) && <HeaderDesktopView />}
                {(isMobile) && <HeaderMobileView />}
            </React.Suspense>
        </>
    )
}

export default HeaderComponent;