import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const Location = () => {
  return (
    <section id="localizacao" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Localização
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Map */}
                <div className="h-[400px] md:h-full min-h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0757891234567!2d-51.2195!3d-30.0368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzEyLjUiUyA1McKwMTMnMTAuMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização M&C Beauty Salão"
                  />
                </div>

                {/* Info */}
                <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-serif text-primary">
                        Venha nos visitar
                      </h3>
                      <p className="text-lg text-foreground">
                        📍 Rua Álvares Cabral, 282<br />
                        Bairro Cristo Redentor - Porto Alegre - RS<br />
                        Edifício Veneza, Loja 1 - Térreo
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    Local de fácil acesso e ambiente preparado para proporcionar 
                    conforto, acolhimento e beleza.
                  </p>

                  <div className="pt-4">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Rua+Álvares+Cabral+282+Cristo+Redentor+Porto+Alegre+RS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-2 transition-smooth"
                    >
                      Abrir no Google Maps
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Location;
