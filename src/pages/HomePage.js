import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="homepage__hero">
        <Hero />
      </section>
      <section className="homepage__skills">
        <Skills />
      </section>
      <section className="homepage__testimonials">
        <Testimonials />
      </section>
    </div>
  );
};

export default HomePage;
