import { Header } from "../../components/layout";
import { Seo } from "../../components/Seo";
import { Card, CardContent } from "../../components/ui/card";
import { AgencyWorkShowcaseSection } from "./sections/AgencyWorkShowcaseSection";
import { FeaturedProjectsGallerySection } from "./sections/FeaturedProjectsGallerySection";
import { FooterContactSection } from "./sections/FooterContactSection";
import { ProjectHeroIntroSection } from "./sections/ProjectHeroIntroSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

const projectSections = [
  {
    id: "project-hero-intro-section",
    component: <ProjectHeroIntroSection />,
  },
  {
    id: "featured-projects-gallery-section",
    component: <FeaturedProjectsGallerySection />,
  },
  {
    id: "agency-work-showcase-section",
    component: <AgencyWorkShowcaseSection />,
  },
  {
    id: "testimonials-section",
    component: <TestimonialsSection />,
  },
  {
    id: "footer-contact-section",
    component: <FooterContactSection />,
  },
];

export const Projects = (): JSX.Element => {
  return (
    <main className="w-full bg-white">
      <Seo
        title="Selected Digital Projects & Case Studies | Howroyd Group"
        description="Browse a selection of digital projects delivered for businesses, housing associations, charities and agencies, showcasing expertise in strategy, website development, project leadership and long-term digital partnerships."
      />
      <div className="flex w-full flex-col items-stretch">
        <Header />
        {projectSections.map((section) => (
          <Card
            key={section.id}
            className={`h-auto w-full rounded-none border-0 shadow-none ${
              section.id === "agency-work-showcase-section"
                ? "bg-[#111111]"
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
