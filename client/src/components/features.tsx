import { CheckCircle2, Globe2, Leaf, ShieldCheck } from "lucide-react";
import { FEATURES } from "@/lib/constants";

const iconMap = [Globe2, ShieldCheck, CheckCircle2, Leaf];

export function Features() {
  return (
    <section id="why-us" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Your Trusted Gateway to <span className="text-secondary">Indian Markets</span>
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Navigating India's vast supplier network can be complex. We simplify it with boots-on-the-ground expertise, ensuring you get exactly what you ordered, on time, every time.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {FEATURES.map((feature, idx) => {
                const Icon = iconMap[idx];
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                        <Icon className="h-6 w-6 text-secondary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                      <p className="text-sm text-blue-100">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/20 blur-2xl rounded-full" />
              <img 
                src="/images/logistics-feature.jpg" 
                alt="Indian market logistics" 
                className="relative rounded-2xl shadow-2xl border-4 border-white/10 w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-primary p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <p className="text-3xl font-bold mb-1">100%</p>
                <p className="text-sm font-medium text-muted-foreground">Verified Suppliers & Authenticity Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
