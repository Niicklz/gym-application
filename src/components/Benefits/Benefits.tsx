import { SelectedPage, BenefitType } from "@/shared/types"
import { motion } from "framer-motion"
import HText from "../HText/HText";
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
  } from "@heroicons/react/24/solid";
import Benefit from "../Benefit/Benefit";
import Button from "../Button/Button";
import BenefitsPageGraphic from "../../../public/BenefitsPageGraphic.png";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {

    const benefits: Array<BenefitType> = [
        {
          icon: <HomeModernIcon className="h-6 w-6" />,
          title: "State of the Art Facilities",
          description:
            "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
        },
        {
          icon: <UserGroupIcon className="h-6 w-6" />,
          title: "100's of Diverse Classes",
          description:
            "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
        },
        {
          icon: <AcademicCapIcon className="h-6 w-6" />,
          title: "Expert and Pro Trainers",
          description:
            "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
        },
      ];

      const container = {
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2 },
        },
      };
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
        onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}
        
        >
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}            
            className="md:my-5 md:w-3/5">
                {/*Headers */}
                <HText>
                    MORE THAN JUST A GYM.
                </HText>
                <p className="my-5 text-sm">We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true training care into each and every member.

</p>
            </motion.div>
            {/*Benefits*/}
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}            
            className="mt-5 items-center md:flex justify-between gap-8">
                {benefits.map(benefit => (
                    <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description}
                    setSelectedPage={setSelectedPage}/>
                ))}
            </motion.div>
            {/*Graphic and Description */}
            <div className="mt-16 md:flex gap-20 justify-between items-center">
                {/*Graphic */}
                <img className="mx-auto" src={BenefitsPageGraphic} alt="benefit-image" />
              
                <div>
                    {/*Header */}                   
                    <motion.div                     
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: 50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="relative">
                        <div className=" before:absolute before:-left-20 before:-top-20  before:content-abstractwaves before:z-[1]">
                        <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "} <span className="text-primary-500">Fit.</span>

                    </HText>
                        </div>
                    
                    </motion.div>

                    {/*Description */}
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2,duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: 50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    >
                    <p className="my-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p className="mb-5">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </motion.div>
                    
                    {/*Button */}
                    <motion.div 
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5 }}
                     transition={{delay: 0.3, duration: 0.5 }}
                     variants={{
                       hidden: { opacity: 0, x: 50 },
                       visible: { opacity: 1, x: 0 },
                     }}
                    
                    className="relative mt-16 before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles">
                    <Button setSelectedPage={setSelectedPage}>
                        Join Now
                    </Button>
                       
                    
                    </motion.div>
                    
                </div>
            </div>
        </motion.div>
        
    </section>
  )
}

export default Benefits