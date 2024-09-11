"use client"

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaReact, FaSass } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "about me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellat similique magnam corporis rerum, temporibus quaerat laudantium.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Dariush Kadkhoda",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+98) 933 544 0600",
    },
    {
      fieldName: "Experience",
      fieldValue: "6",
    },
    {
      fieldName: "Email",
      fieldValue: "Dariushkadkhoda@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Iran Zahedan",
    },
    {
      fieldName: "Compony",
      fieldValue: "BaztabAgency",
    },
    {
      fieldName: "Languages",
      fieldValue: "Persian,English",
    },
  ],
};
// experiences data
const experiences = {
  icon: "/assets/resume/badge.svg",
  title: "My experiences",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellat similique magnam corporis rerum, temporibus quaerat laudantium.",
  items: [
    {
      compony: "Teach Solutions Inc",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      compony: "Web Design Studio",
      position: "Front-End developer intern",
      duration: "Summer 2021",
    },
    {
      compony: "E-commerce Startup",
      position: "Freelance web Developer",
      duration: "2020 - 2021",
    },
    {
      compony: "Tec Academy",
      position: "Teaching Assistant",
      duration: "2019 - 2020",
    },
    {
      compony: "Digital Agency",
      position: "UI/UX designer",
      duration: "2018 - 2019",
    },
    {
      compony: "Software Developer firm",
      position: "Junior developer",
      duration: "2017 - 2018",
    },
  ],
};
// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellat similique magnam corporis rerum, temporibus quaerat laudantium.",
  items: [
    {
      institution: "Software Developer firm",
      degree: "Junior developer",
      duration: "2017 - 2018",
    },
    {
      institution: "Software Developer firm",
      degree: "Junior developer",
      duration: "2017 - 2018",
    },
    {
      institution: "Software Developer firm",
      degree: "Junior developer",
      duration: "2017 - 2018",
    },
    {
      institution: "Software Developer firm",
      degree: "Junior developer",
      duration: "2017 - 2018",
    },
    {
      institution: "Software Developer firm",
      degree: "Junior developer",
      duration: "2017 - 2018",
    },
    {
      institution: "Software Developer firm",
      degree: "Junior developer",
      duration: "2017 - 2018",
    },
    {
      institution: "Software Developer firm",
      degree: "Junior developer",
      duration: "2017 - 2018",
    },
    {
      institution: "Software Developer firm",
      degree: "Junior developer",
      duration: "2017 - 2018",
    },
  ],
};
// Skills data
const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellat similique magnam corporis rerum, temporibus quaerat laudantium.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaSass />,
      name: "Sass",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind Css",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React JS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next JS",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col  mx-auto xl:mx-0 gap-6 text-xl tracking-widest">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-6xl font-bold">{experiences.title}</h3>
              <p className="max-w-[600px] w-full text-white/60 mx-auto xl:mx-0 text-2xl leading-10 ">
                {experiences.description}
              </p>
              <ScrollArea className="h-[400px]">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {experiences.items.map((item,index)=>{
                  return <li key={index} className=" bg-[#232329] h-[148px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                    <span className="text-accent text-2xl">{item.duration}</span>
                    <h3 className="text-3xl max-w-[260px] min-h-[60px] text-center lg:text-left h-full w-full">{item.position}</h3>
                    <div className="flex items-center gap-3">
                      {/* {dot} */}
                      <span className="w-[60px] h-[6px] rounded-full bg-accent"></span>
                      <p className="text-white/60 text-xl">{item.compony}</p>
                    </div>
                  </li>
                })}
              </ul>
              </ScrollArea>
            </div>
            </TabsContent>
            {/* education data */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-6xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] w-full text-white/60 mx-auto xl:mx-0 text-2xl leading-10 ">
                {education.description}
              </p>
              <ScrollArea className="h-[400px]">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {education.items.map((item,index)=>{
                  return <li key={index} className=" bg-[#232329] h-[148px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                    <span className="text-accent text-2xl">{item.duration}</span>
                    <h3 className="text-3xl max-w-[260px] min-h-[60px] text-center lg:text-left h-full w-full">{item.institution}</h3>
                    <div className="flex items-center gap-3">
                      {/* {dot} */}
                      <span className="w-[60px] h-[6px] rounded-full bg-accent"></span>
                      <p className="text-white/60 text-xl">{item.degree}</p>
                    </div>
                  </li>
                })}
              </ul>
              </ScrollArea>
            </div>
            </TabsContent>
            {/* Skills  */}
            <TabsContent value="skills" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-6xl font-bold">{skills.title}</h3>
              <p className="max-w-[600px] w-full text-white/60 mx-auto xl:mx-0 text-2xl leading-10 ">
                {skills.description}
              </p>
              <ScrollArea className="h-[400px]">
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-[30px]">
                {skills.skillList.map((item,index)=>{
                  return (
                  <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className="text-8xl group-hover:text-accent transition-all duration-300">
                            {item.icon}
                          </div>
                        </TooltipTrigger>
                        <TabsContent>
                          <p className="capitalize">{item.name}</p>
                        </TabsContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                  );
                })}
              </ul>
              </ScrollArea>
            </div>
            </TabsContent>
            {/* About me */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item,index)=>{
                      return (
                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-white/60">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
