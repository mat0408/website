import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fr } from "date-fns/locale";
import { useState } from "react";

interface BookingCalendarProps {
  bookedDates?: Date[];
  onDateSelect?: (date: Date | undefined) => void;
}

export default function BookingCalendar({ bookedDates = [], onDateSelect }: BookingCalendarProps) {
  const [selected, setSelected] = useState<Date | undefined>(undefined);

  const handleSelect = (date: Date | undefined) => {
    setSelected(date);
    onDateSelect?.(date);
  };

  const isBooked = (date: Date) => {
    return bookedDates.some(
      (bookedDate) =>
        bookedDate.getDate() === date.getDate() &&
        bookedDate.getMonth() === date.getMonth() &&
        bookedDate.getFullYear() === date.getFullYear()
    );
  };

  return (
    <Card>
      <CardHeader className="space-y-2">
        <CardTitle>Disponibilité</CardTitle>
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-primary" />
            <span className="text-muted-foreground">Sélectionné</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-destructive" />
            <span className="text-muted-foreground">Réservé</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={selected}
          onSelect={handleSelect}
          locale={fr}
          disabled={(date) => date < new Date() || isBooked(date)}
          className="rounded-md"
          data-testid="calendar-booking"
        />
      </CardContent>
    </Card>
  );
}
