import AuthDialog from "../AuthDialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AuthDialogExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Auth Dialog</Button>
      <AuthDialog
        open={open}
        onOpenChange={setOpen}
        onGoogleLogin={() => console.log("Google login")}
        onGithubLogin={() => console.log("GitHub login")}
        onEmailLogin={(email, password) => console.log("Email login:", email, password)}
      />
    </div>
  );
}
