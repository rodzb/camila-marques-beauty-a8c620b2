import { Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=555198061468&text=Olá!%20Quero%20agendar%20um%20horário%20no%20M%26C%20Beauty!%20Pode%20me%20ajudar%3F";

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
            {/* Logo */}
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-serif text-primary">
                M&C Beauty Salão
              </h3>
              <p className="text-sm text-muted-foreground">
                Transformando beleza em confiança
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/mcbeautysalao_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Instagram className="w-5 h-5" />
                <span>@mcbeautysalao_official</span>
              </a>
              
              <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">Rua Álvares Cabral, 282 - Cristo Redentor, Porto Alegre - RS</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center md:justify-end">
              <Button
                size="sm"
                className="gradient-gold text-primary-foreground hover:opacity-90 transition-smooth"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 M&C Beauty Salão. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
