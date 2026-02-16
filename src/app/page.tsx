
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { OilSelector } from '@/components/sections/OilSelector';
import { AboutUs } from '@/components/sections/AboutUs';
import { ContactForm } from '@/components/sections/ContactForm';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductShowcase />
        <OilSelector />
        <AboutUs />
        <ContactForm />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
