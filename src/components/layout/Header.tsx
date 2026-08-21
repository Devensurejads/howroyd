import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";

const navigationItems = [
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Agencies", path: "/agencies" },
  { label: "Contact", path: "/contact" },
];

export const Header = (): JSX.Element => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white px-5 py-5 transition-shadow sm:px-8 lg:px-20 ${
        isScrolled ? "shadow-[0px_1px_4px_0px_#E8E8E8]" : ""
      }`}
    >
      <div className="mx-auto flex w-full max-w-[calc(1440px-10rem)] items-center justify-between gap-6">
        <Link
          to="/"
          className="shrink-0"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            className="w-[175px] sm:w-[200px]"
            alt="Group"
            src="/images/logo.svg"
          />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex flex-wrap items-center gap-5 md:gap-[38px]">
            {navigationItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`[font-family:'Google_Sans_Flex',Helvetica] text-base font-normal leading-[22.4px] text-[#363535] transition-opacity hover:opacity-70 ${
                    location.pathname === item.path
                      ? "underline underline-offset-8"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a href="tel:+441273288577" className="hidden shrink-0 lg:block">
          <Button
            type="button"
            className="h-auto shrink-0 rounded-md border border-[#363535] bg-[#363535] px-7 py-3.5 text-base font-normal leading-[22.4px] text-white hover:bg-white hover:text-[#363535] [font-family:'Google_Sans_Flex',Helvetica]"
          >
            T: +44 (0)1273 288 577
          </Button>
        </a>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="text-[#363535] lg:hidden"
        >
          {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="absolute left-0 right-0 top-full z-40 flex flex-col items-start gap-6 border-t border-[#0000001a] bg-white px-5 py-6 shadow-sm sm:px-8 lg:hidden">
          <ul className="flex w-full flex-col items-start gap-5">
            {navigationItems.map((item) => (
              <li key={item.path} className="w-full">
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block [font-family:'Google_Sans_Flex',Helvetica] text-lg font-normal leading-[22.4px] transition-opacity hover:opacity-70 ${
                    location.pathname === item.path
                      ? "text-[#0066bb]"
                      : "text-[#363535]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="tel:+441273288577"
            onClick={() => setIsMenuOpen(false)}
            className="w-full"
          >
            <Button
              type="button"
              className="h-auto w-full rounded-md border border-[#363535] bg-[#363535] px-7 py-3.5 text-base font-normal leading-[22.4px] text-white hover:bg-white hover:text-[#363535] [font-family:'Google_Sans_Flex',Helvetica]"
            >
              T: +44 (0)1273 288 577
            </Button>
          </a>
        </div>
      ) : null}
    </header>
  );
};
