import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TargetAudience from '@/components/TargetAudience';
import Services from '@/components/Services';
import WhereWeWork from '@/components/WhereWeWork_v3';
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
      <TargetAudience />
      <Services />
      <WhereWeWork />
      <Brands />
      <HowWeWork />
      <GovernmentSupport />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
