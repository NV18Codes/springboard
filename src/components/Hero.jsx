import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1580894906472-2b5f8a9a19f8?auto=format&fit=crop&w=1600&q=80"
          alt="Technology infrastructure"
          className="h-full w-full object-cover opacity-25"
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <AnimatedSection direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-sm text-muted-foreground">
                Business Central Towers, Dubai Internet City, UAE
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.42em] text-primary-foreground/80">
                Empowering Connections. Driving the Future.
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                Your End-to-End Technology Partner
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/70 font-light">
                From Data Centers to Digital Transformation.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Octalpha Business Solutions is a UAE-based partner helping enterprises scale faster with secure, intelligent
              IT infrastructure, cybersecurity, cloud enablement, compliance, and managed services.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="cta" size="lg" className="group">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-card/50 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-card/70"
              >
                Learn More
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              {[
                { value: "300", label: "Happy Clients" },
                { value: "200", label: "Finished Projects" },
                { value: "50", label: "Vendors" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/70 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};
