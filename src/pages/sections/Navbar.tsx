import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Why Use Bru?", href: "#why-bru" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full ">
      <div className="mx-auto flex min-h-[80px] w-full max-w-[1240px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <a href="#home" aria-label="Bru home" className="flex shrink-0 flex-col items-center justify-center leading-none">
          <img className="h-auto w-[70px] object-contain" alt="Bru logo" src="/figmaAssets/rectangle-1.png" />
          <span className="mt-[-8px] [font-family:'Pacifico',Helvetica] text-[22px] font-normal leading-[normal] tracking-[-0.28px] text-[#444444]">
            Bru
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6 lg:gap-8">
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

        <div className="flex items-center gap-3">
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

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="[font-family:'Poppins',Helvetica] text-base font-normal text-black hover:opacity-70 transition-opacity"
            >
              {item.label}
            </a>
          ))}
          <Button
            type="button"
            className="w-full rounded-3xl bg-black py-3 [font-family:'Poppins',Helvetica] text-base font-medium text-white hover:bg-black/90"
          >
            Download the App!
          </Button>
        </div>
      )}
    </header>
  );
};
