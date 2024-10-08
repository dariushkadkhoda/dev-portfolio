import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Status from "@/components/Status";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";


const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl-pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Software Developer</span>
            <h1 className="text-[48px] xl:text[80px] leading-[1.6] font-semibold mb-6">
              Hello I'm <br /> <span className="text-accent">Dariush Kadkhoda</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 leading-[2] text-3xl">
              I excel at crafting elegant digital expeiences and I am proficient
              in various programing lenguges and technologies
            </p>
            {/* btn and social */}
            <div className="flex flex-col xl:flex-row gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0 flex justify-center items-center">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full
                flex  items-center justify-center text-accent text-base hover:bg-accent hover:text-primary
                hover:transition-all duration-500
                "  />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 cl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Status/>
    </section>
  );
};

export default Home;
