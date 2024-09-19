import { FC, useState } from "react";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'

type NavbarProps = {};

const Navbar: FC<NavbarProps> = (props) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isHovered, setIsHovered] = useState<boolean>(false); // State to track if the navbar is hovered

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <motion.div
        onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{
                scale: isHovered ? 1 : 0.8, // Scale the navbar length on hover
                paddingLeft: isHovered ? "50px" : "40px", // Increase padding on hover to make it appear wider
                paddingRight: isHovered ? "50px" : "40px",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="flex z-10 overflow-x-hidden fixed top-5 lg:gap-4 py-4 lg:px-10 bg-web-blur w-fit text-white rounded-full my-8 text-xs  md:text-sm lg:text-xl self-center drop-shadow-purple"
        >
            {["About", "Skills", "Projects", "Experience", "Contact"].map((item, index) => {
                const isItemHovered = index === hoveredIndex;

                return (
                    <motion.h1
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        animate={{
                            scale: isItemHovered ? 1.1 : 0.9, // Magnify the hovered item
        
                            boxShadow: isItemHovered
                                ? "0 0px 15px rgba(145, 142, 244, 0.5)" // Drop-shadow on hover
                                : "none", // No shadow when not hovered
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="p-1  md:px-2  lg:px-4 md:py-2 rounded-full font-bold" // Add padding and rounded corners for better visual appearance
                    >
                        <Link smooth={true} duration={500} to={item} >{item}</Link>
                    </motion.h1>
                );
            })}
        </motion.div>
    );
};

export default Navbar;
