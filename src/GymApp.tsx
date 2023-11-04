import NavBar from "./components/NavBar/NavBar";
import {useState} from "react"
import { SelectedPage } from "./shared/types";




export const GymApp = () => {
const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)



  return <div className="app bg-gray-20">
    <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>


  </div>;
};
