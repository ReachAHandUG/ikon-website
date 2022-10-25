import React from "react"
import { Provider } from "../../utilities/context"
import Reset from "../../styles/reset"
import Theme from "../../styles/theme"
import Styles from "../../styles/shared"
import Grain from "../layout/grain"
import RahuLogo from "./rahu-logo"
import Socials from "./socials"
import SideMenu from "./side-menu"
import Footer from "./footer"
import Preloader from "./preloader"
import Category from "../awards/categories/single"
import MenuToggle from "./menu-toggle"
import TopMenu from "./splash-menu"
import ScrollDownPrompt from "./scroll-down-prompt"

const Ele = ({ children }) => {
  return (
    <Provider>
      <Theme>
        <Reset />
        <Styles />
        {children}
        <ScrollDownPrompt />
        <Grain />
        <TopMenu />
        <SideMenu />
        <MenuToggle />
        <Category />
        <RahuLogo />
        <Socials />
        <Footer />
        <Preloader />
      </Theme>
    </Provider>
  )
}

export default Ele
