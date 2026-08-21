import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

const services = [
  {
    title: "Digital strategy",
    slug: "digital-strategy",
    description:
      "Successful digital projects begin long before any design or development work starts. We help organisations define clear objectives, evaluate options and develop practical digital strategies that support wider business goals.\n\nOur advice is independent, technology-agnostic and focused on achieving the right outcome rather than recommending unnecessary solutions.",
  },
  {
    title: "Technical Consultancy",
    slug: "technical-consultancy",
    description:
      "Whether you're planning a new website, reviewing an existing platform or considering a wider digital project, we provide clear, independent advice based on your organisation's objectives.\n\nFrom platform selection, hosting and system integrations to accessibility, content strategy and long-term planning, we help you make informed decisions before committing to a solution, ensuring the technologies and approach you choose are practical, sustainable and aligned with your business goals.",
  },
  {
    title: "Design & Development",
    slug: "design-development",
    description:
      "We design and build professional websites that reflect your organisation, engage your audience and are straightforward to manage.\n\nEvery website is developed using established technologies and an intuitive content management system, giving you full control over your content while ensuring the platform remains reliable, maintainable and ready to grow with your organisation.",
  },
  {
    title: "Project Leadership",
    slug: "project-leadership",
    description:
      "Successful digital projects rely on effective planning, communication and accountability.\n\nDrawing on nearly thirty years' experience delivering websites and digital projects, we provide a single point of responsibility throughout the project lifecycle, coordinating designers, developers and stakeholders to ensure projects remain focused, well-managed and successfully delivered.",
  },
  {
    title: "Support & Maintenance",
    slug: "support-maintenance",
    description:
      "A website should continue to evolve after launch. We provide ongoing support, updates and security maintenance to keep your website safe, reliable and performing effectively.\n\nOur approach is proactive rather than reactive, helping clients protect their investment over the long term.",
  },
  {
    title: "Accessibility & SEO",
    slug: "accessibility-seo",
    description:
      "A successful website should be accessible to everyone, perform reliably across all devices and be easily discoverable by search engines.\n\nWe build accessibility, performance and search engine optimisation into every project from the outset, helping organisations meet recognised standards, improve visibility online and deliver a faster, more inclusive user experience.",
  },
];

export const FeaturedCaseStudySection = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-[#00000008] px-5 py-16 sm:px-8 md:px-12 lg:px-20 lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[calc(1440px-10rem)] flex-col gap-16">
        <header className="flex w-full flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="sm:max-w-[60%] [font-family:'Google_Sans_Flex',Helvetica] text-[40px] font-normal leading-[1.15] tracking-[-2px] text-[#363535] sm:text-[48px] lg:text-[64px] lg:leading-[76.8px]">
            Thoughtful advice backed by practical delivery
          </h2>
          <Link to="/services">
            <Button
              variant="outline"
              className="h-auto self-start rounded-md border border-[#363535] bg-transparent px-4 py-2 [font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[22.4px] text-[#363535] hover:bg-[#363535] hover:text-white md:self-auto lg:px-7 lg:py-3.5"
            >
              View Services
            </Button>
          </Link>
        </header>
        <div className="flex w-full flex-col">
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <div key={service.title} className="flex w-full flex-col">
                <Separator className="bg-[#363535]/10" />
                <article
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className={`grid w-full cursor-pointer gap-4 py-8 transition-[grid-template-columns] md:min-h-[120px] md:items-center md:gap-8 lg:py-9 ${
                    isActive ? "md:grid-cols-[minmax(0,1fr)_563px]" : "md:grid-cols-1"
                  }`}
                >
                  <h3
                    className={`[font-family:'Google_Sans_Flex',Helvetica] text-[32px] font-normal leading-[1.2] tracking-[-1px] text-[#363535] transition-opacity lg:text-5xl lg:leading-[57.6px] ${
                      isActive ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    {service.title}
                  </h3>
                  {isActive ? (
                    <div className="flex max-w-[563px] flex-col gap-3">
                      <p className="[font-family:'Google_Sans_Flex',Helvetica] text-sm font-normal leading-[1.4] tracking-[0] text-[#363535b2] md:text-lg md:leading-[25.2px]">
                        {service.description.split("\n").map((line, lineIndex, lines) => (
                          <span key={lineIndex}>
                            {line}
                            {lineIndex < lines.length - 1 ? <br /> : null}
                          </span>
                        ))}
                      </p>
                      <Link
                        to={`/services?service=${service.slug}`}
                        className="flex items-center gap-1 [font-family:'Google_Sans_Flex',Helvetica] text-sm font-normal leading-[1.4] text-[#0066bb] hover:underline md:text-lg md:leading-[25.2px]"
                      >
                        <span>More information</span>
                        <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  ) : null}
                </article>
                {index === services.length - 1 ? (
                  <Separator className="bg-[#363535]/10" />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
