import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const featureCards = [
  {
    title: "Made For Public Spots",
    description: "Made for cafes, bars, clubs and restaurants",
    className:
      "self-end mr-[8%] mt-6 w-full max-w-[267px] rounded-[16.81px] border-0 bg-[#fff9f4] shadow-[0px_2.31px_17.31px_#83838340]",
    contentClassName: "px-4 py-[7px]",
    titleClassName:
      "ml-[0.6px] w-[143px] [font-family:'Poppins',Helvetica] text-sm font-bold leading-[normal] tracking-[-0.70px] text-[#ff8331]",
    descriptionClassName:
      "w-[235px] [font-family:'Poppins',Helvetica] text-xs font-normal leading-[normal] tracking-[-0.60px] text-black",
  },
  {
    title: "Chat First, Meet Naturally",
    description:
      "Break the ice over text and continue the conversation in-person",
    className:
      " mt-10 w-full max-w-[251px] rounded-[16.92px] border-0 bg-[#fff9f4] shadow-[0px_2.32px_17.43px_#83838340]",
    contentClassName: "px-4 py-[7px]",
    titleClassName:
      "[font-family:'Poppins',Helvetica] text-sm font-bold leading-[normal] tracking-[-0.70px] text-[#ff8331]",
    descriptionClassName:
      "mt-1 w-[219px] [font-family:'Poppins',Helvetica] text-xs font-normal leading-[normal] tracking-[-0.60px] text-black",
  },
];

export const RealLifeConnectionsSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white py-16 md:py-20 lg:py-[90px]">
        <img
          className="pointer-events-none absolute top-[20%] -left-64 hidden  max-w-none lg:block"
          alt="Group"
          src="/figmaAssets/group-5205.png"
        />
      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 overflow-hidden px-4 sm:px-6 lg:grid-cols-[minmax(0,645px)_minmax(0,661px)] lg:gap-12 lg:px-[100px]">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="relative order-2 lg:order-1"
        >
          <motion.div 
            initial={{ opacity: 0, y: 120, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
            className="relative mx-auto w-full max-w-[645px] rounded-[36px] bg-[#fee9db80] p-0 backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] sm:rounded-[42px] lg:rounded-[50px]">
            <div className="overflow-hidden rounded-[36px] sm:rounded-[42px] lg:rounded-[50px]">
              <img
                className=" object-cover "
                alt="Splash mockup"
                src="/figmaAssets/mm-3.png"
              />
            </div>
          </motion.div>
          <div className="relative z-10  flex flex-col justify-center gap-6 lg:gap-44 h-auto lg:h-[70%] px-3 sm:px-5 mt-6 lg:mt-10 lg:absolute lg:left-0 lg:top-0 lg:w-full lg:px-0">
            {featureCards.map((card, idx) => (
              <motion.div 
                key={card.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.2 }}
                className={card.className}
              >
                <Card className="w-full  h-full border-0 bg-transparent shadow-none">
                  <CardContent className={card.contentClassName}>
                    <h3 className={card.titleClassName}>{card.title}</h3>
                    <p className={card.descriptionClassName}>
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="relative z-10 order-1 flex max-w-[661px] flex-col items-start gap-4 lg:order-2"
        >
          <header className="flex flex-col items-start justify-center gap-2">
            <h2 className="mt-[-1.00px] font-extrabold  text-[42px]  leading-[48px] text-transparent sm:text-[52px] sm:leading-[60px] lg:w-[661px] lg:text-[65px] lg:leading-[75px]">
              <span className="tracking-[0] font-extrabold text-black">
                Designed for <br />
              </span>
              <span className="  font-extrabold tracking-[-0.84px] text-[#ff8331]">
                Real-Life
              </span>
              <br/>
              <span className="tracking-[0] font-extrabold text-black"> Connections</span>
            </h2>
          </header>
          <div className="flex items-center gap-4">
            <img
              className="h-[83px] w-1 shrink-0"
              alt="Line"
              src="/figmaAssets/line-19.svg"
            />
            <p className="max-w-[559px]  text-base font-normal leading-6 tracking-[0] text-black lg:text-lg">
              Bru helps you move past the typical endless chatting and brings
              you back to what matters most; real, in-person conversations and
              genuine connections
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
