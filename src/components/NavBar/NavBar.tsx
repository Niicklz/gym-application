import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import { Link } from "../Link/Link"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import Button from "../Button/Button"

type NavBarProps = {
  selectedPage: SelectedPage,
  setSelectedPage: (value:SelectedPage)=> void
  isTopOfPage: boolean
}

export const NavBar = ({selectedPage, setSelectedPage, isTopOfPage}: NavBarProps) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const navBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  const flexBetween = "flex items-center justify-between" // This variable is to make the effect of a navbar :d
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <header>
     <nav className={`${navBackground} ${flexBetween} fixed top-0 z-30 w-full  py-6 `} >
      <div className={`${flexBetween} test mx-auto w-5/6`}>
      <div className={`${flexBetween}  w-full gap-16`}>
          <img src={Logo} alt="logo" />
          {/* left Side of NavBar */}

          {/* right side of navbar */}
          {isAboveMediumScreens ? <div className={`${flexBetween} w-full`}>
          <ul className={`${flexBetween} gap-8 text-sm `}>
            <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Home"  />
            <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Benefits"/>
            <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Our Classes"/>
            <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Contact us"/>
            
          </ul>
          <div className={`${flexBetween} gap-8`} >
            <p>Sign In</p>
            <Button setSelectedPage={setSelectedPage}>Become a Member</Button>
          </div>
        </div> : <button className="rounded-full bg-secondary-500 p-2" onClick={()=> setIsMenuToggled(!isMenuToggled)}><Bars3Icon className="h-6 w-6 text-white"/></button>}
        </div>
      
      </div>
       
      
      </nav>
      {/*Mobile Menu */}

      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px]   bg-primary-100 drop-shadow-xl">
          <div className=" flex justify-end p-12">
          <button onClick={()=> setIsMenuToggled(!isMenuToggled)} className="close-btn "><XMarkIcon className="h-6 w-6 text-gray-400"/></button>
          </div>
         {/*Menu Items */}
         <ul className={`flex flex-col px-20 gap-8 text-2xl`}>
            <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Home"  />
            <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Benefits"/>
            <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Our Classes"/>
            <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Contact us"/>
            
          </ul>
        </div>
      )}  
    </header>
  )
}

export default NavBar