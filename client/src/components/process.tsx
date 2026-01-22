import { Search, Handshake, ShieldCheck, Ship } from "lucide-react";

export function Process() {
  const steps = [
    {
      id: 1,
      title: "Tell Us What You Need",
      desc: "Share your requirements, specifications, and target price.",
      icon: Search
    },
    {
      id: 2,
      title: "We Source & Verify",
      desc: "We identify the best manufacturers and negotiate on your behalf.",
      icon: Handshake
    },
    {
      id: 3,
      title: "Quality Control",
      desc: "Our team conducts rigorous inspections before shipment.",
      icon: ShieldCheck
    },
    {
      id: 4,
      title: "Global Delivery",
      desc: "We handle customs, logistics, and door-to-door delivery.",
      icon: Ship
    }
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Seamless Export Process</h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.id} className="relative flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-primary/10 flex items-center justify-center mb-6 group-hover:border-secondary transition-colors duration-300 shadow-sm bg-muted/20">
                  <step.icon className="h-10 w-10 text-primary group-hover:text-secondary transition-colors duration-300" />
                </div>
                <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm transform translate-x-4 -translate-y-2">
                  {step.id}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm max-w-[250px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
