import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  roomName?: string;
  onConfirm?: (booking: BookingData) => void;
}

export interface BookingData {
  checkIn: string;
  checkOut: string;
  guests: number;
  specialRequests: string;
}

export default function BookingDialog({
  open,
  onOpenChange,
  roomName = "Chambre Confort",
  onConfirm,
}: BookingDialogProps) {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState<BookingData>({
    checkIn: "",
    checkOut: "",
    guests: 1,
    specialRequests: "",
  });

  const handleConfirm = () => {
    onConfirm?.(booking);
    setStep(1);
    setBooking({
      checkIn: "",
      checkOut: "",
      guests: 1,
      specialRequests: "",
    });
    onOpenChange(false);
  };

  const canProceed = () => {
    if (step === 1) return booking.checkIn && booking.checkOut;
    if (step === 2) return booking.guests > 0;
    return true;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl">Réserver {roomName}</DialogTitle>
          <DialogDescription>
            Complétez les détails de votre réservation
          </DialogDescription>
          <div className="flex gap-2 pt-2">
            {[1, 2, 3].map((s) => (
              <Badge
                key={s}
                variant={step >= s ? "default" : "secondary"}
                className="flex-1 justify-center"
              >
                {s === 1 && "Dates"}
                {s === 2 && "Voyageurs"}
                {s === 3 && "Confirmation"}
              </Badge>
            ))}
          </div>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {step === 1 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="check-in">Date d'arrivée</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="check-in"
                    type="date"
                    value={booking.checkIn}
                    onChange={(e) => setBooking({ ...booking, checkIn: e.target.value })}
                    className="pl-9"
                    data-testid="input-check-in"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="check-out">Date de départ</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="check-out"
                    type="date"
                    value={booking.checkOut}
                    onChange={(e) => setBooking({ ...booking, checkOut: e.target.value })}
                    className="pl-9"
                    data-testid="input-check-out"
                  />
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="guests">Nombre de voyageurs</Label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    value={booking.guests}
                    onChange={(e) => setBooking({ ...booking, guests: parseInt(e.target.value) })}
                    className="pl-9"
                    data-testid="input-guests"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="special-requests">Demandes spéciales (optionnel)</Label>
                <Textarea
                  id="special-requests"
                  placeholder="Indiquez toute demande particulière..."
                  value={booking.specialRequests}
                  onChange={(e) => setBooking({ ...booking, specialRequests: e.target.value })}
                  data-testid="input-special-requests"
                />
              </div>
            </>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="rounded-lg border p-4 space-y-3">
                <h4 className="font-semibold">Récapitulatif</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Chambre:</span>
                    <span className="font-medium">{roomName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Arrivée:</span>
                    <span className="font-medium">{booking.checkIn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Départ:</span>
                    <span className="font-medium">{booking.checkOut}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Voyageurs:</span>
                    <span className="font-medium">{booking.guests} {booking.guests > 1 ? "personnes" : "personne"}</span>
                  </div>
                  {booking.specialRequests && (
                    <div className="flex flex-col gap-1">
                      <span className="text-muted-foreground">Demandes spéciales:</span>
                      <span className="font-medium">{booking.specialRequests}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          {step > 1 && (
            <Button
              variant="outline"
              onClick={() => setStep(step - 1)}
              data-testid="button-back"
            >
              Retour
            </Button>
          )}
          {step < 3 ? (
            <Button
              onClick={() => setStep(step + 1)}
              disabled={!canProceed()}
              data-testid="button-next"
            >
              Suivant
            </Button>
          ) : (
            <Button
              onClick={handleConfirm}
              data-testid="button-confirm-booking"
            >
              Confirmer la Réservation
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
