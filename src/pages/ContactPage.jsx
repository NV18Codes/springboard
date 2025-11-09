import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Contact } from "@/components/Contact";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const quickContacts = [
  {
    title: "Talk to sales",
    description: "Schedule a discovery call to scope projects, timelines, and commercials.",
    icon: <Phone className="h-6 w-6" />,
    action: "Book a call",
    href: "tel:+97142424920",
  },
  {
    title: "Request a proposal",
    description: "Share your requirements and we will deliver a tailored proposal within 48 hours.",
    icon: <Mail className="h-6 w-6" />,
    action: "Email us",
    href: "mailto:info.dxb@octalpha.com",
  },
  {
    title: "Need rapid support?",
    description: "Existing customers can raise tickets or start a live chat with our helpdesk team.",
    icon: <MessageCircle className="h-6 w-6" />,
    action: "Open support",
    href: "mailto:support@octalpha.com",
  },
];

const ContactPage = () => {
  return (
    <MainLayout>
      <PageTransition>
        <section className="relative bg-gradient-to-br from-background via-background to-muted/30">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
              alt="Dubai city skyline"
              className="h-full w-full object-cover opacity-25"
              loading="lazy"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-20 md:py-28">
            <AnimatedSection className="text-center max-w-3xl mx-auto space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Contact</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">Let’s build the future of your IT together</h1>
              <p className="text-lg text-muted-foreground">
                Reach out for consultations, partnerships, or support—we are ready to respond quickly and thoughtfully.
              </p>
              <p className="text-sm text-muted-foreground">
                2408, 24th floor, Tower B, Business Central Towers, Dubai Internet City, Dubai, UAE
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {quickContacts.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <Card className="h-full p-8 bg-card border-border/70 hover:shadow-xl transition-all">
                  <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>
                  <Button asChild variant="hero" className="group">
                    <a href={item.href}>
                      {item.action}
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <Contact />
          </AnimatedSection>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default ContactPage;

