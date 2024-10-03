import { FC } from "react";

type ExperienceCardProps = {
    companyName: string;
    startDate: string;
    endDate: string;
    description: string;
};

const ExperienceCard: FC<ExperienceCardProps> = ({companyName, startDate, endDate, description}) => {
    return (
        <div className="w-11/12 self-center flex flex-col gap-4 flex-wrap px-6 py-8 bg-web-background drop-shadow-purple rounded-lg ">
            <div className="flex flex-col md:flex-row justify-between items-center text-web-light-text">
                <h1 className="font-semibold md:text-2xl" >{companyName}</h1>
                <p className="text-sm font-medium md:text-base" >{startDate} - {endDate}</p>
            </div>
            <p className="text-xs md:text-sm" >{description}</p>
        </div>
    )
}

export default ExperienceCard;