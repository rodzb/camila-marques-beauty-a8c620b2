import camilaProfile from "@/assets/camila-profile.jpg";
import miriamProfile from "@/assets/miriam-profile.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-16 text-center">
            Sobre Nós
          </h2>

          <div className="space-y-20">
            {/* Camila Marques */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="flex justify-center md:justify-end order-2 md:order-1">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-gold">
                  <img 
                    src={camilaProfile} 
                    alt="Camila Marques - Fundadora do M&C Beauty Salão"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-6 text-lg text-foreground leading-relaxed order-1 md:order-2">
                <h3 className="text-3xl font-serif text-primary">Camila Marques</h3>
                <p>
                  Olá! Eu sou a <span className="text-primary font-semibold">Camila Marques</span>, 
                  fundadora do M&C Beauty Salão. Tenho 31 anos, sou mãe de 6 filhos e completamente 
                  apaixonada por transformar a autoestima das minhas clientes.
                </p>
                
                <p>
                  Sou uma profissional dedicada e especialista em <span className="text-accent font-semibold">cabelos, 
                  unhas e design de sobrancelhas</span>. Cuido de cada detalhe com muito carinho, 
                  técnica e foco total em entregar resultados incríveis.
                </p>
                
                <p className="text-primary italic text-xl font-serif pt-4">
                  "Minha missão é que cada cliente saia realizada, confiante e ainda mais linda. 
                  Seja muito bem-vinda ao meu espaço!"
                </p>
              </div>
            </div>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-32 bg-gradient-to-r from-transparent to-primary" />
              <div className="w-2 h-2 bg-primary rounded-full" />
              <div className="h-px w-32 bg-gradient-to-l from-transparent to-primary" />
            </div>

            {/* Miriam Cossetti */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="flex justify-center md:justify-start order-2">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-gold">
                  <img 
                    src={miriamProfile} 
                    alt="Miriam Cossetti - Especialista em Loiros e Coloração"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-6 text-lg text-foreground leading-relaxed order-1">
                <h3 className="text-3xl font-serif text-primary">Miriam Cossetti</h3>
                <p>
                  Olá! Eu sou a <span className="text-primary font-semibold">Miriam Cossetti</span>, 
                  cofundadora do M&C Beauty Salão e especialista em loiros, mechas e coloração profissional. 
                  Minha paixão pela beleza começou há mais de uma década, e desde então venho me dedicando 
                  a estudar, aperfeiçoar técnicas e transformar a autoestima das minhas clientes com 
                  resultados naturais e personalizados.
                </p>
                
                <p>
                  Tenho formações avançadas em <span className="text-accent font-semibold">colorimetria, loiros, mechas, design de mechas, 
                  cortes profissionais</span> e técnicas atualizadas com grandes nomes da área. Trabalho com 
                  precisão, cuidado e sensibilidade para entregar cabelos saudáveis e iluminados.
                </p>
                
                <p className="text-primary italic text-xl font-serif pt-4">
                  "Meu compromisso é proporcionar uma experiência única, com atendimento acolhedor 
                  e resultados impecáveis."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
