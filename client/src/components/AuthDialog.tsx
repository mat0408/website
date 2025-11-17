import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { SiGoogle, SiGithub } from "react-icons/si";
import { Shield, Lock, Mail } from "lucide-react";
import { useState } from "react";

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onGoogleLogin?: () => void;
  onGithubLogin?: () => void;
  onEmailLogin?: (email: string, password: string) => void;
}

export default function AuthDialog({
  open,
  onOpenChange,
  onGoogleLogin,
  onGithubLogin,
  onEmailLogin,
}: AuthDialogProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = () => {
    onEmailLogin?.(email, password);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">Connexion Sécurisée</DialogTitle>
          <DialogDescription className="text-center">
            Connectez-vous pour gérer vos réservations
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <Button
            variant="outline"
            className="w-full gap-3 h-12"
            onClick={onGoogleLogin}
            data-testid="button-login-google"
          >
            <SiGoogle className="h-5 w-5" />
            <span>Continuer avec Google</span>
          </Button>

          <Button
            variant="outline"
            className="w-full gap-3 h-12"
            onClick={onGithubLogin}
            data-testid="button-login-github"
          >
            <SiGithub className="h-5 w-5" />
            <span>Continuer avec GitHub</span>
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Ou</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="vous@exemple.fr"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-9"
                  data-testid="input-email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-9"
                  data-testid="input-password"
                />
              </div>
            </div>

            <Button
              className="w-full"
              onClick={handleEmailLogin}
              data-testid="button-login-email"
            >
              Se Connecter
            </Button>
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t">
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="gap-1">
              <Shield className="h-3 w-3" />
              <span className="text-xs">Authentification Sécurisée</span>
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <Shield className="h-3 w-3" />
              <span className="text-xs">Cryptage SSL</span>
            </Badge>
          </div>
          <p className="text-xs text-center text-muted-foreground">
            Vos données sont protégées et conformes au RGPD
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
