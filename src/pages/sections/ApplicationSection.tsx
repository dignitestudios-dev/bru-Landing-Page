import { motion } from "framer-motion";

export const ApplicationSection = (): JSX.Element => {
    return (
        <section className="relative w-full overflow-visible py-20 md:py-28 lg:py-32 bg-white">
            <img
                src="/figmaAssets/v2.png"
                alt="Background Glow Right"
                className="absolute -right-0 top-0  pointer-events-none z-10 object-cover "
            />
            <img
                src="/figmaAssets/v1.png"
                alt="Background Glow Left"
                className="absolute left-0 right-0 top-0 pointer-events-none z-10 object-cover "
            />
            <img
                src="/figmaAssets/virus.png"
                alt="Decoration Ball"
                className="absolute left-0 top-[45%] w-[120px] sm:w-[180px] md:w-[260px] lg:w-[314px] h-auto object-contain pointer-events-none z-10"
            />
            <div className="mx-auto w-full  max-w-[1240px] px-6 lg:px-0">
                {/* Main Card Container */}
                <div className="relative z-40 bg-white/40 w-full rounded-[36px] md:rounded-[50px] backdrop-blur-xl border border-white/30 p-8 md:p-12 lg:p-12 xl:p-16 lg:h-[360px] xl:h-[400px] 2xl:h-[417px] flex flex-col lg:flex-row items-center justify-between overflow-visible shadow-sm">

                    {/* Spiky Ball Decoration (Bottom Left) */}


                    {/* Left Content Area */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:max-w-[460px] xl:max-w-[580px] 2xl:max-w-[620px] flex flex-col items-center lg:items-start text-center lg:text-left z-20"
                    >
                        {/* Tagline */}
                        <h2 className="text-[32px] sm:text-[38px] lg:text-[40px] xl:text-[45px] font-semibold leading-[1.12] tracking-[0.02em] text-black  mb-4">
                            Your Next <span className="text-[#FF8331] ">Connection</span> is Already Nearby.
                        </h2>

                        {/* Description */}
                        <p className="text-black font-light text-sm sm:text-base leading-[24px] tracking-[-0.05em] [font-family:'Poppins',sans-serif] mb-6 lg:mb-8 max-w-[530px]">
                            Open Bru. Offer a drink. Meet people in real-life. Just real people in real places.
                        </p>

                        {/* Badges */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center lg:justify-start">
                            {/* App Store Badge */}
                            <a
                                href="#"
                                className="group flex items-center gap-[9.48px] w-full sm:w-[178px] h-[50px] px-3.5 py-2 border border-[#FF8331] rounded-[364px] bg-white/50 hover:bg-white/80 active:scale-95 transition-all duration-300 shadow-sm justify-center "
                            >
                                <img
                                    src="/figmaAssets/logos-apple-app-store.svg"
                                    alt="App Store"
                                    className="w-[22px] h-[22px] object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="flex flex-col items-start leading-[1.1]">
                                    <span className="[font-family:'Satoshi',sans-serif] text-[12px] font-medium tracking-[-0.24px] text-black">Available on the</span>
                                    <span className="[font-family:'Satoshi',sans-serif] text-[14px] font-bold tracking-[-0.24px] text-black">App Store</span>
                                </div>
                            </a>

                            {/* Google Play Badge */}
                            <a
                                href="#"
                                className="group flex items-center gap-[9.48px] w-full sm:w-[178px] h-[50px] px-3.5 py-2 border border-[#FF8331] rounded-[364px] bg-white/50 hover:bg-white/80 active:scale-95 transition-all duration-300 shadow-sm justify-center "
                            >
                                <img
                                    src="/figmaAssets/google-play-6124997-1.png"
                                    alt="Google Play"
                                    className="w-[22px] h-[22px] object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="flex flex-col items-start leading-[1.1]">
                                    <span className="[font-family:'Satoshi',sans-serif] text-[12px] font-medium tracking-[-0.24px] text-black">Get it on</span>
                                    <span className="[font-family:'Satoshi',sans-serif] text-[14px] font-bold tracking-[-0.24px] text-black">Google Play</span>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Content Area (Phone Mockups) */}
                    <motion.div
                        initial={{ opacity: 0, y: 120, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
                        className="relative w-full lg:w-auto mt-12 lg:mt-0 flex justify-center items-center lg:block"
                    >
                        {/* Desktop Mockup (Overflowing) */}
                        <div className="hidden lg:block absolute lg:w-[520px] lg:h-[442px] lg:right-[-30px] lg:top-[-220px] xl:w-[680px] xl:h-[535px] xl:right-[-45px] xl:top-[-280px] 2xl:w-[700px] 2xl:h-[590px] 2xl:right-[-100px] 2xl:top-[-320px] pointer-events-none z-20">
                            {/* Left Shadow */}
                            <div
                            // className="absolute left-[80px] bottom-[-20px] w-[158px] h-[11px] bg-black opacity-30 blur-[5px] rounded-full"
                            />
                            {/* Right Shadow */}
                            <div
                            // className="absolute right-[-50px] bottom-[170px] w-[139px] h-[27px] bg-black opacity-35 blur-[10px] rounded-full"
                            />
                            {/* Phone Mockups Image */}
                            <img
                                src="/figmaAssets/mockup-15.png"
                                alt="Bru App Mockup"
                                className="w-full h-full "
                            />
                        </div>

                        {/* Mobile Mockup (Inline/scaled) */}
                        <div className="block lg:hidden relative w-[650px] sm:w-[520px] h-[410px] sm:h-[470px]">
                            {/* <div className="absolute left-[50px] bottom-[10px] w-[120px] h-[8px] bg-black opacity-20 blur-[4px] rounded-full" />
                            <div className="absolute right-[30px] bottom-[150px] w-[120px] h-[25px] bg-black opacity-25 blur-[8px] rounded-full" /> */}
                            <img
                                src="/figmaAssets/mockup-15.png"
                                alt="Bru App Mockup"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
