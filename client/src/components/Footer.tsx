import { Home, Shield, Lock, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Footer() {
  return (
    <footer className="border-t bg-card/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Home className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">ChezNous</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Plateforme sécurisée de réservation de chambres d'hôtes
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Navigation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Chambres
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Mes Réservations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Sécurité</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Authentification SSO</span>
              </li>
              <li className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                <span>Cryptage SSL/TLS</span>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Conforme RGPD</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Conformité</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">ISO 27001</Badge>
              <Badge variant="secondary">RGPD</Badge>
              <Badge variant="secondary">SOC 2</Badge>
            </div>
            <p className="text-xs text-muted-foreground pt-4">
              © 2024 ChezNous. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
