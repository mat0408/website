import RoomCard from "../RoomCard";
import luxuryImage from "@assets/generated_images/Luxury_suite_room_f2c905e5.png";

export default function RoomCardExample() {
  const mockRoom = {
    id: "1",
    name: "Suite Luxe",
    image: luxuryImage,
    capacity: 2,
    status: "available" as const,
    amenities: ["WiFi", "Salle de Bain", "Petit-déjeuner", "Lit"],
    location: "Provence, France",
    pricePerNight: 180,
  };

  return (
    <div className="p-8 max-w-sm">
      <RoomCard
        room={mockRoom}
        onBook={(id) => console.log("Book room:", id)}
        onViewDetails={(id) => console.log("View details:", id)}
      />
    </div>
  );
}
