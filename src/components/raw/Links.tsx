import { Dock, DockIcon } from "@/@/components/magicui/dock";
import { motion } from "framer-motion";
import { FC } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type LinksProps = React.HTMLAttributes<SVGElement>;

const motionProps = {
  initial: { scale: 1.5, y: 0 },
  whileHover: { scale: 2.5, y: -2 },
  transition: { duration: 0.2 },
};

const Links: FC<LinksProps> = () => {
  return (
    <div className="fixed bottom-5 w-full py-4 xl:px-10 z-10 overflow-x-hidden">
      <Dock magnification={60} distance={50} className="md:px-4 flex md:gap-6">
        <DockIcon>
          <motion.div {...motionProps}>
            <a href="https://www.linkedin.com/in/dushyant-developer/" target="_blank" ><FaLinkedinIn className="text-white text-xs xl:text-lg " /></a>
          </motion.div>
        </DockIcon>
        <DockIcon>
          <motion.div {...motionProps}>
            <a href="https://github.com/Dushyant25609" target="_blank" ><FaGithub className="text-white text-xs xl:text-lg " /></a>
           </motion.div>
        </DockIcon>
        <DockIcon>
          <motion.div {...motionProps}>
            <a href="https://x.com/Dushyant25609" target="_blank" ><FaXTwitter className="text-white text-xs mxl:text-lg " /></a>
         </motion.div>
        </DockIcon>
      </Dock>
    </div>
  );
};

export default Links;
