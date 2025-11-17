import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Wifi, Coffee, MapPin, Calendar, Bed, Bath } from "lucide-react";
import { useState } from "react";

export interface Room {
  id: string;
  name: string;
  image: string;
  capacity: number;
  status: "available" | "booked" | "full";
  amenities: string[];
  location: string;
  pricePerNight?: number;
}

interface RoomCardProps {
  room: Room;
  onBook?: (roomId: string) => void;
  onViewDetails?: (roomId: string) => void;
}

const statusConfig = {
  available: { label: "Disponible", variant: "default" as const, color: "text-green-600" },
  booked: { label: "Réservé", variant: "secondary" as const, color: "text-yellow-600" },
  full: { label: "Complet", variant: "destructive" as const, color: "text-red-600" },
};

const amenityIcons: Record<string, any> = {
  wifi: Wifi,
  "petit-déjeuner": Coffee,
  "salle de bain": Bath,
  lit: Bed,
};

export default function RoomCard({ room, onBook, onViewDetails }: RoomCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const statusInfo = statusConfig[room.status];

  return (
    <Card
      className="overflow-hidden hover-elevate transition-all duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`card-room-${room.id}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="h-full w-full object-cover transition-transform duration-200"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        />
        <div className="absolute top-3 right-3">
          <Badge variant={statusInfo.variant} data-testid={`badge-status-${room.id}`}>
            {statusInfo.label}
          </Badge>
        </div>
        {isHovered && room.status === "available" && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity">
            <Button
              onClick={() => onBook?.(room.id)}
              data-testid={`button-quick-book-${room.id}`}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Réservation Rapide
            </Button>
          </div>
        )}
      </div>

      <CardHeader className="space-y-2 pb-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-lg" data-testid={`text-room-name-${room.id}`}>
            {room.name}
          </h3>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{room.location}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-3 pb-3">
        <div className="flex items-center gap-2 text-sm">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">Jusqu'à:</span>
          <span className="font-medium" data-testid={`text-capacity-${room.id}`}>
            {room.capacity} {room.capacity > 1 ? "personnes" : "personne"}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {room.amenities.slice(0, 4).map((amenity, index) => {
            const Icon = amenityIcons[amenity.toLowerCase()] || Wifi;
            return (
              <Badge key={index} variant="secondary" className="gap-1">
                <Icon className="h-3 w-3" />
                <span className="capitalize">{amenity}</span>
              </Badge>
            );
          })}
        </div>

        {room.pricePerNight && (
          <div className="text-sm">
            <span className="text-muted-foreground">À partir de </span>
            <span className="font-semibold text-lg">{room.pricePerNight}€</span>
            <span className="text-muted-foreground">/nuit</span>
          </div>
        )}
      </CardContent>

      <CardFooter className="gap-2 pt-3">
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => onViewDetails?.(room.id)}
          data-testid={`button-view-details-${room.id}`}
        >
          Voir Détails
        </Button>
        <Button
          className="flex-1"
          disabled={room.status !== "available"}
          onClick={() => onBook?.(room.id)}
          data-testid={`button-book-${room.id}`}
        >
          Réserver
        </Button>
      </CardFooter>
    </Card>
  );
}
