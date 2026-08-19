import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics, ScrollToTop } from "./components/layout";
import { Home } from "./screens/Home";
import { Projects } from "./screens/Projects";
import { Services } from "./screens/services";
import { Agencies } from "./screens/Agencies";
import { ContactUs } from "./screens/ContactUs";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/agencies" element={<Agencies />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
