'use client'

import { Section } from "lucide-react";
import CountUp  from "react-countup";

const stats = [
    {
        num : 6,
        text : "Years of experience"
    },
    {
        num : 9,
        text : "Projects completed"
    },
    {
        num : 8,
        text : "Technologies mastered"
    },
    {
        num : 1265,
        text : "Code commits"
    },
]

const Status = () => {
  return(
      <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 mt-20 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item,index)=>{
                    return(
                        <div key={index}
                            className="flex-1 flex gap-4 items-center justify-center  xl:justify-start"
                        >
                            <CountUp
                                end={item.num}
                                duration={5}
                                delay={2}
                                className="text-4xl xl:text-6xl font-extrabold"
                            />
                            <p className={`${item.text.length < 15 ? "max-w-[70px]":"max-w-[50px]"} leading-snug text-white/80`}>{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
      </section>
    ) 
};

export default Status;
