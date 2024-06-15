import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({setSeletectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">

            {/* IMAGE SECTION */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveMediumScreens ? (
                    <div
                        className="relative z-0 ml-20 before:absolute  before:-top-20 before:-left-20
                        before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full
                        before:border-2 before:border-blue-400 before:z-[-1]"
                    >
                        <img src="assets/teddy-profile.png" alt="Profile" className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w" />
                    </div>
                ) : 
                (
                    <img src="assets/teddy-profile.png" alt="Profile" className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w" />  
                )}
            </div>
                {/* MAIN SECTION */}
                <div className="z-30 basis-2/5 mt-12 md:mt-32">
                    {/* HEADING */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{duration: 0.5}}
                        variants={{
                            hidden: {opacity: 0, x:-50},
                            visible: {opacity: 1, x:0}
                        }}
                    >
                        <p className="text-6xl font-playFair z-10 text-center md:text-start">
                            Teddy {""}
                            <span className="xs:relative xs:text-blue-950 xs:font-semibold z-20
                                xs:before:content-brush before:absolute before:-left-[25px]
                                before:-top-[70px] before:z-[-1]">
                                Edwar
                            </span>
                        </p>
                        <p className="mt-10 mb-7 text-sm text-center md:text-start">
                            Haloo... Perkenalkan nama saya Teddy Edwar. Saya saat ini kuliah di Institut Teknologi Padang dengan jurusan Teknik Informatika. Cita-cita saya saat lulus kuliah nanti ialah menjadi Full Stact Developer.
                        </p>
                    </motion.div>
                    {/* CALL TO ACTIONS */}
                    <motion.div
                        className="flex mt-5 justify-center md:justify-start"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{delay: 0.2, duration: 0.5}}
                        variants={{
                            hidden: {opacity: 0, x:-50},
                            visible: {opacity: 1, x:0}
                        }}
                    >
                        <AnchorLink
                            className=" bg-blue-950  rounded-sm py-3 px-7 mr-1 font-semibold  hover:text-red-400 transition duration-500"
                            // onClick={() => setSeletectedPage("contact")}
                            href="#contact"
                        >
                            Contact Me
                        </AnchorLink>
                        <AnchorLink
                            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
                            // onClick={() => setSeletectedPage("contact")}
                            href="#contact"
                        >
                            <div
                                className="bg-blue-950 hover:text-red-400 transition duration-500 w-full h-full flex items-center
                                justify-center font-playFair px-10"
                            >
                                Let's talk.
                            </div>
                        </AnchorLink>
                    </motion.div>

                    <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.4, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x:-50},
                        visible: {opacity: 1, x:0}
                    }}
                    >
                        <SocialMediaIcons/>
                    </motion.div>
                </div>
            
        </section>
    )
}

export default Landing;