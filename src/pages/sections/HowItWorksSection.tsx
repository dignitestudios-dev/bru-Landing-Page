import { Card, CardContent } from "@/components/ui/card";



export const HowItWorksSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="container relative">
        <header
          style={{
            backgroundImage: `url('/figmaAssets/group-people.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="mx-auto  flex h-[600px] max-w-[972px] flex-col items-center justify-center px-4  text-center sm:px-6 ">
          <h2 className=" text-[34px] font-black leading-[1.05] tracking-[0.68px] text-black sm:text-[42px] sm:tracking-[0.84px] md:text-[56px] md:tracking-[1.12px] lg:text-[70px] lg:leading-[75px] lg:tracking-[1.4px]">
            Connect With People You&apos;ve{" "}
            <span className="text-[#ff8331]">Swiped</span>{" "}
            <span className="text-[#ff8331]">Or</span>{" "}
            <span className="text-[#ff8331]">Matched</span> With Before
          </h2>
        </header>
      </div>
    </section>
  );
};
