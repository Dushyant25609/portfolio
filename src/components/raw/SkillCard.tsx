import { FC } from "react";

type SkillCardProps = {};

const SkillCard: FC<SkillCardProps> = () => {
    const para = "text-blue-100 text-xs md:text-sm lg:text-base xl:text-2xl overflow-x-hidden";
    const heading = "text-sm font-semibold md:text-lg lg:text-xl xl:text-3xl overflow-x-hidden";
    return (
        <div className="bg-web-blur px-6 py-8 text-white drop-shadow-purple rounded-xl overflow-x-hidden" >
            <h1 className={heading} >Languages:</h1>
            <p className={para} >C++, Python, SQL, JavaScript, HTML5, CSS, TypeScript</p>
            <br />
            <h1 className={heading} >Frameworks/Libraries:</h1>
            <p className={para} >Tailwind CSS, MongoDB, Express, React, Node.Js, Three.Js, Django, Redux, Pandas,
            Numpy, Matloplib, sklearn, Git/Github</p>
            <br />
            <h1 className={heading} >Technicals skills:</h1>
            <p className={para} >Data Structures, Algorithms, Computer networks, Operating system</p>
        </div>
    )
}

export default SkillCard;