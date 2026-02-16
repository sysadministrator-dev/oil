
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { AboutUs } from '@/components/sections/AboutUs';
import { ContactForm } from '@/components/sections/ContactForm';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductShowcase />
        <AboutUs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
