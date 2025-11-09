import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { PageTransition } from "@/components/animations/PageTransition";
import { MainLayout } from "@/components/layout/MainLayout";

const Index = () => {
  const capabilityHighlights = [
    {
      title: "Minified Technology",
      description:
        "Enterprise-grade infrastructure designed to be resilient, efficient, and scalable from day one.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=640&q=80",
    },
    {
      title: "Personalized Service",
      description:
        "Lean, expert-driven teams dedicated to tailoring every engagement around your business outcomes.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=640&q=80",
    },
    {
      title: "Cloud Solutions",
      description:
        "Azure, AWS, Oracle, and Google Cloud specialists delivering cost-optimized, secure cloud journeys.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=640&q=80",
    },
    {
      title: "Better Pricing",
      description:
        "Strong vendor alliances and procurement expertise keep projects on schedule and within budget.",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=640&q=80",
    },
  ];

  const successStories = [
    {
      title: "Retail Enterprise",
      description:
        "Built HQ data centers for 160+ stores with disaster recovery sites, unified communications, and managed services.",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=720&q=80",
    },
    {
      title: "FMCG Distribution",
      description:
        "Implemented SAP ERP and Microsoft retail solutions, supporting 16+ store networks and 100+ POS terminals.",
      image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=720&q=80",
    },
    {
      title: "Food Chain",
      description:
        "Delivered hybrid infrastructure, cybersecurity, and long-term AMC to ensure uninterrupted customer service.",
      image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=720&q=80",
    },
  ];

  return (
    <MainLayout>
      <PageTransition>
        <Hero />

        <section className="bg-background">
          <div className="container mx-auto px-4 py-20 grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimatedSection className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">About Octalpha</p>
              <h2 className="text-4xl font-bold text-foreground">10+ Years' Experience in IT</h2>
              <p className="text-lg text-muted-foreground">
                Octalpha takes every detail into account to ensure systems operate smoothly and responsively. From SAP ERP
                implementations to modern cybersecurity programs, we architect solutions that empower digital
                transformation and growth.
              </p>
              <p className="text-lg text-muted-foreground">
                We have successfully delivered enterprise-scale solutions for leading retail chains, FMCG distributors, and
                food service brands across the UAE and GCC—enabling thousands of daily customer interactions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="hero" className="group">
                  <Link to="/about">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" className="relative">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=80"
                alt="Digital transformation collaboration"
                className="w-full rounded-3xl border border-border shadow-strong object-cover"
                loading="lazy"
              />
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20 bg-muted/25">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
                Comprehensive IT Solutions for Modern Businesses
              </p>
              <h2 className="text-4xl font-bold text-foreground">Empowering enterprises with innovative, secure technology</h2>
            </AnimatedSection>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {capabilityHighlights.map((item, index) => (
                <AnimatedSection key={item.title} delay={index * 0.05}>
                  <Card className="overflow-hidden bg-card hover:shadow-xl transition-all duration-500">
                    <div className="h-48 overflow-hidden">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
                Learn More About Our Success Stories
              </p>
              <h2 className="text-4xl font-bold text-foreground">Delivering measurable impact across industries</h2>
            </AnimatedSection>
            <div className="grid gap-8 md:grid-cols-3">
              {successStories.map((story, index) => (
                <AnimatedSection key={story.title} delay={index * 0.05}>
                  <Card className="overflow-hidden bg-card hover:shadow-xl transition-all duration-500 flex flex-col">
                    <div className="h-48 overflow-hidden">
                      <img src={story.image} alt={story.title} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <div className="p-6 space-y-3 flex-1">
                      <h3 className="text-2xl font-semibold text-foreground">{story.title}</h3>
                      <p className="text-muted-foreground">{story.description}</p>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <AnimatedSection direction="up">
          <div className="container mx-auto px-4 pb-20">
            <Card className="relative overflow-hidden bg-gradient-primary text-primary-foreground p-12 shadow-strong">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,white,transparent_65%)]" />
              <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] mb-4 text-primary-foreground/70">Need guidance?</p>
                  <h3 className="text-3xl font-bold mb-4">Talk with our consultants today</h3>
                  <p className="text-lg text-primary-foreground/80 max-w-2xl">
                    Whether you are planning a cloud migration, strengthening cybersecurity posture, or rolling out ERP,
                    we will tailor a roadmap aligned with your goals.
                  </p>
                </div>
                <Button asChild size="lg" variant="cta" className="group">
                  <Link to="/contact">
                    Schedule a call
                    <PhoneCall className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </AnimatedSection>
      </PageTransition>
    </MainLayout>
  );
};

export default Index;
