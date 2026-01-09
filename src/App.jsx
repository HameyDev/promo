import { useRef } from "react";

import CategoriesWithForm from "./components/CategoriesWithForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import PartnerBanner from "./components/PartnerBanner";
import Testimonials from "./components/Testimonials";

export default function App() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" })
  };

  return (
    <>
      <Header />
      <Hero onRegisterClick={scrollToForm} />
      <PartnerBanner />
      <CategoriesWithForm formRef={formRef} />
      <HowItWorks />
      <Testimonials />
      <Footer onRegisterClick={scrollToForm} />
    </>
  );
}
