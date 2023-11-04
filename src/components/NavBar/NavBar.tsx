import { useState, useEffect } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"

type Props = {}

const NavBar = (props: Props) => {
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
            <li>Home</li>
            <li>About</li>
            <li>Benefits</li>
            <li>Our Classes</li>
            <li>Contact Us</li>
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