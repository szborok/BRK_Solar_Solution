import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesAndSolutions from '@/components/ServicesAndSolutions';
import WhereWeWork from '@/components/WhereWeWork';
import HowWeWork from '@/components/HowWeWork';
import GovernmentSupport from '@/components/GovernmentSupport';
import Brands from '@/components/Brands';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
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
