import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProductGrid } from "@/components/product-grid";
import { Features } from "@/components/features";
import { Process } from "@/components/process";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <div id="about" className="py-20 container mx-auto px-4 text-center max-w-4xl">
           <h2 className="text-3xl font-bold text-primary mb-6">Bridging Indian Heritage with Global Markets</h2>
           <p className="text-lg text-muted-foreground leading-relaxed">
             We are more than just exporters; we are curators of Indian excellence. Our mission is to simplify the complex world of international trade, providing you with a seamless gateway to the rich, diverse, and high-quality products that India has to offer.
           </p>
        </div>
        <ProductGrid />
        <Features />
        <Process />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
