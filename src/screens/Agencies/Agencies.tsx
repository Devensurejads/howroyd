import { Header } from "../../components/layout";
import { Seo } from "../../components/Seo";
import { Card, CardContent } from "../../components/ui/card";
import { AgencyWorkShowcaseSection } from "./sections/AgencyWorkShowcaseSection";
import { FeaturedProjectsSection } from "./sections/FeaturedProjectsSection";
import { FooterContactSection } from "./sections/FooterContactSection";
import { ProjectHeroIntroSection } from "./sections/ProjectHeroIntroSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

const projectSections = [
  {
    id: "project-hero-intro-section",
    component: <ProjectHeroIntroSection />,
  },
  {
    id: "agency-work-showcase-section",
    component: <AgencyWorkShowcaseSection />,
  },
  {
    id: "testimonials-section",
    component: <FeaturedProjectsSection />,
  },
  {
    id: "footer-contact-section",
    component: <FooterContactSection />,
  },
];

export const Agencies = (): JSX.Element => {
  return (
    <main className="w-full bg-white">
      <Seo
        title="Agency Partner & White-Label Support | Howroyd Group"
        description="Howroyd Group works behind the scenes with digital agencies, providing white-label strategy, technical consultancy and development support so agencies can confidently deliver ambitious client projects."
      />
      <div className="flex w-full flex-col items-stretch">
        <Header />
        {projectSections.map((section) => (
          <Card
            key={section.id}
            className={`h-auto w-full rounded-none border-0 shadow-none ${
              section.id === "agency-work-showcase-section"
                ? "bg-[#00000008]"
                : "bg-transparent"
            }`}
          >
            <CardContent className="p-0">{section.component}</CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
};
