import { Header, Footer } from "../../components/layout";
import { Seo } from "../../components/Seo";
import { Card, CardContent } from "../../components/ui/card";
// import { TestimonialsSection } from "./sections/ClientTestimonialsSection";
import { FeaturedProjectsSection } from "./sections/ContactFormMediaSection";
import { ContactHeroSection } from "./sections/ContactHeroSection";

const sections = [
  {
    id: "contact-hero-section",
    component: ContactHeroSection,
  },
  {
    id: "contact-form-media-section",
    component: FeaturedProjectsSection,
  },
  // {
  //   id: "client-testimonials-section",
  //   component: TestimonialsSection,
  // },
];

export const ContactUs = (): JSX.Element => {
  return (
    <main className="w-full bg-white" aria-label="Contact us page">
      <Seo
        title="Contact Howroyd Group | Digital Consultancy"
        description="Discuss your next digital project with Howroyd Group. Whether you need strategic advice, website development, technical consultancy or project leadership, we'd be pleased to hear from you."
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
        <Footer />
      </div>
    </main>
  );
};
