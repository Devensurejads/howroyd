import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

const ctaItems = [
  {
    label: "Discuss Your Project",
    path: "/contact",
    variant: "default" as const,
    className:
      "h-auto rounded-md border border-[#363535] bg-[#363535] px-7 py-3.5 text-base font-normal leading-[22.4px] text-white hover:bg-white hover:text-[#363535] [font-family:'Google_Sans_Flex',Helvetica]",
  },
  {
    label: "View Our Work",
    path: "/projects",
    variant: "outline" as const,
    className:
      "h-auto rounded-md border border-[#363535] bg-transparent px-7 py-3.5 text-base font-normal leading-[22.4px] text-[#363535] hover:bg-[#363535] hover:text-white [font-family:'Google_Sans_Flex',Helvetica]",
  },
];

const brandSectionTitle = "Organisations we've worked with";

const brandLogos = Array.from({ length: 10 }, (_, index) => ({
  src: `/images/c-${index + 1}.svg`,
  alt: `Client logo ${index + 1}`,
}));

export const HeroSection = (): JSX.Element => {
  return (
    <>
      <section className="relative flex w-full self-stretch px-5 pt-16 pb-[100px] sm:px-8 lg:px-20 lg:pt-[100px]">
        <div className="mx-auto flex w-full max-w-[calc(1440px-10rem)] flex-col items-start gap-12 lg:gap-12">
          <div className="flex w-full flex-col items-start gap-8 sm:w-[86%]">
            <h1 className="[font-family:'Google_Sans_Flex',Helvetica] text-[42px] font-normal leading-[1.12] tracking-[-1.5px] text-[#363535] sm:text-[56px] lg:text-[80px] lg:leading-[96px] lg:tracking-[-2px]">
              Helping organisations deliver successful digital projects
            </h1>
            <p className="[font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[25.2px] text-[#363535b2] sm:text-lg">
              Howroyd Group helps organisations plan, deliver and support successful websites and digital projects. Drawing on nearly thirty years' experience in web development, project management and digital consultancy, we provide practical advice, dependable delivery and a single point of accountability throughout every stage of a project.
              <br />
              <br />
              Whether working directly with organisations or supporting digital agencies through white-label partnerships, our focus is the same: understanding your objectives, recommending the right solution and delivering work that remains effective long after launch.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-6">
            {ctaItems.map((item) => (
              <Link key={item.label} to={item.path}>
                <Button
                  type="button"
                  variant={item.variant}
                  className={item.className}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="relative flex w-full bg-[#00000008] self-stretch px-5 pt-16 pb-[100px] sm:px-8 lg:px-20 lg:pt-[100px]">
        <div className="mx-auto flex w-full max-w-[calc(1440px-10rem)] flex-col items-start gap-16 lg:gap-20">
          <div className="flex w-full flex-col items-start gap-8">
            <section className="flex w-full flex-col gap-8 rounded-2xl">
              <h2 className="[font-family:'Google_Sans_Flex',Helvetica] text-4xl font-normal text-[#363535] sm:text-5xl lg:text-[64px]">
                Latest Project
              </h2>
              <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-flex-start">
                <div className="w-full overflow-hidden lg:w-1/2">
                  <img
                    className="h-full w-full object-cover"
                    alt="Gallagher Developments project"
                    src="/images/gallagher-estates.webp"
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-6 lg:w-1/2">
                  <h3 className="[font-family:'Google_Sans_Flex',Helvetica] text-[28px] font-normal leading-[38.4px] tracking-[-1px] text-[#363535] sm:text-[32px]">
                    Gallagher Developments
                  </h3>
                  <div className="flex flex-col gap-4">
                    <p className="[font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[25.2px] text-[#363535] sm:text-lg">
                      Our objective was to create a site that reflects the
                      scale, experience and professionalism of Gallagher
                      Developments as an effective platform for showcasing
                      current and completed projects.
                    </p>
                    <p className="[font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[25.2px] text-[#363535] sm:text-lg">
                      Designed and developed to be fully responsive we believe
                      the site promotes company's extensive portfolio in a
                      clear and engaging way. A fully editable content
                      management system enables the their team to easily
                      update content without technical expertise.
                    </p>
                  </div>
                  <img
                    className="w-[788px]"
                    alt="Gallagher Developments logo"
                    src="/images/frame-53.svg"
                  />
                  <div className="flex w-full items-center justify-end gap-1">
                    <a
                      href="https://gallagher.atelier.anzu.chancom.net/"
                      target="_blank"
                      className="flex items-center gap-1 [font-family:'Google_Sans_Flex',Helvetica] text-lg font-medium leading-[25.2px] text-[#0066bb]"
                    >
                      <span>Visit Site</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="relative flex w-full self-stretch px-5 pt-16 pb-[100px] sm:px-8 lg:px-20 lg:pt-[100px]">
        <div className="mx-auto flex w-full max-w-[calc(1440px-10rem)] flex-col items-start gap-16 lg:gap-20">
          <section className="flex w-full flex-col items-center gap-8 py-5">
            <h3 className="[font-family:'Google_Sans_Flex',Helvetica] text-center text-xl font-normal leading-7 text-[#363535]">
              {brandSectionTitle}
            </h3>
            <div className="group flex w-full overflow-hidden [--duration:35s] [--gap:4rem] [gap:var(--gap)] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              {Array.from({ length: 4 }, (_, groupIndex) => (
                <div
                  key={groupIndex}
                  aria-hidden={groupIndex > 0}
                  className="flex shrink-0 animate-marquee items-center [gap:var(--gap)] group-hover:[animation-play-state:paused]"
                >
                  {brandLogos.map((logo) => (
                    <img
                      key={logo.alt}
                      className="h-11 w-auto shrink-0 object-contain"
                      alt={logo.alt}
                      src={logo.src}
                    />
                  ))}
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
