export const Footer = () => {
  return (
    <footer className="bg-gradient-primary py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-primary-foreground mb-4">
              Octalpha Business Solutions
            </h3>
            <p className="text-primary-foreground/70">
              Your trusted technology partner for end-to-end IT solutions in the UAE and GCC region.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#why-us" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="/#customers" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Customers
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Contact
                </a>
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
