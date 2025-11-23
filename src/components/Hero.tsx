import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Hero = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=555198061468&text=Olá!%20Quero%20agendar%20um%20horário%20no%20M%26C%20Beauty!%20Pode%20me%20ajudar%3F";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center max-w-5xl mx-auto space-y-8 animate-fade-in">
          {/* Logo/Brand */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-primary mb-4 tracking-tight">
              M&C Beauty Salão
            </h1>
            <p className="text-xl md:text-2xl text-secondary font-light tracking-wide">
              com Camila Marques e Miriam Cossetti
            </p>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 py-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-balance leading-tight">
              Transformando beleza em confiança
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Cabelos • Unhas • Sobrancelhas<br />
              <span className="text-accent">Beleza feminina com excelência</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg"
              className="gradient-gold text-primary-foreground hover:opacity-90 transition-smooth shadow-gold text-lg px-8 py-6 w-full sm:w-auto"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                👉 Agendar Agora no WhatsApp
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-lg px-8 py-6 w-full sm:w-auto"
              asChild
            >
              <a href="#portfolio">
                Ver Portfólio
              </a>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="pt-8 flex justify-center">
            <a 
              href="https://www.instagram.com/mcbeautysalao_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
            >
              <Instagram className="w-5 h-5" />
              <span>@mcbeautysalao_official</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
