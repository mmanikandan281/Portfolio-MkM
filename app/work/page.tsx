"use client";
import projectImg from "@/images/project.png";
import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { ArrowUp, Github } from "lucide-react";

const projects = [
  {
    _id: "01",
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sint esse quaerat eum voluptatibus corrupti, dolores dolorum exercitationem reprehenderit aliquam recusandae saepe possimus architecto magnam.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    image: projectImg,
    live: "",
    githb: "",
  },
  {
    _id: "02",
    category: "fullstack",
    title: "project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sint esse quaerat eum voluptatibus corrupti, dolores dolorum exercitationem reprehenderit aliquam recusandae saepe possimus architecto magnam.",
    stack: [{ name: "Next.js" }, { name: "Tailwindcss" }, { name: "Node.js" }],
    image: projectImg,
    live: "",
    githb: "",
  },
  {
    _id: "03",
    category: "frontend",
    title: "project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sint esse quaerat eum voluptatibus corrupti, dolores dolorum exercitationem reprehenderit aliquam recusandae saepe possimus architecto magnam.",
    stack: [{ name: "Next.js" }, { name: "Tailwindcss" }, { name: "Node.js" }],
    image: projectImg,
    live: "",
    githb: "",
  },
];

const WorkPage = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 "
    >
      <Container className="flex flex-col lg:flex-row gap-7 w-full">
        <div className="w-full md:w-1/2 lg:h-[460px] flex flex-col gap-8 lg:justify-between order-2 lg:order-none group">
          <h2 className="text-8xl leading-none font-extrabold text-transparent text-outline">
            {project?._id}
          </h2>
          <h3 className="text-3xl font-bold leading-none text-white group-hover:text-lightSky hoverEffect">
            {project?.category} project
          </h3>
          <p className="text-white/60">{project?.description}</p>
          <ul className="flex gap-4 items-center">
            {project?.stack?.map((item, index) => (
              <li key={index} className="text-lg text-lightSky">
                {item?.name}
                {index !== project?.stack?.length - 1 && ","}
              </li>
            ))}
          </ul>
          <Separator className="bg-white/20" />
          <div className="flex items-center gap-4">
            <Link href={project?.live}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="bg-white/10 flex items-center justify-center p-2.5 rounded-full text-white/60 hover:bg-hoverColor/20 hover:text-white hoverEffect">
                    <ArrowUp className="rotate-45" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Live project</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
            <Link href={project?.githb}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="bg-white/10 flex items-center justify-center p-2.5 rounded-full text-white/60 hover:bg-hoverColor/20 hover:text-white hoverEffect">
                    <Github />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Github repository</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2">slider</div>
      </Container>
    </motion.section>
  );
};

export default WorkPage;
