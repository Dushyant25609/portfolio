import { FC } from "react";
import About from "../raw/About";

type AboutMeProps = {};

const AboutMe: FC<AboutMeProps> = (props) => {
    return (
        <div className="flex flex-col h-screen w-9/12 self-center justify-center overflow-x-hidden ">
            <About/>
        </div>
        
    )
}

export default AboutMe;