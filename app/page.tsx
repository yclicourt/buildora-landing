import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import BeforeAfter from "@/components/BeforeAfter";
import Steps from "@/components/Steps";
import Included from "@/components/Included";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <BeforeAfter />
        <Steps />
        <Included />
        <Pricing />
        <Faq />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}
