import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, CheckCircle, Calendar, MessageCircle, Navigation, ChevronRight, Users, Music } from 'lucide-react';
import piscinaImg from './assets/piscina.png';

const WHATSAPP_URL = "https://wa.me/5511973791786?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Ch%C3%A1cara%20da%20Nil%20e%20verificar%20datas%20dispon%C3%ADveis.";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function ChacaraDaNil() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-[#1A3A26] bg-[#F9F8F3] min-h-screen selection:bg-[#C69C3D] selection:text-white">
      
      {/* HEADER FIXO */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F8F3]/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className={`font-serif text-2xl font-bold tracking-tight ${scrolled ? 'text-[#1A3A26]' : 'text-white'}`}>
              Chácara da Nil
            </span>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-[#C69C3D] hover:bg-[#b08933] text-white px-6 py-2.5 rounded-full font-medium transition-transform hover:scale-105"
          >
            <Calendar className="w-4 h-4" />
            Agendar Visita
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1A3A26]">
          <img 
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Casamento elegante na Chácara da Nil" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#F9F8F3]/20 backdrop-blur-sm border border-[#F9F8F3]/30 text-[#F9F8F3] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 text-[#C69C3D] fill-current" />
              Avaliação 5.0 no Google Maps
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#F9F8F3] font-bold leading-tight mb-6">
              O cenário perfeito para <br/>
              <span className="text-[#C69C3D] italic">momentos inesquecíveis.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#F9F8F3]/90 mb-10 max-w-3xl mx-auto font-light">
              Eventos premium a apenas 5 minutos do centro de Arujá. <br className="hidden md:block" />
              <strong className="text-white font-semibold">Asfalto até a porta.</strong> Seus convidados chegam limpos, seguros e sem perrengue.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={WHATSAPP_URL}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#C69C3D] hover:bg-[#b08933] text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-[0_0_20px_rgba(198,156,61,0.4)] hover:-translate-y-1"
              >
                Verificar Datas Disponíveis
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEMA / DIFERENCIAL (Objeção) */}
      <section className="py-24 bg-[#F9F8F3]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-[#1A3A26]">
                  A natureza sem abrir mão da comodidade.
                </h2>
                <p className="text-lg text-[#1A3A26]/80 mb-6 leading-relaxed">
                  Sabemos que a maior preocupação ao alugar uma chácara é a logística. Estrada de terra, chuva que estraga a festa, convidados perdidos e banheiros sem estrutura.
                </p>
                <p className="text-lg text-[#1A3A26]/80 mb-8 leading-relaxed">
                  A Chácara da Nil foi projetada para eliminar essas dores. Oferecemos 4.000m² de infraestrutura completa, muito próxima ao centro urbano.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Asfalto até a porta (acesso fácil pela Dutra)",
                    "Apenas 5 minutos do centro de Arujá",
                    "Estrutura 100% coberta para não temer a chuva",
                    "Wi-Fi liberado e banheiros modernos"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#C69C3D] shrink-0" />
                      <span className="font-medium text-[#1A3A26]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-[#C69C3D] rounded-3xl translate-x-4 translate-y-4 opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Estrutura premium Chácara da Nil" 
                  className="relative rounded-3xl shadow-2xl object-cover h-[500px] w-full"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* INFRAESTRUTURA (Bento Grid) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-[#C69C3D] font-bold uppercase tracking-wider text-sm">Infraestrutura</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 text-[#1A3A26]">
                Tudo o que você precisa em 4.000m²
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Salão - Ocupa 2 colunas */}
            <FadeIn delay={0.1}>
              <div className="relative group rounded-3xl overflow-hidden h-full md:col-span-2">
                <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Salão de festas" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A26]/90 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-serif text-white mb-2">Salão Coberto Amplo</h3>
                  <p className="text-[#F9F8F3]/80">Elegância e segurança contra imprevistos climáticos.</p>
                </div>
              </div>
            </FadeIn>

           {/* Piscina */}
