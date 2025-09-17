import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface EventCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
}

const EventCard = ({ icon: Icon, title, content }: EventCardProps) => {
  return (
    <Card className="bg-card shadow-card hover:shadow-golden transition-all duration-300 transform hover:scale-105 border-soft-gold/20">
      <CardContent className="p-6 text-center">
        <div className="mb-4 flex justify-center">
          <div className="bg-gradient-party p-3 rounded-full shadow-golden">
            <Icon className="h-8 w-8 text-celebration-foreground" />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{content}</p>
      </CardContent>
    </Card>
  );
};

export default EventCard;