import { Button } from "@/components/ui/button";
import { Search, Calendar, Shield } from "lucide-react";
import heroImage from "@assets/generated_images/Cozy_B&B_bedroom_hero_492c8599.png";

interface HeroProps {
  onSearchClick?: () => void;
  onBookNowClick?: () => void;
}

export default function Hero({ onSearchClick, onBookNowClick }: HeroProps) {
  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Chambre d'hôtes confortable"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
      
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 max-w-4xl">
          Réservez Votre Chambre d'Hôtes Idéale
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
          Découvrez des hébergements de charme avec notre plateforme sécurisée
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button
            size="lg"
            variant="outline"
            onClick={onSearchClick}
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            data-testid="button-search-rooms"
          >
            <Search className="mr-2 h-5 w-5" />
            Rechercher une Chambre
          </Button>
          <Button
            size="lg"
            onClick={onBookNowClick}
            className="bg-primary text-primary-foreground"
            data-testid="button-book-now"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Réserver Maintenant
          </Button>
        </div>

        <div className="flex flex-wrap gap-6 justify-center text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>Authentification Sécurisée</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>Cryptage SSL</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>Conforme RGPD</span>
          </div>
        </div>
      </div>
    </div>
  );
}
