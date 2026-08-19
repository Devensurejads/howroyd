import { Header } from "../../components/layout";
import { Seo } from "../../components/Seo";
import { Card, CardContent } from "../../components/ui/card";
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
    id: "featured-projects-gallery-section",
    component: <FeaturedProjectsSection />,
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

export const Services = (): JSX.Element => {
  return (
    <main className="w-full bg-white">
      <Seo
        title="Digital Consultancy Services | Howroyd Group"
        description="Explore our digital consultancy services, including strategy, technical consultancy, website design and development, project leadership, support, accessibility and SEO, helping organisations build and manage successful digital projects."
      />
      <div className="flex w-full flex-col items-stretch">
        <Header />
        {projectSections.map((section) => (
          <Card
            key={section.id}
            className="h-auto w-full rounded-none border-0 bg-transparent shadow-none"
          >
            <CardContent className="p-0">{section.component}</CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
};
