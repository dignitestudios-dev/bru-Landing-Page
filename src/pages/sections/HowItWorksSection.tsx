import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export const HowItWorksSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="container relative mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          style={{
            backgroundImage: `url('/figmaAssets/group-people.png')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="mx-auto flex min-h-[300px] md:h-[600px] max-w-[972px] flex-col items-center justify-center px-4 py-12 text-center sm:px-6 rounded-3xl"
        >
          <h2 className="text-[20px] font-black leading-[1.1] tracking-[0.5px] text-black sm:text-[32px] sm:tracking-[0.84px] md:text-[26px] md:tracking-[1.12px] lg:text-[70px] lg:leading-[75px] lg:tracking-[1.4px]">
            Connect With People You&apos;ve{" "}
            <span className="text-[#ff8331]">Swiped</span>{" "}
            <span className="text-[#ff8331]">Or</span>{" "}
            <span className="text-[#ff8331]">Matched</span> With Before
          </h2>
        </motion.header>
      </div>
    </section>
  );
};
