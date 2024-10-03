import { FC } from "react";

type SkillCardProps = {};

const SkillCard: FC<SkillCardProps> = () => {
    const para = "text-blue-100 text-xs  lg:text-base xl:text-2xl overflow-hidden";
    const heading = "text-sm font-semibold md:text-lg lg:text-xl xl:text-3xl overflow-hidden";
    return (
        <div className="bg-web-blur px-6 py-8 flex flex-col justify-around text-white drop-shadow-purple rounded-xl w-5/6 " >
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