import Marquee from "@/@/components/magicui/marquee";
import { cn } from "@/@/lib/utils";
import { FC } from "react";

type ProjectProps = {};

const reviews = [
    {
      name: "UpLift",
      deployed: "https://up-lift-gilt.vercel.app/Login/",
      github: "https://github.com/Dushyant25609/upLift",
      body: "Developed a website using React with TypeScript and Redux for tracking faculty performance and improvement in 24hr in a hackathon.",
    },
    {
        name: "BattleDex - Your Ultimate Pokémon Go Companion ",
        deployed: "https://battle-dex.vercel.app/",
        github: "https://github.com/Honey25609/BattleDex",
        body: "Developed a comprehensive website dedicated to Pokémon Go players, offering detailed rankings of Pokémon and their perfect movesets according to the League they are playing in.",
      },
      {
        name: "LockSpot",
        github: "https://github.com/Honey25609/E-lost-and-found",
        body: "Developed Lockspot, a digital lost and found platform, increasing item recovery rates by 50%.Utilized Salesforce/blip-image-captioning-large and sentence-transformers/all-MiniLM-L6-v2 models for image description and feature matching",
      },
      {
        name: "Macbook Deckstop Clone",
        deployed: "https://mac-deskstop-oslc.vercel.app/",
        github: "https://github.com/Honey25609/Mac-deskstop",
        body: "Tools Used: HTML, CSS, JavaScript, React.js"
      },
      {
        name: "Todo app with Class component",
        deployed: "",
        github: "https://github.com/Dushyant25609/Todo-ts-class",
        body: "Created a basic to-do app with typescript class components"
      },
      {
        name: "Ecommerce with TypeScript",
        deployed: "",
        github: "https://github.com/Dushyant25609/A-20tsxecommercestorybook",
        body: "Developed a simple ecommerce site with typescript with formik, yup, axios, dummy API and with working basic functionalities"
      },
    
  ];
   
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
   
  const ReviewCard = ({
    name,
    deployed,
    github,
    body,
  }: {
    name: string;
    deployed?: string;
    github: string;
    body: string;
  }) => {
    return (
            <figure
    className={"bg-white flex flex-col hover:text-white hover:border hover:border-white " + cn(
        "relative w-full max-w-xs cursor-pointer overflow-hidden rounded-xl border p-4", // Change w-64 to w-full or a responsive size
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    )}
    >

      
        <div className="flex flex-row items-center gap-2 overflow-x-hidden">
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-sky-600 overflow-x-hidden ">
                {github && <a target="_blank" href={github}>Github</a>}{deployed && <a target="_blank" href={deployed}> | Deployed</a>}
                </p>
          </div>
        </div>
        <span className="grow"></span>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
        <span className="grow"></span>
      </figure>
    );
  };

  const Project: FC<ProjectProps> = () => {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-x-hidden">
            <Marquee pauseOnHover className="w-full [--duration:10s] overflow-hidden">
                {firstRow.map((review) => (
                    <ReviewCard key={review.deployed} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="w-full [--duration:20s] overflow-hidden">
                {secondRow.map((review) => (
                    <ReviewCard key={review.deployed} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-web-blur dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-web-blur dark:from-background"></div>
        </div>
    );
};


export default Project;