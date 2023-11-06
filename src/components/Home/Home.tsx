import { SelectedPage } from "@/shared/types"
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedbull from "@/assets/SponsorRedbull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import useMediaQuery from "@/hooks/useMediaQuery"

import Button from "../Button/Button"
import AnchorLink from "react-anchor-link-smooth-scroll"

type SectionProps = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: SectionProps) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  return (
   <section id="home" className=" bg-gray-20 py-10 md:h-full md:pb-0">

    {/*Image and main header*/}
    <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 mb-10 mt-10">

      {/*main header*/}

      <div className=" z-10 mt-32 basis-3/5">
        {/*headings*/}
        <div className="">
          <div className="relative">

            <div className="before:absolute before:-top-20 md:before:content-evolvetext before:-left-20 before:z-[-1]">
              <img src={HomePageText} alt="home-page-text" />
            </div>
          </div>
          <p className="mt-8 text-md">
          Unrivaled Gym. Unparalleled Training Fitness Classes. Wolrd Class Studios to get the Body Shapes That you Dream of... Get Your Dream Body Now.
          </p>
        </div>

        {/*Actions*/}
        <div className= {`flex mt-8 items-center gap-8`}>
        <Button setSelectedPage={setSelectedPage}>Join Now</Button>
        <AnchorLink className="text-sm font-bold text-primary-500 underline hover:bg-secondary-500 cursor-pointer"
        onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
        >
          Learn More
        </AnchorLink>
        </div>

      </div>

      {/*image*/}
      <figure className="flex basis-3/5 justify-center md:z-10 md:ml-40  md:justify-items-end">
        <img src={HomePageGraphic} alt="home-page-graphic" />
        </figure>


    </div>
    {/*Sponsors*/}
    {isAboveMediumScreens && (
      <div className="w-full flex  p-10 h-[150px]  bg-primary-100 items-center z-20 justify-around">
        <figure><img src={SponsorRedbull} alt="sponsor-redbull" /></figure>
        <figure className="flex items-center"><img src={SponsorFortune} alt="sponsor-fortune" /></figure>
        <figure className="flex items-center"><img src={SponsorForbes} alt="sponsor-forbes" /></figure>
      
      </div>
    )}

   </section>
  )
}

export default Home