import { Card, CardContent } from "../../../../components/ui/card";

const selectedProjects = [
  {
    title: "Gallagher Developments",
    description:
      "Designed to reflect the scale, experience and professionalism of Gallagher Developments, this fully responsive website showcases the company's current and completed projects through a clear, engaging design.\n\nA fully editable content management system enables the team to update content quickly and easily without technical expertise.",
    imageSrc: "/images/gallagher-estates.webp",
    imageAlt: "Gallagher Developments project preview",
    logoSrc: "/images/frame-47-p-5.svg",
    logoAlt: "Gallagher Developments logo",
    logoClassName: "w-full",
    url: "https://gallagher.atelier.anzu.chancom.net/",
  },
  {
    title: "Morever",
    description:
      "A faithful translation of a detailed design brief into a polished, fully responsive finished product that maintains quality across all devices.\n\nCareful attention to detail throughout the build ensured the finished website accurately reflected the original design while providing a consistent user experience across desktop, tablet and mobile.",
    imageSrc: "/images/morever-thumb.webp",
    imageAlt: "Morever project preview",
    logoSrc: "/images/frame-47-p-1.svg",
    logoAlt: "Morever logo",
    logoClassName: "w-full",
    url: "https://morever.co.uk/",
  },
  {
    title: "On Purpose",
    description:
      "Design and development of a bespoke Wagtail CMS website enabling On Purpose to present its programmes and social impact to participants, partners and employers. In addition to a fully editable content management system, the website includes an extensive searchable member directory, providing a valuable resource for connecting the wider On Purpose community.",
    imageSrc: "/images/onpurpose-thumb.webp",
    imageAlt: "On Purpose project preview",
    logoSrc: "/images/frame-47-p-2.svg",
    logoAlt: "On Purpose logo",
    logoClassName: "w-full",
    url: "https://onpurpose.org/",
  },
];

const communityProjects = [
  {
    title: "The Mixed Museum",
    description:
      "Designed and developed a website for Mixed Museum, an online resource exploring the history and experiences of mixed-race people in the UK.\n\nAs part of our commitment to supporting organisations making a positive social impact, this project was delivered at a reduced fee while maintaining the same professional standards applied to every client engagement.",
    imageSrc: "/images/mixed-museum-thumb.webp",
    imageAlt: "The Mixed Museum project preview",
    logoSrc: "/images/frame-47-p-3.svg",
    logoAlt: "The Mixed Museum logo",
    logoClassName: "w-full",
    url: "https://mixedmuseum.org.uk/",
  },
];

export const FeaturedProjectsGallerySection = (): JSX.Element => {
  return (
    <>
      <section className="relative w-full bg-[#00000008] px-4 py-16 sm:px-6 lg:px-20 lg:py-[120px]">
        <div className="mx-auto flex w-full max-w-[calc(1440px-10rem)] flex-col gap-10 lg:gap-16">
          <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="[font-family:'Google_Sans_Flex',Helvetica] text-[36px] font-normal leading-[1.15] tracking-[-1.5px] text-[#363535] sm:text-[48px] lg:max-w-[699px] lg:text-[64px] lg:leading-[76.8px] lg:tracking-[-2.00px]">
              Selected Projects
            </h2>
          </header>
          <div className="flex flex-col gap-6">
            {selectedProjects.map((project) => (
              <Card
                key={project.title}
                className="border-0 bg-transparent shadow-none"
              >
                <CardContent className="p-0">
                  <article className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center">
                    <img
                      className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[428px]"
                      alt={project.imageAlt}
                      src={project.imageSrc}
                    />
                    <div className="flex flex-col justify-center gap-6">
                      <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-3">
                          <h3 className="[font-family:'Google_Sans_Flex',Helvetica] text-[24px] font-normal leading-[32px] tracking-[-0.8px] text-[#363535] sm:text-[28px] lg:text-[32px] lg:leading-[38.4px] lg:tracking-[-1.00px]">
                            {project.title}
                          </h3>
                          <p className="whitespace-pre-line [font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[24px] tracking-[0] text-[#363535b2] lg:text-lg lg:leading-[25.2px]">
                            {project.description}
                          </p>
                        </div>
                        <img
                          className={project.logoClassName}
                          alt={project.logoAlt}
                          src={project.logoSrc}
                        />
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-end gap-1 [font-family:'Google_Sans_Flex',Helvetica] text-base font-medium leading-[22px] text-[#0066bb] lg:text-lg lg:leading-[25.2px]"
                      >
                        <span>Visit Site</span>
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </article>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="relative w-full px-4 py-16 sm:px-6 lg:px-20 lg:py-[120px]">
        <div className="mx-auto flex w-full max-w-[calc(1440px-10rem)] flex-col gap-10 lg:gap-16">
          <h2 className="[font-family:'Google_Sans_Flex',Helvetica] text-[36px] font-normal leading-[1.15] tracking-[-1.5px] text-[#363535] sm:text-[48px] lg:max-w-[699px] lg:text-[64px] lg:leading-[76.8px] lg:tracking-[-2.00px]">
            Community Projects
          </h2>
          <div className="flex flex-col gap-6">
            {communityProjects.map((project) => (
              <Card
                key={project.title}
                className="border-0 bg-transparent shadow-none"
              >
                <CardContent className="p-0">
                  <article className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center">
                    <img
                      className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[428px]"
                      alt={project.imageAlt}
                      src={project.imageSrc}
                    />
                    <div className="flex flex-col justify-center gap-6">
                      <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-3">
                          <h3 className="[font-family:'Google_Sans_Flex',Helvetica] text-[24px] font-normal leading-[32px] tracking-[-0.8px] text-[#363535] sm:text-[28px] lg:text-[32px] lg:leading-[38.4px] lg:tracking-[-1.00px]">
                            {project.title}
                          </h3>
                          <p className="whitespace-pre-line [font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[24px] tracking-[0] text-[#363535b2] lg:text-lg lg:leading-[25.2px]">
                            {project.description}
                          </p>
                        </div>
                        <img
                          className={project.logoClassName}
                          alt={project.logoAlt}
                          src={project.logoSrc}
                        />
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-end gap-1 [font-family:'Google_Sans_Flex',Helvetica] text-base font-medium leading-[22px] text-[#0066bb] lg:text-lg lg:leading-[25.2px]"
                      >
                        <span>Visit Site</span>
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </article>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
