import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const MapSection = () => {
  const restaurantAddress = "Rua Voluntários da Pátria, 813";
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=&q=${encodeURIComponent("Restaurante Abbey " + restaurantAddress)}`;

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-soft-gold/10 px-4 py-2 rounded-full mb-4">
            <MapPin className="h-5 w-5 text-celebration" />
            <span className="text-sm font-medium text-celebration">Localização</span>
          </div>
          <h2 className="text-3xl font-bold text-primary mb-2">Como Chegar</h2>
          <p className="text-muted-foreground">Nos encontre no Restaurante Abbey</p>
        </div>
        
        <Card className="shadow-card border-soft-gold/20 overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-gradient-elegant p-6 text-center">
              <h3 className="text-xl font-semibold text-primary mb-2">Restaurante Abbey</h3>
              <p className="text-muted-foreground">{restaurantAddress}</p>
            </div>
            
            {/* Placeholder for map - in a real implementation, you'd use Google Maps API */}
            <div className="h-64 bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-celebration mx-auto mb-2" />
                <p className="text-muted-foreground">Mapa do Restaurante Abbey</p>
                <p className="text-sm text-muted-foreground mt-1">{restaurantAddress}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MapSection;