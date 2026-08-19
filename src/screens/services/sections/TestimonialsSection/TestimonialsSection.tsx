import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

const testimonialSectionContent = {
  title: "Supporting agencies through white-label production",
  description:
    "Howroyd Group also provides white-label digital services for agencies requiring additional expertise or delivery capacity. Whether supporting a single project or acting as an extension of your team, we assemble the right combination of trusted specialists while providing a single point of accountability and maintaining the professional standards your clients expect.",
  actions: [
    {
      label: "Contact Us",
      path: "/contact",
      variant: "default" as const,
      className:
        "h-auto rounded-md border border-white bg-white px-7 py-3.5 text-[#363535] hover:bg-transparent hover:text-white",
    },
    {
      label: "View All Projects",
      path: "/projects",
      variant: "outline" as const,
      className:
        "h-auto rounded-md border border-white bg-transparent px-7 py-3.5 text-white hover:bg-white hover:text-[#363535]",
    },
  ],
};

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section
      className="w-full bg-[url('/images/frame-back.png')] bg-no-repeat bg-[length:100%_calc(100%+1px)] bg-top px-5 py-[56px] sm:px-8 md:px-12 lg:px-[62px] lg:py-[120px]"
      aria-labelledby="testimonials-section-heading"
    >
      <div className="mx-auto flex w-full max-w-[calc(1440px-10rem)] flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <header className="flex max-w-[800px] flex-col items-start gap-8">
          <h2
            id="testimonials-section-heading"
            className="[font-family:'Google_Sans_Flex',Helvetica] text-[34px] font-normal leading-[1.1] tracking-[-1.2px] text-white sm:text-[42px] md:text-[52px] md:tracking-[-1.6px] lg:text-[64px] lg:leading-[76.8px] lg:tracking-[-2.00px]"
          >
            {testimonialSectionContent.title}
          </h2>
          <p className="max-w-[681px] [font-family:'Google_Sans_Flex',Helvetica] text-sm font-normal leading-[22px] tracking-[0] text-[#ffffffb2] sm:text-base sm:leading-6 lg:text-lg lg:leading-[25.2px]">
            {testimonialSectionContent.description}
          </p>
        </header>
        <nav
          className="flex flex-wrap items-start gap-4 sm:gap-6"
          aria-label="Testimonials section actions"
        >
          {testimonialSectionContent.actions.map((action) => (
            <Link key={action.label} to={action.path}>
              <Button
                variant={action.variant}
                className={action.className}
              >
                <span className="[font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[22.4px] tracking-[0]">
                  {action.label}
                </span>
              </Button>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
};
