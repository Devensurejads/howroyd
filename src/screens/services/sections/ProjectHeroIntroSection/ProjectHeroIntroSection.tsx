import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { projectImages } from "./serviceDetails";

export const ProjectHeroIntroSection = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedService =
    selectedIndex !== null ? projectImages[selectedIndex] : null;

  useEffect(() => {
    const slug = searchParams.get("service");
    if (!slug) return;

    const index = projectImages.findIndex((image) => image.slug === slug);
    if (index !== -1) setSelectedIndex(index);
  }, [searchParams]);

  const closeModal = () => {
    setSelectedIndex(null);
    if (searchParams.has("service")) {
      const nextParams = new URLSearchParams(searchParams);
      nextParams.delete("service");
      setSearchParams(nextParams, { replace: true });
    }
  };

  useEffect(() => {
    if (!selectedService) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedService]);

  return (
    <section className="relative w-full px-5 pt-16 pb-16 sm:px-8 lg:px-20 lg:pt-[72px] lg:pb-[100px]">
      <div className="mx-auto flex w-full max-w-[calc(1440px-10rem)] flex-col items-start gap-14 lg:gap-20">
        <div className="flex w-full flex-col items-start gap-12">
          <div className="flex w-full flex-col items-start gap-8 sm:w-[86%]">
            <h1 className="[font-family:'Google_Sans_Flex',Helvetica] text-[44px] font-normal leading-[1.1] tracking-[-1.2px] text-[#363535] sm:text-[56px] md:text-[68px] lg:text-[80px] lg:leading-[96px] lg:tracking-[-2px]">
              Thoughtful advice supported by dependable delivery
            </h1>
            <p className="[font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[25.2px] tracking-[0] text-[#363535b2] lg:text-lg">
              Every organisation faces different challenges, but successful digital projects are built on the same foundations: clear objectives, informed decisions and reliable delivery. Whether you need strategic guidance, technical expertise, a new website or ongoing support, Howroyd Group provides practical, independent advice and professional delivery tailored to your organisation's needs.
            </p>
          </div>
          <div className="flex flex-wrap items-start gap-4 sm:gap-6">
            <Link to="/contact">
              <Button className="h-auto rounded-md border border-[#363535] bg-[#363535] px-7 py-3.5 [font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[22.4px] text-white hover:bg-white hover:text-[#363535]">
                Discuss Your Project
              </Button>
            </Link>
            <Link to="/projects">
              <Button
                variant="outline"
                className="h-auto rounded-md border border-[#363535] px-7 py-3.5 [font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[22.4px] text-[#363535] hover:bg-[#363535] hover:text-white"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
          {projectImages.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="flex flex-col items-start gap-4 text-left"
            >
              <img
                className="aspect-[1/1] w-full max-w-[632px]"
                alt={image.alt}
                src={image.src}
              />
              <div className="flex flex-col items-start gap-1">
                <h3 className="[font-family:'Google_Sans_Flex',Helvetica] text-2xl font-normal leading-[28.8px] tracking-[0] text-[#363535]">
                  {image.title}
                </h3>
                <p className="[font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[22.4px] tracking-[0] text-[#363535b2]">
                  {image.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedService ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000066] p-2 sm:p-8"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <div className="relative my-8 flex w-full max-w-7xl flex-col rounded-lg border border-[#0000001a] bg-white sm:my-12 max-h-[95vh] sm:max-h-[85vh]">
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close"
              className="hidden text-[#363535] hover:opacity-60 sm:absolute sm:right-8 sm:top-8 sm:block"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto max-sm:[-ms-overflow-style:none] max-sm:[scrollbar-width:none] max-sm:[&::-webkit-scrollbar]:hidden">
              <div className="sticky top-0 z-10 flex justify-end bg-white px-6 pt-16 pb-2 sm:hidden">
                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Close"
                  className="text-[#363535] hover:opacity-60"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="grid grid-cols-1 gap-8 p-6 pt-0 sm:p-10 md:grid-cols-[360px_1fr] md:gap-12 lg:grid-cols-[420px_1fr] lg:p-12">
              <img
                className="aspect-[1/1] w-full max-w-[632px]"
                alt={selectedService.alt}
                src={selectedService.src}
              />
              <div className="flex flex-col items-start gap-10">
                <h2 className="[font-family:'Google_Sans_Flex',Helvetica] text-[36px] font-normal leading-[1.15] tracking-[-1px] text-[#363535] sm:text-[44px]">
                  {selectedService.title}
                </h2>

                <div className="flex flex-col items-start gap-4">
                  <h3 className="[font-family:'Google_Sans_Flex',Helvetica] text-xl font-normal leading-7 text-[#363535]">
                    {selectedService.subtitle}
                  </h3>
                  {selectedService.intro.map((paragraph, i) => (
                    <p
                      key={i}
                      className="[font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[25.2px] text-[#363535b2]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="flex flex-col items-start gap-3">
                  <h4 className="[font-family:'Google_Sans_Flex',Helvetica] text-xl font-normal leading-7 text-[#363535]">
                    How we can help
                  </h4>
                  <ul className="flex list-disc flex-col gap-1.5 pl-5 marker:text-[#363535]/40">
                    {selectedService.howWeCanHelp.map((item) => (
                      <li
                        key={item}
                        className="[font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[22.4px] text-[#363535b2]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col items-start gap-3">
                  <h4 className="[font-family:'Google_Sans_Flex',Helvetica] text-xl font-normal leading-7 text-[#363535]">
                    Our approach
                  </h4>
                  {selectedService.approachIntro.map((paragraph, i) => (
                    <p
                      key={i}
                      className="[font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[25.2px] text-[#363535b2]"
                    >
                      {paragraph}
                    </p>
                  ))}
                  <ul className="flex list-disc flex-col gap-1.5 pl-5 marker:text-[#363535]/40">
                    {selectedService.approachQuestions.map((item) => (
                      <li
                        key={item}
                        className="[font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[22.4px] text-[#363535b2]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  {selectedService.approachOutro ? (
                    <p className="[font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[25.2px] text-[#363535b2]">
                      {selectedService.approachOutro}
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-col items-start gap-3">
                  <h4 className="[font-family:'Google_Sans_Flex',Helvetica] text-xl font-normal leading-7 text-[#363535]">
                    Typical outcomes
                  </h4>
                  {selectedService.outcomesLead ? (
                    <p className="[font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[25.2px] text-[#363535b2]">
                      {selectedService.outcomesLead}
                    </p>
                  ) : null}
                  <ul className="flex list-disc flex-col gap-1.5 pl-5 marker:text-[#363535]/40">
                    {selectedService.outcomesItems.map((item) => (
                      <li
                        key={item}
                        className="[font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[22.4px] text-[#363535b2]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="[font-family:'Google_Sans_Flex',Helvetica] text-xl font-normal leading-[1.4] text-[#363535]">
                  {selectedService.closing}
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};
