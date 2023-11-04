import { useState, useEffect } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import { Link } from "../Link/Link"
import { SelectedPage } from "@/shared/types"

type NavBarProps = {
  selectedPage: SelectedPage,
  setSelectedPage: (value:SelectedPage)=> void
}

export const NavBar = ({selectedPage, setSelectedPage}: NavBarProps) => {
  

  const flexBetween = "flex items-center justify-between" // This variable is to make the effect of a navbar :d

  return (
    <header>
     <nav className={`${flexBetween} fixed top-0 z-30 w-full  py-6 `} >
      <div className={`${flexBetween} mx-auto w-5/6`}>
      <div className={`${flexBetween} w-full gap-16 `}>
          <img src={Logo} alt="logo" />
          {/* left Side of NavBar */}
        </div>
        <div className={`${flexBetween} w-full`}>
          <ul className={`${flexBetween} gap-8 text-sm `}>
            <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Home"  />
            <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Benefits"/>
            <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Our Classes"/>
            <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Contact us"/>
            
          </ul>
          <div className={`${flexBetween} gap-8`} >
            <p>Sign In</p>
            <button>Become a Member</button>
          </div>
        </div>
      </div>
       
      
      </nav>  
    </header>
  )
}

export default NavBar