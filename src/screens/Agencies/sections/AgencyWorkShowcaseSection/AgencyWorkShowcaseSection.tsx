import { ArrowUpRightIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

const ACCESS_PASSWORD = "mercury";

const agencyProjects = [
  {
    title: "Nvisage",
    description:
      "Development of the corporate website for a leading digital agency, showcasing its expertise across strategy, design, development and digital transformation. The project focused on presenting a diverse portfolio of work while providing a flexible content management system to support ongoing marketing and business development.",
    image: "/images/nvisage.webp",
    logo: "/images/nvisage-web-design-logo.svg",
    logoClassName: "w-full h-[86px]",
    url: "http://www.nvisage.co.uk",
  },
  {
    title: "Ape Creative",
    description:
      "Design and development of a bespoke agency website showcasing creative services, portfolio work and client expertise. Built with a strong emphasis on presentation, usability and content management, enabling the team to maintain an engaging online presence as the business continues to evolve.",
    image: "/images/ape-creative.webp",
    logo: "/images/ape-creative.svg",
    logoClassName: "w-full h-[86px]",
    url: "https://www.apecreative.com/",
  },
  {
    title: "Scottish Borders Housing Association",
    description:
      "Development of a modern housing association website designed to improve access to services, tenant information and organisational news. The project combined responsive design with a flexible content management system, providing an accessible platform that enables staff to keep information accurate, relevant and up to date.",
    image: "/images/sbha.webp",
    logo: "/images/scottish-borders-housing-association-logo.svg",
    logoClassName: "w-full h-[86px]",
    url: "https://www.sbha.org.uk/",
  },
  {
    title: "Shelfspan",
    description:
      "Design and development of a corporate website for a specialist supplier of commercial storage and handling solutions. The project showcases an extensive product range across multiple industries, combining clear navigation with a flexible content management system that supports ongoing product updates and business enquiries.",
    image: "/images/shelfspan.webp",
    logo: "/images/shelfspan.svg",
    logoClassName: "w-full h-[86px]",
    url: "https://shelfspan.co.uk/",
  },
  {
    title: "National Security Inspectorate",
    description:
      "Development of a comprehensive website for the National Security Inspectorate, providing guidance, industry information and access to searchable registers of approved security and fire safety companies. The project balanced complex content requirements with an intuitive user experience and a robust content management system supporting ongoing updates.",
    image: "/images/nsi.webp",
    logo: "/images/nsi-logo-2025.svg",
    logoClassName: "w-full h-[86px]",
    url: "https://www.nsi.org.uk/",
  },
  {
    title: "Spanish Marks",
    description:
      "Design and development of a specialist website for a firm providing Spanish trade mark registration and intellectual property services. The project presents complex legal information in a clear, approachable format, encouraging enquiries through intuitive navigation and a professional, responsive user experience.",
    image: "/images/spanish-marks.webp",
    logo: "/images/spanish-marks-logo.svg",
    logoClassName: "w-full h-[86px]",
    url: "https://www.spanishmarks.com/",
  },
  {
    title: "Get Cash Wise",
    description:
      "Development of a consumer-focused financial services website designed to present information clearly and encourage enquiries. The project combined an accessible user experience with a straightforward content management system, allowing content and services to be updated quickly as the business developed.",
    image: "/images/getcashwise.webp",
    logo: "/images/getcashwise-logo.svg",
    logoClassName: "w-full h-[86px]",
    url: "https://www.getcashwise.co.uk/",
  },
  {
    title: "EMH Sales",
    description:
      "Development of a bespoke property sales website for the sales and marketing division of EMH, showcasing affordable home ownership opportunities across the East Midlands. The platform combines advanced property search, development listings and flexible content management to support customers throughout the buying journey.",
    image: "/images/emh-sales.webp",
    logo: "/images/emh-sales.svg",
    logoClassName: "w-full h-[86px]",
    url: "https://sales.emh.co.uk/",
  },
  {
    title: "MySpace Housing",
    description:
      "Design and development of a responsive website for a supported housing provider, enabling residents, partners and referring organisations to access information, services and resources with ease. The project delivered an intuitive content management system and a clear, accessible user experience that supports the organisation's ongoing communications and growth.",
    image: "/images/myspace.webp",
    logo: "/images/myspace.svg",
    logoClassName: "w-full h-[86px]",
    url: "https://myspacehousing.org/",
  },
  {
    title: "Ocean Housing",
    description:
      "Design and development of a responsive website for one of Cornwall's leading housing associations, providing tenants with easy access to housing services, advice and community information. The project combined intuitive navigation with a flexible content management system, supporting clear communication and ongoing digital engagement.",
    image: "/images/ocean-housing.webp",
    logo: "/images/ocean-housing.svg",
    logoClassName: "w-full h-[86px]",
    url: "https://www.oceanhousing.com/",
  },
  {
    title: "AA4S",
    description:
      "Design and development of a responsive website for a charitable housing association providing affordable student accommodation across London. The project showcases accommodation, facilities and support services through a clear, intuitive user experience, supported by a flexible content management system that enables straightforward day-to-day content management.",
    image: "/images/aa4s.webp",
    logo: "/images/aa4s.svg",
    logoClassName: "w-full h-[86px]",
    url: "https://aa4s.co.uk",
  },
  {
    title: "AsiaWest Group",
    description:
      "Design and development of a corporate website for an international business group, presenting its services and commercial interests through a clean, professional online presence. The project focused on responsive design, clear information architecture and a flexible content management system to support future growth and ongoing content updates.",
    image: "/images/asia-west.webp",
    logo: "/images/asia-west-group-bl.svg",
    logoClassName: "w-full h-[86px]",
    url: "https://asiawestgroup.com/",
  },
  {
    title: "Caredig",
    description:
      "Development of a modern website for a Welsh housing association, enabling tenants, applicants and stakeholders to access housing services, support and organisational information with ease. The project delivered a responsive, accessible platform with a flexible content management system designed to support long-term communication and community engagement.",
    image: "/images/caredig.webp",
    logo: "/images/caredig.svg",
    logoClassName: "w-full h-[86px]",
    url: "https://www.caredig.co.uk/",
  },
];

export const AgencyWorkShowcaseSection = (): JSX.Element => {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password.trim().toLowerCase() === ACCESS_PASSWORD.toLowerCase()) {
      setIsUnlocked(true);
      setHasError(false);
    } else {
      setIsUnlocked(false);
      setHasError(true);
    }
  };

  return (
    <section className="w-full px-4 py-20 sm:px-6 lg:px-20 lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[calc(1440px-10rem)] flex-col items-start gap-16">
        <header className="flex w-full max-w-[699px] flex-col items-start gap-8">
          <div className="flex w-full flex-col items-start gap-8">
            <h2 className="mt-[-1.00px] [font-family:'Google_Sans_Flex',Helvetica] text-4xl font-normal leading-tight tracking-[-2.00px] text-[#363535] sm:text-5xl lg:text-[64px] lg:leading-[76.8px]">
              Agency Portfolio
            </h2>
            <p className="max-w-[602px] [font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[25.2px] tracking-[0] text-[#363535b2] lg:text-lg">
              Our agency projects are delivered under white-label agreements and can't be displayed publicly. If you'd like to view a selection of this work, please get in touch and we'll provide access.
            </p>
          </div>
          {!isUnlocked && (
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col items-start gap-4"
            >
              <div className="flex w-full flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                <Input
                  type="password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setHasError(false);
                  }}
                  placeholder="Enter Password"
                  aria-label="Enter Password"
                  className="h-auto w-full max-w-[407px] rounded-md border border-[#36353533] bg-transparent px-3.5 py-3.5 [font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[22.4px] tracking-[0] text-[#363535] placeholder:text-[#363535] focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button
                  type="submit"
                  className="h-auto rounded-md border border-[#363535] bg-[#363535] px-7 py-3.5 [font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[22.4px] tracking-[0] text-white hover:bg-white hover:text-[#363535]"
                >
                  View Projects
                </Button>
              </div>
              {hasError && (
                <p className="[font-family:'Google_Sans_Flex',Helvetica] text-sm font-normal text-red-600">
                  Incorrect password, please try again.
                </p>
              )}
            </form>
          )}
        </header>
        {isUnlocked && (
          <div className="flex w-full flex-col gap-6">
            {agencyProjects.map((project) => (
              <Card
                key={project.title}
                className="border-0 bg-transparent shadow-none"
              >
                <CardContent className="p-0">
                  <article className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
                    <img
                      className="h-[260px] w-full rounded-none object-cover sm:h-[320px] lg:h-[428px]"
                      alt={project.title}
                      src={project.image}
                    />
                    <div className="flex flex-col items-start justify-center gap-6">
                      <div className="flex w-full flex-col items-start gap-6">
                        <div className="flex w-full flex-col items-start gap-3">
                          <h3 className="mt-[-1.00px] [font-family:'Google_Sans_Flex',Helvetica] text-[28px] font-normal leading-[38.4px] tracking-[-1.00px] text-[#363535] sm:text-[32px] whitespace-nowrap">
                            {project.title}
                          </h3>
                          <p className="w-full [font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[25.2px] tracking-[0] text-[#363535b2] lg:text-lg">
                            {project.description}
                          </p>
                        </div>
                        <img
                          className={`${project.logoClassName} bg-[#EBEBEB] py-[15px]`}
                          alt={`${project.title} logo`}
                          src={project.logo}
                        />
                      </div>
                      <div className="flex w-full justify-end">
                        <Button
                          asChild
                          variant="link"
                          className="h-auto gap-1 p-0 [font-family:'Google_Sans_Flex',Helvetica] text-lg font-medium leading-[25.2px] tracking-[0] text-[#0066bb] hover:text-[#0066bb] hover:no-underline"
                        >
                          <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <span>Visit Site</span>
                            <ArrowUpRightIcon className="h-6 w-6" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </article>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
