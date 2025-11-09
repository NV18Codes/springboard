import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Customers", path: "/customers" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceLinks = [
    { name: "IT Infrastructure", path: "/services/it-infrastructure" },
    { name: "Cybersecurity", path: "/services/cybersecurity" },
    { name: "GRC", path: "/services/grc" },
    { name: "Cloud Solutions", path: "/services/cloud-solutions" },
    { name: "Digital Collaboration", path: "/services/digital-collaboration" },
    { name: "Managed IT Solutions", path: "/services/managed-it-solutions" },
    { name: "Customer Journey", path: "/services/customer-journey" },
    { name: "ERP", path: "/services/erp" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              Octalpha
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  [
                    "text-sm font-medium transition-colors",
                    isActive ? "text-accent" : "text-foreground hover:text-accent",
                  ].join(" ")
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            {/* What We Do Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1"
              >
                What We Do
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-strong z-50">
                  <div className="py-2">
                    {serviceLinks.map((service) => (
                      <NavLink
                        key={service.name}
                        to={service.path}
                        className={({ isActive }) =>
                          [
                            "block px-4 py-2 text-sm transition-colors",
                            isActive
                              ? "bg-accent/10 text-accent"
                              : "text-foreground hover:bg-accent/10 hover:text-accent",
                          ].join(" ")
                        }
                      >
                        {service.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    [
                      "text-sm font-medium transition-colors",
                      isActive ? "text-accent" : "text-foreground hover:text-accent",
                    ].join(" ")
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              
              {/* Mobile What We Do */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1"
                >
                  What We Do
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {serviceLinks.map((service) => (
                      <NavLink
                        key={service.name}
                        to={service.path}
                        className={({ isActive }) =>
                          [
                            "block text-sm transition-colors",
                            isActive ? "text-accent" : "text-muted-foreground hover:text-accent",
                          ].join(" ")
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              <Button variant="hero" size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
