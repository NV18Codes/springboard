import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gradient-primary py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/1000046891-removebg-preview.png" 
                alt="Octalpha Business Solutions" 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-primary-foreground/70">
              Your trusted technology partner for end-to-end IT solutions in the UAE and GCC region.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/customers" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Customers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Contact Info</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>Dubai Internet City, UAE</li>
              <li>Tel: +971 4 242 4920</li>
              <li>info.dxb@octalpha.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/70">
            © {new Date().getFullYear()} Octalpha Business Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
