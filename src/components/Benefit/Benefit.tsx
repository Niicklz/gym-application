import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {motion} from "framer-motion"

type BenefitProps = {
    icon: JSX.Element;
    title:string;
    description:string;
    setSelectedPage: (value: SelectedPage) => void
}

const Benefit = ({title, description, icon, setSelectedPage}: BenefitProps) => {
const variantChild = {
    hidden: {opacity: 0, scale:0.9},
    visible: {opacity: 1, scale: 1}
}

  return (
    <motion.div
    variants={variantChild}
    className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
        <div className="mb-4 flex justify-center">
            <div className="rounded-full border-2 border-gray-100 bg-primary-100 pl-4">
                {icon}
            </div>
        </div>
        <h4 className="font-bold">{title}</h4>
        <p className="my-3">{description}</p>
        <AnchorLink className="text-sm font-bold text-primary-500 underline hover:bg-secondary-500 cursor-pointer"
        onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
        >
          Learn More
        </AnchorLink>
    </motion.div>
  )
}

export default Benefit