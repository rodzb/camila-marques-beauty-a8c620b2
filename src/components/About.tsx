const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Quem sou eu?
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-foreground leading-relaxed">
            <p>
              Olá! Eu sou a <span className="text-primary font-semibold">Camila Marques</span>, 
              fundadora do M&C Beauty Salão. Tenho 31 anos, sou mãe de 6 filhos e completamente 
              apaixonada por transformar a autoestima das minhas clientes.
            </p>
            
            <p>
              Sou uma profissional dedicada e especialista em <span className="text-accent">cabelos, 
              unhas e design de sobrancelhas</span>. Cuido de cada detalhe com muito carinho, 
              técnica e foco total em entregar resultados incríveis.
            </p>
            
            <p className="text-primary italic text-2xl font-serif">
              "Minha missão é que cada cliente saia realizada, confiante e ainda mais linda. 
              Seja muito bem-vinda ao meu espaço!"
            </p>
          </div>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary" />
            <div className="w-2 h-2 bg-primary rounded-full" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
