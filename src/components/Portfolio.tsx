import { Card } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";

const Portfolio = () => {
  const placeholders = Array.from({ length: 4 }, (_, i) => i);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Portfólio
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Alguns dos trabalhos que realizei com muito carinho
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {placeholders.map((index) => (
            <Card 
              key={index}
              className="bg-muted border-border overflow-hidden group hover-scale transition-smooth aspect-square"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <ImageIcon className="w-10 h-10 text-primary" />
                </div>
                <p className="text-muted-foreground text-lg">
                  Adicionar foto do portfólio aqui
                </p>
                <p className="text-xs text-muted-foreground/60">
                  Espaço {index + 1} de 4
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
