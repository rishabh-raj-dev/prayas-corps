"use client"
import CheckIcon from '@/assets/check.svg'
import {twMerge} from "tailwind-merge";
import {motion} from "framer-motion";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
      <section className={"py-24 bg-white"}>
        <div className={"container"}>
          <div className={"section-heading"}>
            <h2 className={"section-title "}>Pricing</h2>
            <p className={"section-description mt-5"}>Discover unbeatable value with our flexible pricing plans. Choose
              the perfect package for your business needs and maximize your ROI. Sign up now and save big!</p>
          </div>
          <div className={"flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-center lg:justify-center"}>
            {pricingTiers.map((tier, index) => (
                <div key={index}
                     className={twMerge("card", tier.inverse===true && 'border-black  bg-black text-white')}>
                  <div className={"relative flex justify-between"}>
                    <h3 className={twMerge("text-lg font-bold text-black/50", tier.inverse === true && "text-white/50")}>{tier.title}</h3>
                    {tier.popular && (
                        <div className={"inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20"}>
                          <motion.span
                              animate={{
                                backgroundPositionX: "100%",
                              }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: 'linear',
                                repeatType: "loop",
                              }}
                              className={"bg-[linear-gradient(to_right, #dd7ddf,#e1cd86, #bbcb92,#71c2ef, #3bffff, #dd7ddf, #e1cd86, #bbcb92,#71c2ef, #3bffff)] [background-size: 200%] text-transparent bg-clip-text font-medium text-white"}>Popular</motion.span>
                        </div>
                    )}
                  </div>
                  <div className={"flex items-baseline gap-1 mt-[30px]"}>
                    <span className={"text-4xl font-bold tracking-tighter leading-none"}>${tier.monthlyPrice}</span>
                    <span className={"tracking-tight font-bold text-black/60"}>/month</span>
                  </div>
                  <button className={twMerge("btn btn-primary w-full mt-[30px]", tier.inverse === true && "bg-white text-black")}>{tier.buttonText}</button>
                  <ul className={"flex flex-col gap-5 mt-8"}>
                    {tier.features.map((feature, index) => (
                        <li key={index} className={"text-sm flex items-center gap-4"}>
                          <CheckIcon className={"h-6 w-6"} />
                          <span>{feature}</span>
                        </li>
                    ))}
                  </ul>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};
