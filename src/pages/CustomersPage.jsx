import { BriefcaseBusiness, Building, Globe } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Customers } from "@/components/Customers";
import { Card } from "@/components/ui/card";

const caseStudies = [
  {
    company: "Retail Enterprise",
    sector: "Multi-country retail chain",
    result:
      "Built HQ data centers for 160+ stores with DR sites, virtualization, backup and DR, WLAN, Exchange Server, UPS/EMS, and EDR—backed by a 5-year AMC.",
    icon: <BriefcaseBusiness className="h-6 w-6" />,
  },
  {
    company: "Enterprise Corporation",
    sector: "Regional conglomerate",
    result:
      "vCISO engagement for 2+ years covering VAPT, data center revamp, DR site, virtualization, networking, UPS/EMS, and compliance-driven risk assessments.",
    icon: <Building className="h-6 w-6" />,
  },
  {
    company: "Security-Focused Organization",
    sector: "Critical services",
    result:
      "Delivered PAM, OPSWAT sanitization, Fortinet SIEM/NAC/Analyzer, ManageEngine UEM & MDM, data center power, CCTV networking, and a 6-year AMC.",
    icon: <Globe className="h-6 w-6" />,
  },
];

const CustomersPage = () => {
  return (
    <MainLayout>
      <PageTransition>
        <section className="relative bg-gradient-to-br from-background via-background to-muted/30">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80"
              alt="Business professionals shaking hands"
              className="h-full w-full object-cover opacity-25"
              loading="lazy"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-20 md:py-28">
            <AnimatedSection className="text-center max-w-3xl mx-auto space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Our customers</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">Trusted by industry leaders and innovators</h1>
              <p className="text-lg text-muted-foreground">
                We partner with enterprises across retail, finance, government, energy, and manufacturing—delivering
                measurable outcomes and lasting relationships.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <AnimatedSection>
            <Customers />
          </AnimatedSection>
        </section>

        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection className="mb-12 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Success stories</h2>
              <p className="text-lg text-muted-foreground">
                A glimpse into how we co-create value with customers across the region.
              </p>
            </AnimatedSection>
            <div className="grid gap-8 md:grid-cols-3">
              {caseStudies.map((item, index) => (
                <AnimatedSection key={item.company} delay={index * 0.1}>
                  <Card className="p-8 bg-card border-border/70 hover:shadow-xl transition-all">
                    <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6">
                      {item.icon}
                    </div>
                    <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">{item.sector}</p>
                    <h3 className="text-xl font-semibold mb-3">{item.company}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.result}</p>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default CustomersPage;

