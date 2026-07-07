import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "How it Works", href: "/#how-it-works" },
  { label: "Why Use Bru?", href: "/#why-bru" },
  { label: "Contact Us", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className=" top-0 z-50 w-full ">
      <div className=" py-5 flex min-h-[80px] w-full   items-center justify-center    backdrop-blur-md z-50">
        <div className="relative flex items-center px-4 sm:px-6 lg:px-8 w-full max-w-[1400px]">
          {/* Invisible spacer on mobile to balance the hamburger on the right */}
          <div className="md:hidden w-[44px]" />

          {/* Logo — centered on mobile, left-aligned on md+ */}
          <a href="/#home" aria-label="Bru home" className="shrink-0 mt-6 flex flex-col items-center justify-center leading-none absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <img className="h-auto w-[80px] md:w-[110px] object-contain" alt="Bru logo" src="/figmaAssets/f-logo.png" />
          </a>

          <nav aria-label="Primary" className="hidden w-full md:block ml-8">
            <ul className="flex items-center w-full justify-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block [font-family:'Poppins',Helvetica] text-lg font-normal leading-[normal] tracking-[-0.18px] text-black transition-opacity hover:opacity-70"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3 ml-auto">
            <Button
              type="button"
              className="hidden md:flex h-auto shrink-0 rounded-3xl bg-black px-6 py-3 [font-family:'Poppins',Helvetica] text-base font-medium leading-[normal] tracking-[-0.48px] text-white hover:bg-black/90 sm:px-8"
            >
              Download the App!
            </Button>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-5 bg-white z-50 absolute w-full  px-6 py-4 flex flex-col gap-4 overflow-hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="[font-family:'Poppins',Helvetica] text-base font-normal text-black hover:opacity-70 transition-opacity block py-2"
              >
                {item.label}
              </a>
            ))}
            <Button
              type="button"
              className="w-full rounded-3xl bg-black py-3 [font-family:'Poppins',Helvetica] text-base font-medium text-white hover:bg-black/90 mt-2"
            >
              Download the App!
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
