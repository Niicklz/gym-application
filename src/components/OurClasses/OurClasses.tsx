import { ClassType, SelectedPage } from "@/shared/types"
import image1 from "../../../public/image1.png"
import image2 from "../../../public/image2.png"
import image3 from "../../../public/image3.png"
import image4 from "../../../public/image4.png"
import image5 from "../../../public/image5.png"
import image6 from "../../../public/image6.png"
import HText from "../HText/HText"
import {motion} from "framer-motion"
import ImagePreview from "../ImagePreview/ImagePreview"
type OurClassesProps = {
    setSelectedPage: (value: SelectedPage)=> void
}

const OurClasses = ({setSelectedPage}: OurClassesProps) => {
    const classes: Array<ClassType> = [
        {
          name: "Weight Training Classes",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          img: image1,
        },
        {
          name: "Yoga Classes",
          img: image2,
        },
        {
          name: "Ab Core Classes",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          img: image3,
        },
        {
          name: "Adventure Classes",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          img: image4,
        },
        {
          name: "Fitness Classes",
          img: image5,
        },
        {
          name: "Training Classes",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          img: image6,
        },
      ];

  return (
    <section id="ourclasses" className="w-full  bg-primary-100 py-40">
        {/*Header and description */}
        <motion.div
         onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        className="w-5/6 mx-auto">
            <motion.div
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            >
            <HText>
                OUR CLASSES
            </HText>
            </motion.div>
            
            {/*Texts*/}
            <motion.div className="my-5 md: w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{delay:0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            >
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </motion.div>
            
        </motion.div>
        {/*carousel */}
        <div className="mt-20 h-[353px] w-full overflow-x-auto overflow-y-hidden ">
        <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item:ClassType, index)=> (
                <ImagePreview key={index} img={item.img} name={item.name} description={item.description}   />
            ))}
        </ul>
        </div>
        


    </section>
  )
}

export default OurClasses