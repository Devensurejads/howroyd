import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const projects = [
  {
    title: "The Mixed Museum",
    description:
      "We are committed to supporting the communities we work in and occasionally undertake projects at reduced fees for organisations making a positive impact.",
    imageSrc: "/images/mixed-museum-thumb.webp",
    imageAlt: "The Mixed Museum project preview",
    logoSrc: "/images/frame-47-1.svg",
    logoAlt: "The Mixed Museum logo",
    url: "https://mixedmuseum.org.uk/",
  },
  {
    title: "On Purpose",
    description:
      "Design and development of a bespoke Wagtail CMS site enabling On Purpose to communicate their programmes and social impact to participants and partners.",
    imageSrc: "/images/onpurpose-thumb.webp",
    imageAlt: "Gallagher Developments project preview",
    logoSrc: "/images/frame-47-2.svg",
    logoAlt: "Gallagher Developments logo",
    url: "https://onpurpose.org/",
  },
  {
    title: "Morever",
    description:
      "A faithful translation of a detailed design brief into a polished, fully responsive finished product which maintains quality across all devices.",
    imageSrc: "/images/morever-thumb.webp",
    imageAlt: "Morever project preview",
    logoSrc: "/images/frame-47-3.svg",
    logoAlt: "Morever logo",
    url: "https://morever.co.uk/",
  },
];

export const TechnologyServicesSection = (): JSX.Element => {
  return (
    <section className="relative w-full self-stretch px-5 py-16 md:px-10 lg:px-20 lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[calc(1440px-10rem)] flex-col gap-10 lg:gap-16">
        <header className="flex w-full flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-[699px] [font-family:'Google_Sans_Flex',Helvetica] text-4xl font-normal tracking-[-1.5px] text-[#363535] sm:text-5xl lg:text-[64px] lg:leading-[76.8px] lg:tracking-[-2.00px]">
            Selected Projects
          </h2>
          <Link to="/projects">
            <Button
              variant="outline"
              className="h-auto w-fit rounded-md border border-[#363535] bg-transparent px-7 py-3.5 [font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[22.4px] text-[#363535] hover:bg-[#363535] hover:text-white"
            >
              View All Projects
            </Button>
          </Link>
        </header>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-4">
          {projects.map((project) => (
            <article key={project.title} className="flex h-full">
              <Card className="w-full border-0 bg-transparent shadow-none">
                <CardContent className="flex h-full flex-col gap-6 p-0">
                  <div className="flex flex-col gap-3">
                    <h3 className="[font-family:'Google_Sans_Flex',Helvetica] text-[28px] font-normal tracking-[-1px] text-[#363535] sm:text-[32px] sm:leading-[38.4px]">
                      {project.title}
                    </h3>
                    <p className="min-h-[100.8px] max-w-[460px] [font-family:'Google_Sans_Flex',Helvetica] text-lg font-normal leading-[25.2px] text-[#363535b2]">
                      {project.description}
                    </p>
                  </div>
                  <img
                    className="h-[428px] w-full object-cover"
                    alt={project.imageAlt}
                    src={project.imageSrc}
                  />
                  <img
                    className="w-full"
                    alt={project.logoAlt}
                    src={project.logoSrc}
                  />
                  <div className="flex w-full justify-end">
                    <Button
                      asChild
                      variant="link"
                      className="h-auto gap-1 p-0 [font-family:'Google_Sans_Flex',Helvetica] text-lg font-medium leading-[25.2px] text-[#0066bb] no-underline hover:no-underline"
                    >
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <span>Visit Site</span>
                        <img
                          className="h-6 w-6"
                          alt="Basil arrow up"
                          src="/images/basil-arrow-up-outline.svg"
                        />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
