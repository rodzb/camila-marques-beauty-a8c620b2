import { Card } from "@/components/ui/card";
import portfolioNails1 from "@/assets/portfolio-nails-1.jpg";
import portfolioNails2 from "@/assets/portfolio-nails-2.jpg";
import portfolioHair1 from "@/assets/portfolio-hair-1.jpg";
import portfolioHair2 from "@/assets/portfolio-hair-2.jpg";

const Portfolio = () => {
  const portfolioImages = [
    { src: portfolioNails1, alt: "Esmaltação - M&C Beauty Salão" },
    { src: portfolioNails2, alt: "Pé e mão - M&C Beauty Salão" },
    { src: portfolioHair1, alt: "Corte + Matização da Cor - M&C Beauty Salão" },
    { src: portfolioHair2, alt: "Corte Chanel reto - M&C Beauty Salão" }
  ];

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
          {portfolioImages.map((image, index) => (
            <Card 
              key={index}
              className="bg-muted border-border overflow-hidden group hover-scale transition-smooth aspect-square"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full h-full relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
