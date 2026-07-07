import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const contactFields = [
  {
    id: "full-name",
    name: "fullName",
    type: "text",
    placeholder: "Full name",
  },
  {
    id: "email",
    name: "email",
    type: "email",
    placeholder: "Email",
  },
] as const;

const contactMethods = [
  {
    title: "Email",
    value: "support@brudating.com",
    icon: "/figmaAssets/frame-1597880409.svg",
  },
] as const;

export const ContactSection = (): JSX.Element => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("fullName") as HTMLInputElement)?.value || "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:support@brudating.com?subject=${subject}&body=${body}`;
  };
  return (
    <section className="relative w-full overflow-hidden  py-16 md:py-20 lg:py-24">
      <img
        className="pointer-events-none absolute -right-52 top-[55%] hidden  -translate-y-1/2 lg:block"
        alt="Group"
        src="/figmaAssets/group-4829.png"
      />
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-6 md:px-10 lg:grid-cols-[minmax(0,600px)_minmax(0,624px)] lg:gap-4 lg:px-[100px]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-center gap-10 lg:pr-4"
        >
          <header className="w-full max-w-[600px]">
            <h2 className="text-[42px] leading-[46px] tracking-[-0.84px] text-transparent md:text-[54px] md:leading-[60px] font-extrabold lg:text-[65px] lg:leading-[70px] ">
              <span className="text-black">We are always ready to </span>
              <span className=" font-bold text-[#ff8331]">
                help you.
              </span>
            </h2>
          </header>
          <address className="w-full max-w-[538px] not-italic">
            <div className="flex flex-col gap-[15px]">
              {contactMethods.map((item) => (
                <Card
                  key={item.value}
                  className="border-0 bg-[#fef3ec] shadow-none backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] rounded-3xl"
                >
                  <CardContent className="flex items-center gap-[15px] p-3">
                    <img
                      className="h-[60px] w-[60px] shrink-0"
                      alt={item.title}
                      src={item.icon}
                    />
                    <div className="flex min-w-0 flex-1 flex-col items-start gap-[3px]">
                      <p className="mt-[-1.00px] whitespace-nowrap text-base leading-5 text-black [font-family:'Clash_Display-Semibold',Helvetica]">
                        {item.title}
                      </p>
                      <a
                        href={`mailto:${item.value}`}
                        className="break-all text-lg leading-6 text-[#983c00] "
                      >
                        {item.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </address>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="relative overflow-hidden rounded-[36px] border-0 bg-[#fee9db80] shadow-none backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] lg:rounded-[50px]">
          <CardContent className="relative z-10 p-6 md:p-8 lg:px-8 lg:pb-8 lg:pt-[50px]">
            <div className="flex flex-col gap-10">
              <header className="flex max-w-[560px] flex-col items-start gap-3">
                <h3 className="mt-[-1.00px] text-[34px] leading-[42px] tracking-[-0.90px] text-black md:text-[40px] md:leading-[48px] lg:text-[45px] lg:leading-[55px] ">
                  Get In Touch
                </h3>
                <p className="text-base leading-6 text-black md:text-lg ">
                  Got a question, idea, or partnership in mind? Reach out!
                  We&apos;re always open to connecting with people who want to
                  shape the future of real-world connections.
                </p>
              </header>
              <form onSubmit={handleSubmit} className="flex max-w-[560px] flex-col items-start gap-4">
                {contactFields.map((field) => (
                  <Input
                    key={field.id}
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    defaultValue=""
                    placeholder={field.placeholder}
                    className="h-[65px] rounded-2xl border-0 bg-[#fefefecc] px-6 text-base leading-5 text-black shadow-none placeholder:text-[#6d6d6d] [font-family:'Clash_Display-Medium',Helvetica] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] focus-visible:ring-0"
                  />
                ))}

                <Textarea
                  id="message"
                  name="message"
                  defaultValue=""
                  placeholder="Message"
                  className="min-h-[120px] resize-none rounded-2xl border-0 bg-[#fefefecc] px-6 py-[23px] text-base leading-6 text-black shadow-none placeholder:text-[#6d6d6d] [font-family:'Clash_Display-Medium',Helvetica] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] focus-visible:ring-0"
                />
                <Button
                  type="submit"
                  className="mt-[15px] inline-flex h-auto min-h-[82px] w-full max-w-[236px] items-center justify-center gap-2.5 rounded-[50px] bg-[#ff8331] px-9 py-[29px] text-lg leading-6 text-white hover:bg-[#ff8331]/90 [font-family:'Clash_Display-Semibold',Helvetica]"
                >
                  <img
                    className="h-6 w-6"
                    alt="Streamline send"
                    src="/figmaAssets/streamline-send-email-solid.svg"
                  />
                  <span className="whitespace-nowrap">Send Message</span>
                </Button>
              </form>
            </div>
          </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
