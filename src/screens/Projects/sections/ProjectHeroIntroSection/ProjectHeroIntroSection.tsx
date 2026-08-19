import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

const projectImages = [
  { src: "/images/rectangle-p-1.png", alt: "Rectangle" },
  { src: "/images/rectangle-p-2.png", alt: "Rectangle" },
];

export const ProjectHeroIntroSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-5 pt-16 pb-16 sm:px-8 lg:px-20 lg:pt-[72px] lg:pb-[100px]">
      <div className="mx-auto flex w-full max-w-[calc(1440px-10rem)] flex-col items-start gap-14 lg:gap-20">
        <div className="flex w-full flex-col items-start gap-12">
          <div className="flex w-full flex-col items-start gap-8 w-[86%]">
            <h1 className="[font-family:'Google_Sans_Flex',Helvetica] w-full text-[44px] font-normal leading-[1.1] tracking-[-1.2px] text-[#363535] sm:text-[56px] md:text-[68px] lg:text-[80px] lg:leading-[96px] lg:tracking-[-2px]">
              Our work
            </h1>
            <p className="[font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[25.2px] tracking-[0] text-[#363535b2] lg:text-lg">
              A selection of recent projects demonstrating our approach to strategy, design, development and digital delivery. Each reflects our commitment to thoughtful advice, dependable delivery and long-term client relationships.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-start gap-4 sm:flex sm:flex-wrap sm:gap-6">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button className="h-auto w-full rounded-md border border-[#363535] bg-[#363535] px-7 py-3.5 [font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[22.4px] text-white hover:bg-white hover:text-[#363535] sm:w-auto">
                Discuss Your Project
              </Button>
            </Link>
            <Link to="/services" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="h-auto w-full rounded-md border border-[#363535] px-7 py-3.5 [font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[22.4px] text-[#363535] hover:bg-[#363535] hover:text-white sm:w-auto"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
