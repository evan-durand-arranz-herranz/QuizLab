import { Users, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full px-4 py-6 md:px-8 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-muted transition-colors"
          aria-label="Amis"
          onClick={() => navigate('/friends')}
        >
          <Users className="h-6 w-6 text-primary" />
        </Button>

        <h1 
          className="text-2xl md:text-3xl font-bold text-primary cursor-pointer"
          onClick={() => navigate('/')}
        >
          QuizLab
        </h1>

        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-muted transition-colors"
          aria-label="Profil"
          onClick={() => navigate('/profile')}
        >
          <User className="h-6 w-6 text-primary" />
        </Button>
      </div>
    </header>
  );
};
