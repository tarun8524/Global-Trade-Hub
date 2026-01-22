import { Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Globe className="h-6 w-6 text-secondary" />
              <span className="font-serif font-bold text-2xl">
                IndiaExport<span className="text-secondary">.</span>
              </span>
            </div>
            <p className="text-blue-100 max-w-sm mb-6 leading-relaxed">
              Bridging the gap between Indian manufacturers and the world. We ensure quality, authenticity, and seamless delivery for every shipment.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map(social => (
                <div key={social} className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary transition-colors flex items-center justify-center cursor-pointer">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-white rounded-sm" />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Products', 'How It Works', 'Certifications', 'Contact'].map(link => (
                <li key={link}>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-secondary">Export Categories</h4>
            <ul className="space-y-4">
              {['Textiles & Fabrics', 'Agro Products', 'Handicrafts', 'Leather Goods', 'Spices'].map(link => (
                <li key={link}>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
          <p>&copy; {new Date().getFullYear()} India Export Co. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
