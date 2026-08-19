import { Header } from "../../components/layout";
import { Seo } from "../../components/Seo";
import { Card, CardContent } from "../../components/ui/card";
import { FeaturedCaseStudySection } from "./sections/FeaturedCaseStudySection";
import { FeaturedProjectsSection } from "./sections/FeaturedProjectsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { TechnologyServicesSection } from "./sections/TechnologyServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

const sections = [
  { id: "hero", component: HeroSection },
  { id: "featured-case-study", component: FeaturedCaseStudySection },
  { id: "technology-services", component: TechnologyServicesSection },
  { id: "featured-projects", component: FeaturedProjectsSection },
  { id: "testimonials", component: TestimonialsSection },
  { id: "footer", component: FooterSection },
];

export const Home = (): JSX.Element => {
  return (
    <main className="w-full bg-white">
      <Seo
        title="Digital Strategy & Web Development | Howroyd Group"
        description="Independent digital consultancy providing digital strategy, website design, web development and project leadership. Helping organisations deliver successful digital projects with thoughtful advice and dependable delivery."
      />
      <div className="flex w-full flex-col items-stretch">
        <Header />
        {sections.map(({ id, component: SectionComponent }) => (
          <section key={id} id={id} className="relative w-full">
            <Card className="h-auto w-full rounded-none border-0 bg-transparent shadow-none">
              <CardContent className="p-0">
                <SectionComponent />
              </CardContent>
            </Card>
          </section>
        ))}
      </div>
    </main>
  );
};
