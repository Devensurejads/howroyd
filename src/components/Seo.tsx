import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  image?: string;
}

const setMetaTag = (
  attribute: "name" | "property",
  key: string,
  content: string,
) => {
  let meta = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
};

export const Seo = ({
  title,
  description,
  image = "/images/howroyd-logo-og.png",
}: SeoProps): null => {
  useEffect(() => {
    document.title = title;

    const absoluteImage = new URL(image, window.location.origin).toString();

    setMetaTag("name", "description", description);

    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:image", absoluteImage);

    setMetaTag("name", "twitter:card", "summary");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", absoluteImage);
  }, [title, description, image]);

  return null;
};
