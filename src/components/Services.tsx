import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Sparkles, Eye } from "lucide-react";

const Services = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=555198061468&text=Olá!%20Quero%20saber%20sobre%20valores%20e%20serviços.%20Pode%20me%20ajudar%3F";

  const services = [
    {
      icon: Scissors,
      title: "Cabelos",
      description: "Cortes, colorações, tratamentos, morena iluminada, alinhamento de fio e muito mais.",
    },
    {
      icon: Sparkles,
      title: "Unhas",
      description: "Manicure e pedicure com técnicas especializadas para mãos e pés impecáveis.",
    },
    {
      icon: Eye,
      title: "Sobrancelhas",
      description: "Design e modelagem de sobrancelhas para realçar seu olhar com perfeição.",
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Serviços
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Cuidado especializado e personalizado para realçar sua beleza natural
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary transition-smooth group hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="gradient-gold text-primary-foreground hover:opacity-90 transition-smooth shadow-gold text-lg px-8 py-6"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Quero ver valores no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
