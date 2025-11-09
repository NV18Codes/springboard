import { Card } from "@/components/ui/card";
import { Building2, ShoppingBag, Shield, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export const Customers = () => {
  const references = [
    {
      icon: ShoppingBag,
      name: "Major Retail Chain",
      description: "Built their Data Center in HQ managing 160 stores",
      services: [
        "DR site & IT Infrastructure",
        "Virtualization & Backup/DR",
        "WLAN solution & Exchange Server",
        "UPS, EMS & EDR",
        "AMC for 5+ years",
      ],
    },
    {
      icon: Building2,
      name: "Enterprise Corporation",
      description: "Complete IT transformation and compliance",
      services: [
        "vCISO services for 2+ years",
        "VAPT & Risk Assessment",
        "Data Center revamp & DR site",
        "Virtualization & Networking",
        "AMC for 2+ years",
      ],
    },
    {
      icon: Shield,
      name: "Security-Focused Organization",
      description: "Advanced security and access management",
      services: [
        "Privileged Access Management",
        "OPSWAT Sanitization",
        "Fortinet SEIM, NAC & Analyzer",
        "Manage Engine UEM & MDM",
        "AMC for 6+ years",
      ],
    },
  ];

  const partnerLogos = [
    "Microsoft", "Cisco", "Dell", "HPE", "VMware",
    "Fortinet", "Palo Alto", "AWS", "Google Cloud", "Veeam"
  ];

  return (
    <section id="customers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Customer References
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading organizations across the UAE and GCC
          </p>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mt-6"></div>
        </div>

        {/* Customer References */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {references.map((customer, index) => {
            const Icon = customer.icon;
            return (
              <AnimatedSection key={customer.name} delay={index * 0.05}>
                <Card className="p-8 hover:shadow-strong transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-primary rounded-lg">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{customer.name}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">{customer.description}</p>
                  <div className="space-y-2">
                    {customer.services.map((service) => (
                      <div key={service} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Strategic Alliances */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Strategic Alliances
          </h3>
          <p className="text-lg text-muted-foreground">
            Partnering with industry leaders to deliver best-in-class solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {partnerLogos.map((partner, index) => (
            <AnimatedSection key={partner} delay={index * 0.05}>
              <Card className="p-6 flex items-center justify-center hover:shadow-medium transition-all duration-500 group">
                <span className="text-lg font-semibold text-muted-foreground group-hover:text-accent transition-colors">
                  {partner}
                </span>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
