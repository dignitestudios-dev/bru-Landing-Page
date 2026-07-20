import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const storeButtons = [
    {
      label: "Available on the",
      title: "App Store",
      icon: "/figmaAssets/logos-apple-app-store.svg",
      iconClassName: "w-[22px] h-[22px]",
    },
    {
      label: "Get it on",
      title: "Google Play",
      icon: "/figmaAssets/google-play-6124997-1.png",
      iconClassName: "w-[22px] h-[22px] object-cover",
    },
  ];
  return (
    <div className="max-w-4xl  min-h-[500px] lg:h-[950px] mx-auto flex flex-col gap-10 items-center text-center w-full px-4 overflow-hidden lg:overflow-visible">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col gap-6 items-center pt-10"
      >
        <h1 className="text-[40px] sm:text-[50px] md:text-[65px] leading-[1.1] text-center font-extrabold text-[#000000]">
          The Best <span className="text-[#FF8331]"> Connections Happen</span> In
          Person
        </h1>
        <p className="text-[#000000] text-[16px] sm:text-[20px] md:text-[24px] max-w-[800px]">
          See people around you, offer a drink or get one sent your way, and take
          the conversation offline, right where you are.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row w-full max-w-[367px] items-center gap-4 mt-4"
        >
          {storeButtons.map((button) => (
            <Button
              key={button.title}
              type="button"
              variant="ghost"
              className="h-auto w-full flex-1 justify-center gap-[9.48px] rounded-[364.1px] border-[0.73px] border-solid border-[#ff8331] bg-[#ffffff80] px-3.5 py-2 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] hover:bg-[#ffffff99] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)]"
            >
              <img
                className={button.iconClassName}
                alt={button.title}
                src={button.icon}
              />

              <span className="inline-flex flex-col items-start justify-center gap-px">
                <span className="mt-[-0.59px] whitespace-nowrap [font-family:'Satoshi-Medium',Helvetica] text-xs font-medium leading-[13.0px] tracking-[-0.24px] text-black">
                  {button.label}
                </span>

                <span className="whitespace-nowrap [font-family:'Satoshi-Bold',Helvetica] text-sm font-bold leading-[13.0px] tracking-[-0.24px] text-black">
                  {button.title}
                </span>
              </span>
            </Button>
          ))}

        </motion.div>

        <div className="relative lg:-top-56 w-full flex justify-center lg:mt-0">

          <motion.img
            initial={{ opacity: 0, y: 120, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.0, delay: 0.4, ease: "easeOut" }}
            src="/figmaAssets/main-hero-section.png"
            className=""
          />
        </div>
      </motion.div>
    </div>
  );
}
