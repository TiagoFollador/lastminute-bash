import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import EventCard from "@/components/EventCard";
import MapSection from "@/components/MapSection";
import { Calendar, Clock, MapPin, Heart } from "lucide-react";
import birthdayHeroBg from "@/assets/birthday-hero-bg.jpg";

const Index = () => {
  const handleRSVP = () => {
    // In a real app, this would open a form or redirect to RSVP system
    alert("Por favor, me avisem por WhatsApp ou telefone quem consegue ir! 😊");
  };

  return (
    <div className="min-h-screen bg-gradient-elegant">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${birthdayHeroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero/70"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-warm-black mb-6 leading-tight">
              Você está convidado para o meu aniversário! 🎉
            </h1>
            <Card className="bg-warm-white/95 backdrop-blur-sm shadow-card border-soft-gold/30">
              <CardContent className="p-8">
                <p className="text-lg md:text-xl text-primary leading-relaxed">
                  Oi, família! Tudo bem por aí? Sei que está super em cima da hora 
                  <span className="text-celebration font-semibold"> (me desculpem por isso!)</span>, 
                  mas gostaria muito de convidar vocês para comemorar meu aniversário neste domingo! 
                  Vamos nos encontrar no <span className="font-semibold text-celebration">Restaurante Abbey</span> 
                  para almoçar e celebrar juntos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-soft-gold/10 px-4 py-2 rounded-full mb-4">
              <Heart className="h-5 w-5 text-celebration" />
              <span className="text-sm font-medium text-celebration">Detalhes do Evento</span>
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4">Informações Importantes</h2>
            <p className="text-xl text-muted-foreground">Tudo que vocês precisam saber</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <EventCard
              icon={Calendar}
              title="Quando?"
              content="Domingo, 21 de setembro"
            />
            <EventCard
              icon={Clock}
              title="Horário?"
              content="A partir das 13h"
            />
            <EventCard
              icon={MapPin}
              title="Onde?"
              content="Restaurante Abbey (Rua Voluntários da Pátria, 813)"
            />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <MapSection />

      {/* RSVP Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-warm-white/95 backdrop-blur-sm shadow-golden border-soft-gold/30">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Espero muito poder comemorar com vocês!
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Sua presença é o melhor presente que eu poderia receber. 
                Vamos fazer deste domingo um dia especial e cheio de boas memórias!
              </p>
              
              
              <p className="text-sm text-muted-foreground italic">
                Por favor, me avisem quem consegue ir para eu poder organizar tudo 💛
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default Index;