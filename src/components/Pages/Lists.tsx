import { FC } from "react";
import ExperienceCard from "../raw/ExperienceCard";

type ListsProps = {};

const exp = [
    {
        companyName: "Devslane",
        startDate: "June 2024",
        endDate: "August 2024",
        description: "Trained in React.js, Formik, and Redux, gaining hands-on experience in building responsive web applications with a focus on component architecture and state management."
    }
]

const Lists: FC<ListsProps> = () => {
    return (
        <div className="text-white flex flex-col w-11/12 md:w-2/3 self-center bg-web-blur rounded-xl drop-shadow-purple py-12" >
            {exp && exp.map( e => {
                return <ExperienceCard
                companyName={e.companyName}
                startDate={e.startDate}
                endDate={e.endDate}
                description={e.description}
                />
            } )}
        </div>
    )
}

export default Lists;