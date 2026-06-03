import { motion } from "framer-motion";

export const FeatureHighlightSection = (): JSX.Element => {
  const cardClass =
    "relative rounded-3xl overflow-hidden " +
    "shadow-[inset_-10px_10px_20px_#ffffff40,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] " +
    "backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] " +
    "bg-[linear-gradient(175deg,rgba(255,107,7,0.5)_0%,rgba(255,152,83,0.5)_100%)]";

  const pillClass =
    "flex items-center gap-1.5 px-2.5 py-2 bg-[#fff9f4cc] rounded-[75px] shadow-[0px_3px_22.5px_#83838340]";

  const avatarClass = "w-8 h-8 sm:w-[44px] sm:h-[44px] object-cover flex-shrink-0";

  const pillName =
    "[font-family:'Poppins',Helvetica] font-bold text-black text-[10px] sm:text-[13.5px] tracking-[-0.68px] leading-tight";

  const pillDist =
    "[font-family:'Poppins',Helvetica] font-normal text-black text-[6px] sm:text-[7.5px] tracking-[-0.38px] leading-[19.9px] whitespace-nowrap";

  const cardTitle =
    " font-normal text-transparent " +
    "text-[clamp(15px,2.2vw,32px)] tracking-[0] leading-[1.25]";

  const topGlow =
    "absolute -top-[50px] left-1/2 -translate-x-1/2 w-[373px] h-[61px] bg-white rounded-[186.5px/30.5px] blur-[7px]";

  return (
    /* ─────────────────────────────────────────────────────────────────────────
       OUTER: was absolute+fixed-1440, now relative+full-width so it flows
       naturally inside whatever parent positions it.
    ───────────────────────────────────────────────────────────────────────── */
    <section className="relative w-full overflow-hidden py-12 sm:py-16">

      {/* ── background orb ── */}
      <div className="absolute -top-[40%] left-1/2 -translate-x-1/2 w-[150vw] max-w-[1492px] aspect-square bg-[#ff8331] rounded-full -rotate-90 blur-[150px] opacity-40 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[100px]">

        {/* ══════════════════════════════════════════════════
            HEADER ROW
        ══════════════════════════════════════════════════ */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8 lg:mb-[90px]">

          {/* left: heading + icon row */}
          <div className="inline-flex flex-col items-start justify-center gap-2">
            <div className=" font-extrabold text-transparent text-[clamp(38px,5.5vw,70px)] text-center tracking-[1.40px] leading-[1.1] whitespace-nowrap">
              <span className="text-black tracking-[0.98px]">How It </span>
              <span className="text-white tracking-[0.98px]">works</span>
            </div>
            <div className="inline-flex items-center gap-[9.74px]">
              <img
                className="w-[60px] h-[30px] sm:w-[84px] sm:h-[42px]"
                alt="Frame"
                src="/figmaAssets/frame-1597880379.svg"
              />
              <div className="w-[60px] h-[30px] sm:w-[84px] sm:h-[42px] bg-[#ffffff33] rounded-[60.87px] overflow-hidden flex items-center justify-center backdrop-blur-[2.0px] backdrop-brightness-[110%] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)]">
                <span className="[font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-[22px] sm:text-[31.2px] text-center tracking-[-0.31px] leading-[33.5px]">
                  ☕
                </span>
              </div>
              <img
                className="w-[60px] h-[30px] sm:w-[84px] sm:h-[42px]"
                alt="Frame"
                src="/figmaAssets/frame-1597880381.svg"
              />
            </div>
          </div>

          {/* right: divider + description */}
          <div className="inline-flex items-center gap-4">
            <img
              className="w-1 h-[60px] sm:h-[83px] flex-shrink-0"
              alt="Line"
              src="/figmaAssets/line-19.svg"
            />
            <p className="max-w-[492px]  font-normal text-black text-sm sm:text-base lg:text-lg tracking-[0] leading-6">
              People within your radius appear on your feed No algorithms, No
              swiping blindly Just who's actually nearby
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            CARDS GRID  —  2-col on md+, 1-col on mobile
        ══════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* ──────────────────────────────────────────────
              CARD 1: Open Bru & see people around you
          ────────────────────────────────────────────── */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className={`${cardClass} h-[280px] sm:h-[360px] lg:h-[420px]`}
          >
            <div className={topGlow} />

            {/* title */}
            <div className={` p-6  ${cardTitle}`}>
              <span className="text-[#983c00] font-extrabold leading-9">Open Bru</span>
              <span className="text-white font-extrabold leading-9">
                {" "}&amp;&nbsp;&nbsp;see people around you in real time.
              </span>
            </div>

            {/* map visualization */}
            <img
              className="absolute top-[26%] left-[5%] w-[55%] max-w-[346px]"
              alt="Group"
              src="/figmaAssets/group-1000010470.png"
            />

            {/* phone */}
            <motion.div 
              initial={{ opacity: 0, y: 120, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
              className="absolute right-5 bottom-0 w-[100%] max-w-[230px] h-[72%]">             
              <img
                className="absolute top-0 left-0 w-full h-full object-contain object-bottom"
                alt="Phone"
                src="/figmaAssets/how-it-work.png"
              />
            </motion.div>

            {/* user pills - orbital animation around center pin */}
            <div className="absolute top-[60%] left-[32.5%] w-0 h-0 z-20 pointer-events-none">
              
              {/* pill: Zion Lark (Starts Top-Left ~225deg) */}
              <div className="animate-orbit" style={{ "--orbit-radius": "min(22vw, 120px)", "--orbit-duration": "40s", "--orbit-delay": "-25s", "--static-angle": "225deg" } as React.CSSProperties}>
                <div className="animate-float-wrapper pointer-events-auto" style={{ "--float-delay": "0s" } as React.CSSProperties}>
                  <div className="-translate-x-1/2 -translate-y-1/2 w-max">
                    <div className={pillClass}>
                      <img className={avatarClass} alt="Ellipse" src="/figmaAssets/ellipse-9339-3.svg" />
                      <div className="inline-flex flex-col items-start justify-center">
                        <div className={pillName}>Zion Lark</div>
                        <div className="inline-flex items-center gap-[3.54px]">
                          <div className="w-[5px] h-[5px] bg-[#ff8331] rounded-full flex-shrink-0" />
                          <div className={pillDist}>55m Away</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* pill: Remi (Starts Bottom-Left ~135deg) */}
              <div className="animate-orbit" style={{ "--orbit-radius": "min(20vw, 120px)", "--orbit-duration": "40s", "--orbit-delay": "-15s", "--static-angle": "135deg" } as React.CSSProperties}>
                <div className="animate-float-wrapper pointer-events-auto" style={{ "--float-delay": "-2s" } as React.CSSProperties}>
                  <div className="-translate-x-1/2 -translate-y-1/2 w-max">
                    <div className={pillClass}>
                      <img className={avatarClass} alt="Ellipse" src="/figmaAssets/ellipse-9339-1.svg" />
                      <div className="inline-flex flex-col items-start justify-center">
                        <div className={pillName}>Remi</div>
                        <div className="inline-flex items-center gap-[3.54px]">
                          <div className="w-[5px] h-[5px] bg-[#ff8331] rounded-full flex-shrink-0" />
                          <div className={pillDist}>55m Away</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* pill: Larkin (Starts Mid-Right ~0deg) */}
              <div className="animate-orbit" style={{ "--orbit-radius": "min(20vw, 120px)", "--orbit-duration": "40s", "--orbit-delay": "0s", "--static-angle": "0deg" } as React.CSSProperties}>
                <div className="animate-float-wrapper pointer-events-auto" style={{ "--float-delay": "-1s" } as React.CSSProperties}>
                  <div className="-translate-x-1/2 -translate-y-1/2 w-max">
                    <div className={pillClass}>
                      <img className={avatarClass} alt="Ellipse" src="/figmaAssets/ellipse-9306.svg" />
                      <div className="inline-flex flex-col items-start justify-center">
                        <div className={pillName}>Larkin</div>
                        <div className="inline-flex items-center gap-[3.54px]">
                          <div className="w-[5px] h-[5px] bg-[#ff8331] rounded-full flex-shrink-0" />
                          <div className={pillDist}>55m Away</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* ──────────────────────────────────────────────
              CARD 2: Offer a drink / swipe to show interest
          ────────────────────────────────────────────── */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`${cardClass} h-[280px] sm:h-[360px] lg:h-[420px]`}
          >
            <div className={topGlow} />

            {/* diagonal stripes */}
            <div className="inline-flex h-[782px] items-center absolute top-[-182px] left-[-50px] rotate-[43.39deg] opacity-20 pointer-events-none">
              {Array.from({ length: 18 }, (_, i) => (
                <div
                  key={i}
                  className={`relative self-stretch w-10 ${i % 2 === 0 ? "bg-[#fdeee4]" : "bg-[#f4f4f44c]"
                    }`}
                />
              ))}
            </div>

            {/* title */}
            <div className={`absolute top-[7%] left-[5%] right-[5%] ${cardTitle}`}>
              <span className="text-[#983c00] font-extrabold leading-9">Offer</span>
              <span className="text-white font-extrabold leading-9"> a drink&nbsp;&nbsp;or </span>
              <span className="text-[#983c00] font-extrabold leading-9">swipe </span>
              <span className="text-white leading-9 font-extrabold">to show interest</span>
            </div>

            {/* feature pills */}
            <div className="absolute top-[30%] left-[5%] right-[5%] flex flex-col gap-3 sm:gap-4">

              {/* Offer A Drink card */}
              <div className="relative w-full bg-[#fff9f4cc] rounded-[29px] shadow-[0px_4px_30px_#83838340] px-3 py-2.5 rotate-[-3.03deg]">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-[50px] h-[50px] sm:w-[58px] sm:h-[58px] flex-shrink-0 rounded-[29px] bg-white flex items-center justify-center">
                    <span className="text-[26px] sm:text-[32px] leading-none">☕</span>
                    <img
                      className="absolute inset-0 w-full h-full"
                      alt="Frame"
                      src="/figmaAssets/frame-1171277672.svg"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1 flex-wrap">
                      <span className="[font-family:'Poppins',Helvetica] font-bold text-[#ff8331] text-[13px] sm:text-[18.6px] tracking-[-0.93px] leading-tight">
                        Offer A
                      </span>
                      <span className="[font-family:'Poppins',Helvetica] font-bold text-[#ff8331] text-[13px] sm:text-[18.6px] tracking-[-0.93px] leading-tight">
                        Tea
                      </span>
                    </div>
                    <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-[11px] sm:text-sm tracking-[-0.70px] leading-tight">
                      They see your invite they decide
                    </span>
                  </div>
                </div>
              </div>

              {/* Make a Move card */}
              <div className="relative w-full bg-[#fff9f4cc] rounded-[29px] shadow-[0px_4px_30px_#83838340] px-3 py-2.5 rotate-[-2.47deg]">
                <div className="flex items-center gap-2.5">
                  <div className="w-[50px] h-[50px] sm:w-[58px] sm:h-[58px] flex-shrink-0 rounded-[29px] bg-white flex items-center justify-center">
                    <span className="text-[26px] sm:text-[32px] leading-none">👇</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="[font-family:'Poppins',Helvetica] font-bold text-[#ff8331] text-[13px] sm:text-[18.6px] tracking-[-0.93px] leading-tight">
                      Make a Move, Quietly
                    </span>
                    <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-[11px] sm:text-sm tracking-[-0.70px] leading-tight">
                      Your interest stays hidden until they feel the same
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ──────────────────────────────────────────────
              CARD 3: Matched instantly
          ────────────────────────────────────────────── */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${cardClass} h-[240px] sm:h-[300px] lg:h-[361px]`}
          >
            <div className={topGlow} />

            {/* title */}
            <div className={`absolute top-[7%] left-[5%] right-[5%] ${cardTitle}`}>
              <span className="text-white font-extrabold">
                If the interest in mutual. <br />
              </span>
              <span className="text-[#983c00] font-extrabold">you're</span>
              <span className="text-white">&nbsp;</span>
              <span className="text-[#983c00] font-extrabold">matched instantly.</span>
            </div>

            {/* starburst decoration */}
           

            {/* match UI */}
            <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 w-[55%] max-w-[304px]">
            
              <div className="relative flex items-center justify-center">
                 <div className="absolute -top-[50%]  w-[40%] max-w-[145px]">
              <img
                className="w-full rotate-[-8.08deg]"
                alt="Group"
                src="/figmaAssets/group-1000010469.png"
              />
            </div>
                <img
                  className="w-full"
                  alt="Rectangle"
                  src="/figmaAssets/its-match.png"
                />
               
              </div>
            </div>
          </motion.div>

          {/* ──────────────────────────────────────────────
              CARD 4: Find each other offline
          ────────────────────────────────────────────── */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`${cardClass} h-[240px] sm:h-[300px] lg:h-[361px]`}
          >
            <div className={topGlow} />

            {/* background shape */}
            <img
              className="absolute w-full h-full top-0 left-0 object-cover opacity-80"
              alt="Group"
              src="/figmaAssets/group.png"
            />

            {/* title */}
            <div className={`absolute top-[7%] left-[5%] right-[5%] ${cardTitle}`}>
              <span className="text-white font-extrabold">Find each other, then take it </span>
              <br/>
              <span className="text-[#983c00] font-extrabold">offline in real life.</span>
            </div>

            {/* phone mockup */}
            <div 
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[82%] max-w-[300px] ">              

              {/* phone frame image */}
              <img
                className="absolute bottom-0  left-0 w-full pointer-events-none"
                alt="Phone"
                src="/figmaAssets/larkin-phone-wrap.png"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};