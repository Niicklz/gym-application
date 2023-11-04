import { useState, useEffect } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import { Link } from "../Link/Link"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"

type NavBarProps = {
  selectedPage: SelectedPage,
  setSelectedPage: (value:SelectedPage)=> void
}

export const NavBar = ({selectedPage, setSelectedPage}: NavBarProps) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)

  const flexBetween = "flex items-center justify-between" // This variable is to make the effect of a navbar :d
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <header>
     <nav className={`${flexBetween} fixed top-0 z-30 w-full  py-6 `} >
      <div className={`${flexBetween} mx-auto w-5/6`}>
      <div className={`${flexBetween} w-full gap-16 `}>
          <img src={Logo} alt="logo" />
          {/* left Side of NavBar */}
        </div>
        {isAboveMediumScreens ? <div className={`${flexBetween} w-full gap-8`}>
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
        </div> : <button className="rounded-full bg-secondary-500 p-2" onClick={()=> setIsMenuToggled(!isMenuToggled)}><Bars3Icon className="h-6 w-6 text-white"/></button>}
      </div>
       
      
      </nav>  
    </header>
  )
}

export default NavBar