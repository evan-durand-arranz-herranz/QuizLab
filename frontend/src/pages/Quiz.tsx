import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Users, User, Dices, Globe, Palette, Cpu, History, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

const modes = [
  { id: "solo", name: "Solo", description: "Entraînement personnel", icon: User },
  { id: "multi", name: "Multijoueur", description: "Affronte d'autres joueurs", icon: Users },
];

const themes = [
  { id: "history", name: "Histoire", icon: History },
  { id: "science", name: "Sciences", icon: Lightbulb },
  { id: "geography", name: "Géographie", icon: Globe },
  { id: "art", name: "Art & Culture", icon: Palette },
  { id: "technology", name: "Technologie", icon: Cpu },
  { id: "random", name: "Aléatoire", icon: Dices },
];

const difficulties = [
  { id: "easy", name: "Facile", color: "bg-success text-success-foreground" },
  { id: "medium", name: "Moyen", color: "bg-warning text-warning-foreground" },
  { id: "hard", name: "Difficile", color: "bg-destructive text-destructive-foreground" },
];

const Quiz = () => {
  const [selectedMode, setSelectedMode] = useState<string>("solo");
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("medium");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 flex flex-col items-center px-4 py-12">
        <div className="w-full max-w-4xl space-y-8">
          {/* Title */}
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
              <Gamepad2 className="h-8 w-8 text-primary" />
              Choisis ton mode de quiz
            </h1>
            <p className="text-muted-foreground">
              Teste tes connaissances et grimpe dans le classement
            </p>
          </div>

          {/* Mode Selection */}
          <Card className="animate-fade-in" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <CardTitle>Mode de jeu</CardTitle>
              <CardDescription>Joue seul ou défie d'autres joueurs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {modes.map((mode) => {
                  const Icon = mode.icon;
                  return (
                    <button
                      key={mode.id}
                      onClick={() => setSelectedMode(mode.id)}
                      className={`p-6 rounded-lg border-2 transition-all hover-lift ${
                        selectedMode === mode.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <Icon className={`h-10 w-10 mx-auto mb-3 ${
                        selectedMode === mode.id ? "text-primary" : "text-muted-foreground"
                      }`} />
                      <p className={`font-semibold mb-1 ${
                        selectedMode === mode.id ? "text-primary" : "text-foreground"
                      }`}>
                        {mode.name}
                      </p>
                      <p className="text-sm text-muted-foreground">{mode.description}</p>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Themes */}
          <Card className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <CardTitle>Thème du quiz</CardTitle>
              <CardDescription>Sélectionne un domaine de connaissance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {themes.map((theme) => {
                  const Icon = theme.icon;
                  return (
                    <button
                      key={theme.id}
                      onClick={() => setSelectedTheme(theme.id)}
                      className={`p-4 rounded-lg border-2 transition-all hover-lift ${
                        selectedTheme === theme.id
                          ? "border-secondary bg-secondary/5"
                          : "border-border hover:border-secondary/50"
                      }`}
                    >
                      <Icon className={`h-8 w-8 mx-auto mb-2 ${
                        selectedTheme === theme.id ? "text-secondary" : "text-muted-foreground"
                      }`} />
                      <p className={`text-sm font-medium ${
                        selectedTheme === theme.id ? "text-secondary" : "text-foreground"
                      }`}>
                        {theme.name}
                      </p>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Difficulty */}
          <Card className="animate-fade-in" style={{ animationDelay: "300ms" }}>
            <CardHeader>
              <CardTitle>Niveau de difficulté</CardTitle>
              <CardDescription>Adapte le challenge à ton niveau</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {difficulties.map((diff) => (
                  <Badge
                    key={diff.id}
                    variant={selectedDifficulty === diff.id ? "default" : "outline"}
                    className={`cursor-pointer px-6 py-2 text-base transition-all hover:scale-105 ${
                      selectedDifficulty === diff.id ? diff.color : ""
                    }`}
                    onClick={() => setSelectedDifficulty(diff.id)}
                  >
                    {diff.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Info Alert */}
          <Alert className="animate-fade-in border-accent/50 bg-accent/5" style={{ animationDelay: "400ms" }}>
            <AlertDescription className="text-foreground">
              <strong>Important :</strong> Les questions incluront parfois des pièges. 
              Les scores seront ajoutés à ton classement.
            </AlertDescription>
          </Alert>

          {/* CTA */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: "500ms" }}>
            <Button
              size="lg"
              className="gradient-primary text-white px-12 py-6 text-lg hover-glow"
              disabled={!selectedTheme}
            >
              Lancer le quiz
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Quiz;
