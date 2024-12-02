import { HERO_CONTENT } from "../constants"
import { HERO_CONTENT_HEADING } from "../constants"
import profilePic from "../assets/farhan-2.png"
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: {x: -100 , opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5 , delay }
    }
})
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0)}
            initial= "hidden"
            animate= "visible"
            transition={{ duration: 0.5 , delay: 2 }}
             className="pb-16 text-6xl font-thin tracking-normal lg:mt-16 lg:text-6xl">Farhan Khan</motion.h1>
            <motion.span 
            variants={container(0.5)}
            initial= "hidden"
            animate= "visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text
            text-3xl tracking-tight text-transparent">Software Development Engineer</motion.span>
            <motion.p
            variants={container(1)}
            initial= "hidden"
            animate= "visible"
            className="mt-2 max-w-xl font-normal tracking-tighter">{HERO_CONTENT_HEADING}</motion.p>
          <motion.p
            variants={container(1)}
            initial= "hidden"
            animate= "visible"
            className="max-w-xl font-light tracking-tighter">{HERO_CONTENT}</motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex justify-center max-w-[60%] m-auto">
            <motion.img
            initial={{ x: 100 , opacity: 0 }}
            animate={{ x: 0 ,  opacity: 1 }}
            transition={{ duration: 1 , delay: 1.2 }}
            src={profilePic} className="rounded-[10px]" alt="profile pic" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
