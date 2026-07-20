import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const Footer = (): JSX.Element => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        background: "linear-gradient(238.16deg, #994F1D 40%, #FF8331 72.32%)",
      }}
      className="relative w-full rounded-t-[50px] md:rounded-t-[100px] pt-24 mt-20 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden z-10"
    >
      {/* Curved top blur shadow (Ellipse 9364) */}
      <div
        className="absolute -top-[55px] left-1/2 -translate-x-1/2 w-[50%] h-[61px] bg-white rounded-[186.5px/30.5px] blur-[7px]"
      />
      <img src="/figmaAssets/footer.png" className="absolute -left-10 top-0 pointer-events-none z-10 object-cover " />
      {/* Arched Logo Cutout (Center Top) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[280px] sm:w-[380px] h-[110px] sm:h-[200px]   flex items-center justify-center z-30">
        <a href="#" className="flex flex-col items-center justify-center leading-none mt-2">
          <img
            className="h-auto w-[110px] sm:w-[200px] object-contain"
            alt="Bru logo"
            src="/figmaAssets/bru-footer-logo.png"
          />

        </a>
      </div>

      {/* Watermark Logo (Left Side) */}
      <img
        src="/figmaAssets/rectangle-23465.png"
        alt="Watermark Logo"
        className="absolute left-0 top-[50%] -translate-y-1/2 w-[300px] sm:w-[450px] lg:w-[647px] h-auto opacity-10 pointer-events-none object-contain z-0"
      />

      {/* Main Grid Content */}
      <div className="relative mx-auto w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start z-10 mb-16">

        {/* Left Column - App Info & Badges */}
        <div className="flex relative flex-col items-start text-left max-w-[420px]">

          <h3 className="[font-family:'Montserrat',sans-serif] text-[20px] sm:text-[22px] font-semibold text-white mb-3">
            Check out the app!
          </h3>
          <p className="[font-family:'Montserrat',sans-serif] text-sm sm:text-base font-normal text-white/90 leading-[1.3] mb-6">
            Stop chatting endlessly and start connecting in person. Bru is just a download away
          </p>

          {/* Badges Container */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {/* App Store Badge */}
            <a
              href="#"
              className="group flex items-center gap-[9.48px] w-full sm:w-[177.82px] h-[45px] px-3.5 py-2 border border-white rounded-[364px] bg-white/50 hover:bg-white/70 active:scale-95 transition-all duration-300 shadow-sm justify-center "
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
              className="group flex items-center gap-[9.48px] w-full sm:w-[177.82px] h-[45px] px-3.5 py-2 border border-white rounded-[364px] bg-white/50 hover:bg-white/70 active:scale-95 transition-all duration-300 shadow-sm justify-center "
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
        </div>

        {/* Right Column - Quick Links */}
        <div className="flex flex-col items-start lg:items-end text-left lg:text-right w-full lg:mt-8 mt-40">
          <div className="flex flex-col items-start gap-4">
            <h3 className="[font-family:'Montserrat',sans-serif] text-[20px] sm:text-[22px] font-semibold text-white mb-1">
              Quick links
            </h3>
            <nav aria-label="Footer Navigation">
              <ul className="flex flex-col sm:flex-row items-start sm:items-center gap-x-6 gap-y-3 text-white/95 [font-family:'Montserrat',sans-serif] text-sm sm:text-base font-normal">
                <li>
                  <a href="/#home" className="hover:text-white hover:underline transition-all duration-200">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#how-it-works" className="hover:text-white hover:underline transition-all duration-200">
                    How it Works
                  </a>
                </li>
                <li>
                  <a href="/#why-bru" className="hover:text-white hover:underline transition-all duration-200">
                    Why use Bru?
                  </a>
                </li>
                <li>
                  <a href="/#contact" className="hover:text-white hover:underline transition-all duration-200">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

      </div>

      {/* Bottom Copyright and Policy Links */}
      <div className="relative mx-auto w-full max-w-[1240px] z-10">
        {/* Divider Line */}
        <div className="w-full h-px bg-white/50 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full text-white [font-family:'Montserrat',sans-serif] text-sm sm:text-base font-medium">
          <p className="text-center md:text-left">
            © 2026 Bru App. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <NavLink to="/privacy-policy" className="hover:text-white hover:underline transition-all duration-200 cursor-pointer">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms-conditions" className="hover:text-white hover:underline transition-all duration-200 cursor-pointer">
              Terms & Conditions
            </NavLink>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
