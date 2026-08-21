import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const testimonialRows = [
  [
    {
      quote:
        "James was a pleasure to work with, he possessed that rare talent - both creative talent and technical ability. He was a key factor in our move into digital in the early days of the web and was always prepared to the extra mile.",
      image: "/images/mark-ramsey.jfif",
      name: "Mark Ramsey",
      position: "Digital Marketing Specialist at StepChange Debt Charity",
    },
    {
      quote:
        "Jim combines positive energy with solid strategic thinking and creative flair to give any project an extra dimension. He has a solid understanding of the technology and has an amazing ability to soak up new techniques to add to his already wide-ranging skillset. Whenever I have a substantial online solution to deliver Jim is the first person I think of.",
      image: "/images/dan-mellor.jfif",
      name: "Dan Mellor",
      position: "Creative Director for Morever",
    },
    {
      quote: "“Jim provided invaluable technical direction, training and digital strategy throughout the development of The Mixed Museum website. His expertise, clarity and practical approach gave us the confidence to make the right digital decisions.”",
      image: "/images/chamion-caballero.jfif",
      name: "Chamion Caballero",
      position: "Co-founder and Director at the Mixed Museum",
    },
  ],
  [
    {
      quote: "“He is a very skilled and dependable developer, but what I particularly like is how easy he is to work with - and how much he is also a designer. He pays attention to my creative designs and is very good at suggesting design or UX improvements that actually work.”",
      image: "/images/sandra-staufer.jfif",
      name: "Sandra Staufer",
      position: "Illustrator for business and visual storyteller",
    },
    {
      quote: "“Jim played a key role at Nvisage, managing our development team and ensuring projects were delivered effectively. Since becoming freelance, he has continued to be a trusted collaborator, bringing technical expertise, experience and sound judgement.”",
      image: "/images/clinton-porter.jfif",
      name: "Clinton Porter",
      position: "Digital Delivery Manager specialist in Digital Transformation",
    },
    {
      quote: "“Jim is a highly reliable WordPress developer who manages our WordPress clients with expertise and professionalism. He brings strong technical knowledge, clear communication and a practical approach to every project.”",
      image: "/images/louise-williams.JPG",
      name: "Louise Williams",
      position: "Project Manager at Nvisage LTD",
    },
  ],
];

export const FeaturedProjectsSection = (): JSX.Element => {
  return (
    <section className="relative w-full self-stretch bg-[#f7f7f7] px-5 py-16 sm:px-8 lg:px-20 lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[calc(1440px-10rem)] flex-col items-start gap-10 lg:gap-16">
        <header className="w-full">
          <h2 className="[font-family:'Google_Sans_Flex',Helvetica] text-[34px] font-normal leading-tight tracking-[-1.2px] text-[#363535] sm:text-[44px] lg:text-[64px] lg:leading-[76.8px] lg:tracking-[-2.00px]">
            Sustained by long-term relationships
          </h2>
        </header>
        <div className="flex w-full flex-col gap-14 lg:gap-12">
          {testimonialRows.map((row, rowIndex) => (
            <div
              key={`testimonial-row-${rowIndex}`}
              className="grid w-full grid-cols-1 gap-14 md:grid-cols-3 md:gap-8"
            >
              {row.map((testimonial, itemIndex) => (
                <div
                  key={`${testimonial.name}-${rowIndex}-${itemIndex}`}
                  className="flex h-full"
                >
                  <Card className="h-full w-full border-0 bg-transparent shadow-none rounded-none">
                    <CardContent className="flex h-full flex-col justify-between gap-6 p-0">
                      <article className="flex h-full flex-col gap-6">
                        <p className="[font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[24px] text-[#363535b2] sm:text-lg sm:leading-[25.2px]">
                          {testimonial.quote}
                        </p>
                        <footer className="flex items-center gap-3">
                          <img
                            className="h-10 w-10 shrink-0 rounded-full object-cover"
                            alt={testimonial.name}
                            src={testimonial.image}
                          />
                          <div className="flex flex-col">
                            <p className="[font-family:'Google_Sans_Flex',Helvetica] text-lg font-normal leading-7 text-[#363535] sm:text-xl">
                              {testimonial.name}
                            </p>
                            <p className="[font-family:'Google_Sans_Flex',Helvetica] text-sm font-normal leading-[19.6px] text-[#363535b2]">
                              {testimonial.position}
                            </p>
                          </div>
                        </footer>
                      </article>
                    </CardContent>
                  </Card>
                  {itemIndex < row.length - 1 ? (
                    <Separator
                      orientation="vertical"
                      className="ml-4 hidden h-auto self-stretch bg-[#3635351f] md:block"
                    />
                  ) : null}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
