import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

const agencyBenefits = [
  "Direct access to senior expertise",
  "Additional capacity without increasing overheads",
  "The right specialists for each project",
  "A single point of accountability",
  "Reliable white-label delivery",
];

export const ProjectHeroIntroSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-5 pt-16 pb-16 sm:px-8 lg:px-20 lg:pt-[72px] lg:pb-[100px]">
      <div className="mx-auto flex w-full max-w-[calc(1440px-10rem)] flex-col items-start gap-14 lg:gap-20">
        <div className="flex w-full flex-col items-start gap-12">
          <div className="flex w-full flex-col items-start gap-8 w-[86%]">
            <h1 className="[font-family:'Google_Sans_Flex',Helvetica] text-[44px] font-normal leading-[1.1] tracking-[-1.2px] text-[#363535] sm:text-[56px] md:text-[68px] lg:text-[80px] lg:leading-[96px] lg:tracking-[-2px]">
              Supporting digital agencies behind the scenes
            </h1>
            <p className="[font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[25.2px] tracking-[0] text-[#363535b2] lg:text-lg">
              Whether you need additional development capacity, experienced project leadership or specialist technical expertise, Howroyd Group works as a seamless extension of your team. 
              <br />
              <br />
              Drawing on almost thirty years' experience working both within and alongside digital agencies, we understand the commercial, technical and client-facing demands of agency life.
            </p>
            <h4 className="[font-family:'Google_Sans_Flex',Helvetica] text-[28px] font-normal leading-[38.4px] tracking-[-1px] text-[#363535] sm:text-[32px]">
              Why agencies choose to work with us:
            </h4>
            <ul className="flex flex-col gap-3">
              {agencyBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 [font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[25.2px] text-[#363535b2] lg:text-lg"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#363535]" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap items-start gap-4 sm:gap-6">
            <Link to="/contact">
              <Button className="h-auto rounded-md border border-[#363535] bg-[#363535] px-7 py-3.5 [font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[22.4px] text-white hover:bg-white hover:text-[#363535]">
                Discuss Your Project
              </Button>
            </Link>
            <Link to="/services">
              <Button
                variant="outline"
                className="h-auto rounded-md border border-[#363535] px-7 py-3.5 [font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[22.4px] text-[#363535] hover:bg-[#363535] hover:text-white"
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
