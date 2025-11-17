import { Home, Search, User, Shield, LogOut, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { SiGoogle, SiGithub } from "react-icons/si";

interface HeaderProps {
  user?: {
    name: string;
    email: string;
    avatar?: string;
    authProvider: "google" | "github" | "email";
  };
  onAuthClick?: () => void;
  onLogout?: () => void;
  onNavigate?: (section: string) => void;
}

export default function Header({ user, onAuthClick, onLogout, onNavigate }: HeaderProps) {
  const getAuthIcon = () => {
    if (!user) return null;
    switch (user.authProvider) {
      case "google":
        return <SiGoogle className="h-3 w-3" />;
      case "github":
        return <SiGithub className="h-3 w-3" />;
      default:
        return <Shield className="h-3 w-3" />;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <button
            onClick={() => onNavigate?.("home")}
            className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-2 py-1"
            data-testid="link-home"
          >
            <Home className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">ChezNous</span>
          </button>
          
          <nav className="hidden md:flex items-center gap-1">
            <Button
              variant="ghost"
              onClick={() => onNavigate?.("rooms")}
              data-testid="link-rooms"
            >
              Chambres
            </Button>
            <Button
              variant="ghost"
              onClick={() => onNavigate?.("bookings")}
              data-testid="link-bookings"
            >
              Mes Réservations
            </Button>
            <Button
              variant="ghost"
              onClick={() => onNavigate?.("calendar")}
              data-testid="link-calendar"
            >
              Calendrier
            </Button>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <Badge variant="secondary" className="gap-1" data-testid="badge-security">
              <Shield className="h-3 w-3" />
              <span className="text-xs">Connexion Sécurisée</span>
            </Badge>
          </div>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative gap-2"
                  data-testid="button-user-menu"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <span className="hidden md:inline">{user.name}</span>
                  {getAuthIcon() && (
                    <Badge variant="outline" className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center">
                      {getAuthIcon()}
                    </Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col gap-1">
                    <span>{user.name}</span>
                    <span className="text-xs text-muted-foreground font-normal">{user.email}</span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => onNavigate?.("profile")} data-testid="menu-profile">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profil</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onNavigate?.("bookings")} data-testid="menu-bookings">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Mes Réservations</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onLogout} data-testid="menu-logout">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Déconnexion</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button onClick={onAuthClick} data-testid="button-login">
              Se Connecter
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
