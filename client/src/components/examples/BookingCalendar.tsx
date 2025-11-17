import BookingCalendar from "../BookingCalendar";

export default function BookingCalendarExample() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 7);

  return (
    <div className="p-8 max-w-md">
      <BookingCalendar
        bookedDates={[tomorrow, nextWeek]}
        onDateSelect={(date) => console.log("Selected date:", date)}
      />
    </div>
  );
}
