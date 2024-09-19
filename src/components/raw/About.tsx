import { motion } from "framer-motion";
import { FC } from "react";
import img from '/dushyant.png'

type AboutProps = {};

const About: FC<AboutProps> = () => {
    return (
        <div className="flex px-10 py-12 w-full self-center justify-between items-center">
            <motion.div 
                className="text-4xl  lg:text-6xl xl:text-7xl 2xl:text-8xl text-web-light-text font-mono flex flex-col gap-2 lg:gap-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
            >
                <h1>
                    Hi, I am
                    <br />
                    <motion.span
                        className="text-white font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1.2 }}
                    >
                        Dushyant
                    </motion.span>
                </h1>
                <motion.p 
                className="text-xs lg:text-base  lg:w-full xl:w-2/3 xl:text-xl 2xl:text-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.2 }}
                >
                Experienced in developing dynamic web applications as a Full Stack Developer.
                </motion.p>
            </motion.div>
            <motion.div className="hidden md:flex  md:w-3/5 xl:w-2/5 2xl:w-1/3">
                <img className="animate-glow" src={img} alt="" />
            </motion.div>
        </div>
    );
};

export default About;
