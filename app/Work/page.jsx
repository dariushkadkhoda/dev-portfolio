"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellat similique magnam corporis rerum, temporibus quaerat laudantium.",
    stack : [{name : "Html 5"},{name : "Css 3"},{name : "JavaScript"},],
    image : '/assets/work/thumb1.png',
    live : '',
    github:"",
    },
  {
    num: "02",
    category: "frontend",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellat similique magnam corporis rerum, temporibus quaerat laudantium.",
    stack : [{name : "Next Js"},{name : "Tailwind Css"},{name : "JavaScript"},],
    image : '/assets/work/thumb2.png',
    live : '',
    github:"",
    },
  {
    num: "03",
    category: "frontend",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellat similique magnam corporis rerum, temporibus quaerat laudantium.",
    stack : [{name : "Next Js"},{name : "Sass"},{name : "JavaScript"},],
    image : '/assets/work/thumb3.png',
    live : '',
    github:"",
    },
  {
    num: "04 ",
    category: "frontend",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellat similique magnam corporis rerum, temporibus quaerat laudantium.",
    stack : [{name : "React"},{name : "Sass"},{name : "JavaScript"},],
    image : '/assets/work/thumb3.png',
    live : '',
    github:"",
    },
];

const Work = () => {
  const [project , setProjects] = useState(projects[0])
  return (
    <motion.section
      initial={{opacity:0}}
      animate={{opacity:1}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div>
              <div className="text-9xl font-bold leading-none text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} projects</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item,index)=>{
                  return <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length -1 && ","}
                    </li>
                })}
              </ul>
              <div className="border border-white/20 mt-2"></div>
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent className="">
                      <p>Live Projects</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent className="">
                      <p>Githab repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
          <div className="w-full"></div>
        </div>
      </div>

    </motion.section>
  )
};

export default Work;
