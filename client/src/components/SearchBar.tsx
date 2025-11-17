import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface SearchBarProps {
  onSearch?: (query: string, capacity?: number, location?: string) => void;
  onFilterClick?: () => void;
}

export default function SearchBar({ onSearch, onFilterClick }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [capacity, setCapacity] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const handleSearch = () => {
    onSearch?.(query, capacity ? parseInt(capacity) : undefined, location || undefined);
  };

  return (
    <div className="w-full bg-card border rounded-lg p-4 space-y-4">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher une chambre..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="pl-9"
            data-testid="input-search-query"
          />
        </div>

        <Select value={capacity} onValueChange={setCapacity}>
          <SelectTrigger className="w-full md:w-[180px]" data-testid="select-capacity">
            <SelectValue placeholder="Voyageurs" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 personne</SelectItem>
            <SelectItem value="2">2 personnes</SelectItem>
            <SelectItem value="3">3-4 personnes</SelectItem>
            <SelectItem value="5">5+ personnes</SelectItem>
          </SelectContent>
        </Select>

        <Select value={location} onValueChange={setLocation}>
          <SelectTrigger className="w-full md:w-[180px]" data-testid="select-location">
            <SelectValue placeholder="Région" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="provence">Provence</SelectItem>
            <SelectItem value="bretagne">Bretagne</SelectItem>
            <SelectItem value="normandie">Normandie</SelectItem>
            <SelectItem value="alsace">Alsace</SelectItem>
          </SelectContent>
        </Select>

        <Button onClick={handleSearch} data-testid="button-search">
          <Search className="mr-2 h-4 w-4" />
          Rechercher
        </Button>

        <Button
          variant="outline"
          onClick={onFilterClick}
          data-testid="button-filters"
        >
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
