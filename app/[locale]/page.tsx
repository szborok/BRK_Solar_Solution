import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import ServicesAndSolutions from '@/components/sections/ServicesAndSolutions';
import WhereWeWork from '@/components/sections/WhereWeWork';
import HowWeWork from '@/components/sections/HowWeWork';
import GovernmentSupport from '@/components/sections/GovernmentSupport';
import Brands from '@/components/sections/Brands';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Brands />
      <ServicesAndSolutions />
      <GovernmentSupport />
      <WhereWeWork />
      <HowWeWork />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
