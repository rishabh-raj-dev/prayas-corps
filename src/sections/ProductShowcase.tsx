"use client"

import productImage from '@/assets/product-image.png'
import pyramidImage from '@/assets/pyramid.png'
import tubeImage from '@/assets/tube.png'
import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
export const ProductShowcase = () => {
    const scrollRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: scrollRef,
        offset: ['start end', 'end start'],
    })
    const translateY = useTransform(scrollYProgress, [0,1],[150, -150]);
  return (
      <section ref={scrollRef} className="bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24 overflow-x-clip">
        <div className={"container"}>
            <div className={"section-heading"}>
                <div className={"flex justify-center"}>
                    <div className={"tag"}>Boost your productivity</div>
                </div>
                <h2 className={"section-title mt-5"}>A
                    more effective way to track progress</h2>
                <p className={"section-description mt-5"}>Elevate your
                    marketing game with our innovative SaaS platform. Streamline your campaigns, optimize performance,
                    and achieve remarkable results. Start now and watch your business thrive!</p>
            </div>
            <div className={"relative"}>
                <Image src={productImage} alt={"productImage"} className={"mt-10"}/>
                <motion.img src={pyramidImage.src} alt={"pyramid"} width={262} height={262} className={"hidden md:block absolute -right-36 -top-32"} style={{translateY: translateY}}/>
                <motion.img src={tubeImage.src} alt={"tubeImage"} width={248} height={248} className={"hidden md:block absolute bottom-24 -left-36"} style={{translateY: translateY}}/>
            </div>
        </div>
      </section>
  );
};
