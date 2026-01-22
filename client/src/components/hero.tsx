import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-export.png";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Indian exports global shipping"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-block px-3 py-1 mb-6 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
            <span className="text-white/90 text-sm font-medium tracking-wide uppercase">
              Premium Global Sourcing Partner
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            India's Diversity, <br/>
            <span className="text-secondary">Delivered Globally.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
            From local artisans to global markets — we connect you with the finest manufacturers and authentic products from every corner of India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 h-12 shadow-lg shadow-secondary/20"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Request a Product
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 h-12"
            >
              Talk to an Expert
              <MessageCircle className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Indian Pattern Strip at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-secondary via-white to-accent" />
    </section>
  );
}