<FadeIn delay={0.2}>
  <div className="relative group rounded-3xl overflow-hidden h-full">
    <img src={piscinaImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Piscina" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A26]/90 to-transparent flex flex-col justify-end p-8">
      <h3 className="text-2xl font-serif text-white mb-2">Piscina com Piso de Pedra</h3>
      <p className="text-[#F9F8F3]/80">Lazer premium para a família.</p>
    </div>
  </div>
</FadeIn>

            {/* Pista de Dança */}
            <FadeIn delay={0.3}>
              <div className="relative group rounded-3xl overflow-hidden h-full">
                <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Pista de Dança" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A26]/90 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-serif text-white mb-2">Pista de Dança</h3>
                  <p className="text-[#F9F8F3]/80">Iluminação noturna para celebrar.</p>
                </div>
              </div>
            </FadeIn>

            {/* Bambuzal / Cenário Fotos - Ocupa 2 colunas */}
            <FadeIn delay={0.4}>
              <div className="relative group rounded-3xl overflow-hidden h-full md:col-span-2">
                <img src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Bambuzal" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A26]/90 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-serif text-white mb-2">Área de Bambuzal & Campo</h3>
                  <p className="text-[#F9F8F3]/80">O cenário idílico para as fotos do seu casamento.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TIPOS DE EVENTOS */}
      <section className="py-24 bg-[#1A3A26] text-[#F9F8F3]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-white">
                Perfeito para a sua necessidade
              </h2>
              <p className="text-xl text-[#F9F8F3]/80">Ambientes adaptáveis para diferentes proporções.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Star, title: "Casamentos", desc: "Cerimônia ao ar livre no bambuzal e recepção elegante no salão coberto." },
                { icon: Users, title: "Confraternizações", desc: "Ideal para RHs e empresas. Churrasqueira, campo e estrutura completa." },
                { icon: Music, title: "Lazer Familiar", desc: "Finais de semana de descanso e festa em um ambiente totalmente seguro." }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#F9F8F3]/10 backdrop-blur-sm border border-[#F9F8F3]/20 p-8 rounded-3xl hover:bg-[#F9F8F3]/15 transition-colors">
                  <item.icon className="w-10 h-10 text-[#C69C3D] mb-6" />
                  <h3 className="text-2xl font-serif font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-[#F9F8F3]/80 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 bg-[#F9F8F3] relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#C69C3D] rounded-full blur-[120px] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1A3A26] mb-8 leading-tight">
              A data do seu evento <br/>
              <span className="text-[#C69C3D]">merece este cenário.</span>
            </h2>
            <p className="text-xl text-[#1A3A26]/70 mb-12">
              Nossa agenda para os próximos meses já está sendo preenchida. Fale conosco agora pelo WhatsApp para garantir a sua data e solicitar um orçamento sem compromisso.
            </p>
            <a 
              href={WHATSAPP_URL}
              className="inline-flex items-center gap-3 bg-[#1A3A26] hover:bg-[#122a1b] text-white px-10 py-5 rounded-full text-xl font-medium transition-transform hover:scale-105 shadow-xl"
            >
              <MessageCircle className="w-6 h-6" />
              Quero agendar minha visita
            </a>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0f2316] text-[#F9F8F3]/60 py-12 border-t border-[#F9F8F3]/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="font-serif text-2xl font-bold text-white mb-4 block">Chácara da Nil</span>
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#C69C3D]" /> Rua Comendador José Alcides da Silva, 225 - Jardim Arujá, SP</span>
              <span className="flex items-center gap-2"><Navigation className="w-4 h-4 text-[#C69C3D]" /> Fácil acesso pela Rodovia Dutra</span>
              <span className="flex items-center gap-2 mt-2 font-medium text-white text-sm">Empresa aliada à comunidade LGBTQ+</span>
            </div>
          </div>
          <div className="md:text-right">
            <p className="mb-2">© {new Date().getFullYear()} Chácara da Nil. Todos os direitos reservados.</p>
            <p className="text-sm">Desenvolvido por VIZO Sistemas.</p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a 
        href={WHATSAPP_URL}
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform z-50 flex items-center justify-center animate-bounce-slow"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
      
    </div>
  );
}