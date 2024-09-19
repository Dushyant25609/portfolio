import { FC, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import SkillCloud from "../raw/SkillCloud";
import SkillCard from "../raw/SkillCard";

type SkillsProps = {};

const Skills: FC<SkillsProps> = () => {
    const [showCard, setShowCard] = useState<boolean>(false);

    const handleShowCard = () => {
        setShowCard(!showCard);
    };

    return (
        <div 
        
        className="px-10 flex flex-col h-screen w-full self-center justify-center overflow-x-hidden ">
            <div className="h-2/3 flex flex-col relative">
            {(
                <motion.div 
                className="h-full flex flex-col justify-center">
                    <SkillCloud />
                </motion.div>
            )}
            {showCard && (
                <motion.div 
                initial={{ opacity: 0, rotateY: 0 }}
                animate={{ opacity: showCard ? 1 : 0 }}
                transition={{ duration: 0.6 }}
                className="absolute top-0 backdrop-blur-lg h-full flex flex-col justify-center w-9/12  self-center lg:w-1/2">
                    <SkillCard />
                </motion.div>
            )}

    
                <motion.button
                    whileHover={{ scale: 1.2 }} // On hover, button scales up
                    whileTap={{ scale: 0.9 }} // On tap, button scales down slightly
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-web-blur relative z-20 text-sm lg:text-base  drop-shadow-hover px-6 py-3 self-center text-white rounded-full "
                    onClick={handleShowCard}
                >
                    {showCard ? "Cloud" : "Card"}
                </motion.button>
            </div>
        </div>
    );
};

export default Skills;
