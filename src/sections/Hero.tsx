"use client"

import ArrowIcon from '@/assets/arrow-right.svg'
import cogImage from '@/assets/cog.png'
import cylinderImage from '@/assets/cylinder.png'
import noodleImage from '@/assets/noodle.png'
import Image from "next/image";
import {motion, useScroll, useTransform, useMotionValueEvent} from "framer-motion";
import {useRef} from "react";

export const Hero = () => {
    const heroRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: heroRef,
        offset: ['start end', 'end start'],
    })
    const translateY = useTransform(scrollYProgress, [0,1],[150, -150]);
    // useMotionValueEvent(scrollYProgress, "change", (latestValue) => console.log(latestValue))
  return (
      <section ref={heroRef} className={"pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"}>
          <div className='container'>
              <div className={"md:flex items-center gap-28 "}>
              <div className={"md:w-[478px]"}>
    <div className={"tag"}>Introducing</div>
    <h1 className='text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6'>Empowering Your Vision</h1>
    <p className='text-xl text-[#010D3E] tracking-tight mt-6'>
        Prayas Corps is your partner in innovation, offering cutting-edge web and mobile development solutions. We believe in the power of open source—bring your ideas, volunteer, and collaborate with our community to create custom software solutions that drive success. Together, we accelerate growth and push the boundaries of innovation.
    </p>
    <div className='flex gap-1 items-center mt-[30px]'>
        <button className="btn btn-primary">Get Started for Free</button>
        <button className="btn btn-text">
            <span>Learn More</span>
            <ArrowIcon className="h-5 w-5" />
        </button>
    </div>
</div>


                  <div className="mt-20 pr-24 md:mt-0 md:h-[648px] md:flex-1 relative">
                      <motion.img src={cogImage.src} alt={"Cog"} className="md:absolute h-full md:w-auto md:max-w-none md:-left-9 lg:left-0" animate={{translateY: [-30, 30]}} transition={{repeat: Infinity, repeatType: 'mirror', duration: 3, ease: 'easeInOut'}}/>
                      <motion.img src={cylinderImage.src} alt={'Cylinder'} height={220} width={220} className={"hidden md:block -top-8 -left-32 absolute"} style={{translateY: translateY,}}/>
                      <motion.img src={noodleImage.src} alt={'noodle'} width={220} className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]" style={{translateY: translateY, }}/>
                  </div>
              </div>
          </div>
      </section>
  );
};
