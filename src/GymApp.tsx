import NavBar from "./components/NavBar/NavBar";
import {useState, useEffect} from "react"
import { SelectedPage } from "./shared/types";
import Home from "./components/Home/Home";




export const GymApp = () => {
const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

useEffect(()=> {
  const handleScroll = ()=> {
    if(window.scrollY === 0) {
      setIsTopOfPage(true)
      setSelectedPage(SelectedPage.Home)
    } else {
      setIsTopOfPage(false)
    }


  }

  window.addEventListener("scroll", handleScroll)
  return ()=> window.removeEventListener("scroll", handleScroll)

},[])



  return <div className="app bg-gray-20">
    <NavBar selectedPage={selectedPage} isTopOfPage={isTopOfPage} setSelectedPage={setSelectedPage}/>
    <Home/>


  </div>;
};
