import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FinalCTA = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=555198061468&text=Olá!%20Quero%20agendar%20um%20horário%20no%20M%26C%20Beauty!%20Pode%20me%20ajudar%3F";

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30 shadow-gold">
          <CardContent className="p-8 md:p-16 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif text-balance leading-tight">
              Pronta para realçar sua beleza?
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Clique abaixo e fale comigo agora mesmo.
            </p>

            <div className="pt-4">
              <Button
                size="lg"
                className="gradient-gold text-primary-foreground hover:opacity-90 transition-smooth shadow-gold text-lg md:text-xl px-10 py-7 w-full sm:w-auto"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  💬 Agendar pelo WhatsApp
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground pt-4">
              Mensagem automática: "Olá! Quero agendar um horário no M&C Beauty! Pode me ajudar?"
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FinalCTA;
