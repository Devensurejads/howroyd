import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Agencies", path: "/agencies" },
  { label: "Contact", path: "/contact" },
];

const contactItems = [
  {
    iconSrc: "/images/typcn-location.svg",
    iconAlt: "Location",
    text: "Brighton, UK",
    href: "#",
  },
  {
    iconSrc: "/images/mdi-linkedin.svg",
    iconAlt: "LinkedIn",
    text: "@howroyd",
    href: "https://www.linkedin.com/company/howroyd",
  },
  {
    iconSrc: "/images/ic-round-email.svg",
    iconAlt: "Email",
    text: "info@howroydgroup.co.uk",
    href: "mailto:info@howroydgroup.co.uk",
  },
];

export const Footer = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-[#111111]">
      <div className="px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-[120px]">
        <div className="mx-auto flex w-full max-w-[calc(1440px-10rem)] flex-col items-center gap-10 sm:gap-12">
          <section className="flex flex-col items-center gap-5 text-center">
            <img
              className="h-[53px] w-[53px] sm:h-[72.55px] sm:w-[127.27px]"
              alt="Logo"
              src="/images/group-46-1.svg"
            />
            <p className="max-w-[480px] [font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[25.2px] tracking-[0] text-[#ffffffb2] sm:text-lg">
              We believe that every engagement should leave our clients in a stronger position than before they met us.
            </p>
          </section>
          <nav aria-label="Footer navigation" className="w-full">
            <ul className="flex flex-wrap items-center justify-center gap-x-[38px] gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="h-auto p-0 [font-family:'Google_Sans_Flex',Helvetica] text-sm font-normal leading-[19.6px] tracking-[0] text-white no-underline hover:text-white/80 hover:no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <address className="not-italic">
            <ul className="flex flex-wrap items-center justify-center gap-x-[30px] gap-y-4">
              {contactItems.map((item) => (
                <li key={item.text} className="flex">
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
                  >
                    <img
                      className="h-[22px] w-[22px] shrink-0"
                      alt={item.iconAlt}
                      src={item.iconSrc}
                    />
                    <span className="[font-family:'Google_Sans_Flex',Helvetica] text-center text-sm font-normal leading-[19.6px] tracking-[0] whitespace-nowrap text-[#ffffffb2]">
                      {item.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </address>
        </div>
      </div>
      <div className="w-full border-t border-white/10 px-6 py-6 sm:px-10 lg:px-20">
        <div className="mx-auto flex w-full max-w-[calc(1440px-10rem)] flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="[font-family:'Google_Sans_Flex',Helvetica] text-sm font-normal leading-[19.6px] tracking-[0] text-[#ffffff80]">
            © Copyright Howroyd Group {new Date().getFullYear()}. All Rights Reserved
          </p>
          <p className="[font-family:'Google_Sans_Flex',Helvetica] text-sm font-normal leading-[19.6px] tracking-[0] text-[#ffffff80]">
            Company No: 17231511
          </p>
        </div>
      </div>
    </footer>
  );
};
