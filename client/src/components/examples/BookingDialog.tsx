import BookingDialog from "../BookingDialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function BookingDialogExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Booking Dialog</Button>
      <BookingDialog
        open={open}
        onOpenChange={setOpen}
        roomName="Salle Conférence A"
        onConfirm={(booking) => console.log("Booking confirmed:", booking)}
      />
    </div>
  );
}
