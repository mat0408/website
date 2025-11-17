import MetricsCard from "../MetricsCard";
import { Calendar } from "lucide-react";

export default function MetricsCardExample() {
  return (
    <div className="p-8 max-w-xs">
      <MetricsCard
        title="Réservations Actives"
        value={12}
        icon={Calendar}
        description="Cette semaine"
        trend={{ value: 15, isPositive: true }}
      />
    </div>
  );
}
