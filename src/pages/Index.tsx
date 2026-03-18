import Navbar from "@/components/agency/Navbar";
import Hero from "@/components/agency/Hero";
import About from "@/components/agency/About";
import Portfolio from "@/components/agency/Portfolio";
import Services from "@/components/agency/Services";
import Achievements from "@/components/agency/Achievements";
import Insights from "@/components/agency/Insights";
import CTA from "@/components/agency/CTA";
import Footer from "@/components/agency/Footer";

const Index = () => {
  return (
    <div className="bg-[#F5F5F5] text-black antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Achievements />
        <Insights />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
