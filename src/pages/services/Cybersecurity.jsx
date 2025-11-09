import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, Cloud, Smartphone, AlertTriangle } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

const Cybersecurity = () => {
  const services = [
    {
      icon: Shield,
      title: "Network Security",
      items: ["Next-Generation Firewalls (NGFW)", "IDS/IPS Systems", "Secure Web Gateways", "Network Access Control (NAC)", "VPN Solutions"],
    },
    {
      icon: Smartphone,
      title: "Endpoint Security",
      items: ["Endpoint Protection Platforms (EPP)", "Endpoint Detection & Response (EDR)", "Mobile Device Management (MDM)", "Anti-Virus / Anti-Malware", "Application Whitelisting"],
    },
    {
      icon: Lock,
      title: "Identity & Access Management",
      items: ["Single Sign-On (SSO)", "Multi-Factor Authentication (MFA)", "Privileged Access Management (PAM)", "Directory Services", "Password Vaults"],
    },
    {
      icon: Eye,
      title: "Threat Detection & Response",
      items: ["SIEM Solutions", "Extended Detection & Response (XDR)", "Managed Detection & Response (MDR)", "Threat Intelligence Platforms", "Incident Response (SOAR)"],
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      items: ["Cloud Access Security Broker (CASB)", "Cloud Security Posture Management (CSPM)", "Cloud Workload Protection (CWPP)", "Web Application Firewall (WAF)", "Zero Trust Network Access (ZTNA)"],
    },
    {
      icon: AlertTriangle,
      title: "Security Assessment",
      items: ["VAPT Services", "Risk Assessment", "Security Audits", "Compliance Testing", "Penetration Testing"],
    },
  ];

  return (
    <MainLayout>
      <PageTransition>
        <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80"
              alt="Cybersecurity operations center"
              className="h-full w-full object-cover opacity-25"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />
          <div className="container relative z-10 mx-auto px-4">
            <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">Cybersecurity Services</h1>
              <p className="text-xl text-primary-foreground/80">
                Comprehensive security solutions to protect your business from evolving cyber threats.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <AnimatedSection key={service.title} delay={index * 0.05}>
                      <Card className="p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border-l-4 border-l-accent">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="p-3 bg-gradient-primary rounded-lg shadow-md">
                            <Icon className="h-8 w-8 text-primary-foreground" />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground pt-2">{service.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {service.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </AnimatedSection>
                  );
                })}
              </div>

              <AnimatedSection>
                <Card className="p-8 md:p-12 bg-gradient-primary relative overflow-hidden text-center">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white,transparent_65%)]" />
                  <div className="relative">
                    <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                      Protect Your Business from Cyber Threats
                    </h2>
                    <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                      Our multi-layered security approach ensures comprehensive protection across all attack surfaces,
                      from network perimeter to endpoint devices and cloud infrastructure.
                    </p>
                    <Button variant="cta" size="lg">
                      Schedule Security Assessment
                    </Button>
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default Cybersecurity;
