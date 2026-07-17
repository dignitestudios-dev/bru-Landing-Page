import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export const FeatureHighlightSection = (): JSX.Element => {

  // ── Rotating drink data for Card 2 (using PNG images) ──
  const drinks = [
    { img: "/figmaAssets/cofee.png", label: "Coffee", bg: "#fff3e0" },
    { img: "/figmaAssets/tea.png", label: "Tea", bg: "#e8f5e9" },
    { img: "/figmaAssets/beer.png", label: "Beer", bg: "#fff8e1" },
    { img: "/figmaAssets/coctail.png", label: "Cocktail", bg: "#fce4ec" },
  ];
  const [drinkIdx, setDrinkIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setDrinkIdx(i => (i + 1) % drinks.length), 2000);
    return () => clearInterval(t);
  }, []);
  const currentDrink = drinks[drinkIdx];

  // ── Card 3 match animation ──
  const card3Ref = useRef<HTMLDivElement>(null);
  const card3InView = useInView(card3Ref, { once: true, margin: "-60px" });

  // Confetti particles – 12 pieces spread around the celebration image
  const confettiPieces = [
    { angle: 0, dist: 52, color: "#FF8331", size: 7, delay: 0.15 },
    { angle: 30, dist: 60, color: "#FFD700", size: 5, delay: 0.18 },
    { angle: 60, dist: 55, color: "#FF4081", size: 8, delay: 0.16 },
    { angle: 90, dist: 58, color: "#00BCD4", size: 5, delay: 0.20 },
    { angle: 120, dist: 50, color: "#FF8331", size: 6, delay: 0.17 },
    { angle: 150, dist: 62, color: "#9C27B0", size: 7, delay: 0.22 },
    { angle: 180, dist: 54, color: "#FFD700", size: 5, delay: 0.19 },
    { angle: 210, dist: 58, color: "#FF4081", size: 8, delay: 0.15 },
    { angle: 240, dist: 52, color: "#4CAF50", size: 6, delay: 0.21 },
    { angle: 270, dist: 60, color: "#FF8331", size: 5, delay: 0.18 },
    { angle: 300, dist: 56, color: "#FFD700", size: 7, delay: 0.16 },
    { angle: 330, dist: 62, color: "#00BCD4", size: 5, delay: 0.23 },
  ];

  // ── Card 4 chat preview animation ──
  // Steps: 0 = empty, 1 = first bubble, 2 = second bubble, 3 = third bubble.
  // Then loops back to 0. Timings approximate the reference video (~0.7s / 1.5s / 1.5s / 1.5s).
  const [chatStep, setChatStep] = useState(0);
  useEffect(() => {
    const stepDurations = [700, 1500, 1500, 1500]; // ms to wait while on this step before advancing
    let step = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const advance = () => {
      timeoutId = setTimeout(() => {
        step = (step + 1) % stepDurations.length;
        setChatStep(step);
        advance();
      }, stepDurations[step]);
    };

    advance();
    return () => clearTimeout(timeoutId);
  }, []);

  const chatMessages = [
    {
      from: "them" as const,
      text: "Hi, saw your Drink offer!",
      time: "10:02 PM",
    },
    {
      from: "me" as const,
      text: "haha yes! You were at the table by the window right?",
      time: "10:04 PM",
    },
    {
      from: "them" as const,
      text: "OMG Yes ",
      time: "10:06 PM",
    },
  ];

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
              <span className="text-white tracking-[0.98px]">Works</span>
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
                        <div className={`${pillName} `}>Zion Lark</div>
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
                      <img className={avatarClass} alt="Ellipse" src="/figmaAssets/ellipse-9306.svg" />
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
                      <img className={avatarClass} alt="Ellipse" src="/figmaAssets/ellipse-9339-1.svg" />
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
              <span className="text-white font-extrabold leading-9"> a </span>
              <span className="text-[#983c00] font-extrabold leading-9">Drink</span>
            </div>

            {/* feature pills */}
            <div className="absolute top-[30%] left-[5%] right-[5%] flex flex-col gap-3 sm:gap-4">

              {/* Offer A Drink card — rotating icon + text */}
              <div className="relative w-full bg-[#fff9f4cc] rounded-[29px] shadow-[0px_4px_30px_#83838340] px-3 py-2.5 rotate-[-3.03deg] overflow-hidden">
                <div className="flex items-center gap-2.5">

                  {/* Animated icon bubble */}
                  <div className="relative w-[50px] h-[50px] sm:w-[58px] sm:h-[58px] flex-shrink-0 rounded-[29px] flex items-center justify-center overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={drinkIdx}
                        initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.5, rotate: 30 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center rounded-[29px]"
                        style={{ backgroundColor: currentDrink.bg }}
                      >
                        <img
                          src={currentDrink.img}
                          alt={currentDrink.label}
                          className="w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] object-contain"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Animated text */}
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1 flex-wrap h-[24px] sm:h-[28px] overflow-hidden relative">
                      <span className="[font-family:'Poppins',Helvetica] font-bold text-[#ff8331] text-[13px] sm:text-[18.6px] tracking-[-0.93px] leading-tight flex-shrink-0">
                        Offer A
                      </span>
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={drinkIdx}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="[font-family:'Poppins',Helvetica] font-bold text-[#ff8331] text-[13px] sm:text-[18.6px] tracking-[-0.93px] leading-tight"
                        >
                          {currentDrink.label}
                        </motion.span>
                      </AnimatePresence>
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
            ref={card3Ref}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${cardClass} h-[240px] sm:h-[300px] lg:h-[441px]`}
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

            {/* match UI — premium slide-up + confetti */}
            <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 w-[55%] max-w-[304px]">
              <div className="relative flex items-center justify-center">

                {/* ── Celebration image — slides up with slight delay ── */}

                {/* ── Celebration image — continuous bottom-to-top loop ── */}
                <motion.div
                  className="absolute -top-[50%] w-[40%] max-w-[145px] z-20"
                  animate={
                    card3InView
                      ? {
                        opacity: [0, 1, 1, 0],
                        y: [20, 0, 0, 20],
                        scale: [0.8, 1, 1, 0.8],
                      }
                      : { opacity: 0, y: 20, scale: 0.8 }
                  }
                  transition={{
                    duration: 4,
                    delay: 0.5,
                    ease: "easeInOut",
                    times: [0, 0.22, 0.75, 1],
                    repeat: Infinity,
                    repeatDelay: 0.2,
                  }}
                >
                  <img
                    className="w-full rotate-[-8.08deg]"
                    alt="Group"
                    src="/figmaAssets/group-1000010469.png"
                  />

                  {/* ── Confetti burst — loops in sync with celebration image ── */}
                  <div className="absolute inset-0 pointer-events-none">
                    {confettiPieces.map((p, i) => {
                      const rad = (p.angle * Math.PI) / 180;
                      const tx = Math.cos(rad) * p.dist;
                      const ty = Math.sin(rad) * p.dist;
                      // Each confetti fires at ~1s into each 4.4s total cycle (4s + 0.2 repeatDelay + 0.5 initial delay)
                      const cycleDuration = 0.9;
                      const cycleRepeatDelay = 4 + 0.2 - cycleDuration; // = 3.3s
                      return (
                        <motion.div
                          key={i}
                          className="absolute rounded-sm"
                          style={{
                            width: p.size,
                            height: p.size,
                            backgroundColor: p.color,
                            top: "50%",
                            left: "50%",
                            marginTop: -p.size / 2,
                            marginLeft: -p.size / 2,
                            transformOrigin: "center",
                          }}
                          animate={
                            card3InView
                              ? {
                                opacity: [0, 1, 1, 0],
                                x: [0, tx * 0.6, tx],
                                y: [0, ty * 0.6, ty],
                                scale: [0, 1.3, 1],
                                rotate: [0, 180, 360],
                              }
                              : { opacity: 0, x: 0, y: 0, scale: 0 }
                          }
                          transition={{
                            duration: cycleDuration,
                            delay: p.delay + 0.5 + 0.8,
                            ease: [0.22, 1, 0.36, 1],
                            repeat: Infinity,
                            repeatDelay: cycleRepeatDelay,
                            opacity: { times: [0, 0.15, 0.6, 1] },
                          }}
                        />
                      );
                    })}
                  </div>
                </motion.div>

                {/* ── Match card — main slide-up animation ── */}
                <motion.img
                  className="w-full"
                  alt="It's a Match"
                  src="/figmaAssets/its-match.png"
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  animate={card3InView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
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
            className={`${cardClass} h-[380px] sm:h-[300px] lg:h-[441px]`}
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
              <br />
              <span className="text-[#983c00] font-extrabold">offline in real life.</span>
            </div>

            {/* phone mockup — real phone-frame image, chat animates below the header inside it */}
            <div className="absolute bottom-0 md:-bottom-7 left-1/2 -translate-x-1/2 w-[88%] md:w-[82%] max-w-[390px]">
              <div className="relative w-full">

                {/* phone frame image — notch, status bar & "Larkin" header are baked into this asset */}
                <img
                  className="relative w-full pointer-events-none select-none"
                  alt="Phone"
                  src="/figmaAssets/larkin-phone-wrap.png"
                />

                {/* chat messages — overlaid below the header, sequential top-to-bottom reveal, then loop */}
                <div className="absolute inset-x-0 top-[43%] bottom-[5%] overflow-hidden px-2 pointer-events-none">
                  <div className="flex flex-col gap-2">
                    <AnimatePresence>
                      {chatMessages.slice(0, chatStep).map((msg, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className={`max-w-[78%] rounded-2xl px-3 py-2 shadow-sm ${msg.from === "me"
                            ? "self-end mr-8 bg-[#ff8331] rounded-tr-sm"
                            : "self-start ml-8 bg-white rounded-tl-sm"
                            }`}
                        >
                          <p
                            className={`[font-family:'Poppins',Helvetica] text-[10.5px] leading-snug ${msg.from === "me" ? "text-white" : "text-black"
                              }`}
                          >
                            {msg.text}
                          </p>
                          <span
                            className={`[font-family:'Poppins',Helvetica] text-[7.5px] block mt-0.5 ${msg.from === "me" ? "text-white/70" : "text-black/40"
                              }`}
                          >
                            {msg.time}
                          </span>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};