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
                <div className={"tag"}>Collaborate and Innovate</div>
            </div>
            <h2 className={"section-title mt-5"}>Join Us in Building the Future of Open Source Solutions</h2>
            <p className={"section-description mt-5"}>
                At Prayas Corps, we believe in the power of collaboration. Our open-source platform allows businesses and developers to come together to build innovative web and mobile solutions. Whether you're looking to streamline your workflow or contribute to meaningful projects, Prayas Corps is your partner for growth. Bring your ideas, and let's build the future together!
            </p>
        </div>
        <div className={"relative"}>
            <Image src={productImage} alt={"Product Image"} className={"mt-10"}/>
            <motion.img src={pyramidImage.src} alt={"Pyramid"} width={262} height={262} className={"hidden md:block absolute -right-36 -top-32"} style={{translateY: translateY}}/>
            <motion.img src={tubeImage.src} alt={"Tube Image"} width={248} height={248} className={"hidden md:block absolute bottom-24 -left-36"} style={{translateY: translateY}}/>
        </div>
    </div>
</section>


  );
};
