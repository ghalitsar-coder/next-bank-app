import React from "react";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "../components";

const Home = () => {
  return (
    <div className="bg-primary text-white grid gap-y-20 sm:gap-y-40 w-full overflow-hidden ">
      <Navbar />
      <Hero />
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Clients />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
