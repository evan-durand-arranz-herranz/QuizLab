import { Header } from "@/components/Header";
import { ModeCard } from "@/components/ModeCard";
import { DailyChallengeCard } from "@/components/DailyChallengeCard";
import { Podium } from "@/components/Podium";
import { Footer } from "@/components/Footer";
import { BookOpen, Gamepad2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 flex flex-col items-center px-4 py-12">
        <div className="w-full max-w-6xl space-y-12">
          {/* Hero Section */}
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Découvrez QuizLab 🎓
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Apprenez en vous amusant avec des quiz adaptés à tous les âges
            </p>
          </div>

          {/* Mode Cards */}
          <div className="grid md:grid-cols-2 gap-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <ModeCard
              title="Learn"
              description="Découvre, comprends et retiens grâce à notre IA adaptative."
              icon={BookOpen}
              gradient="gradient-primary"
              onClick={() => navigate('/learn')}
            />
            <ModeCard
              title="Quiz"
              description="Teste tes connaissances, progresse et grimpe dans le classement."
              icon={Gamepad2}
              gradient="gradient-secondary"
              onClick={() => navigate('/quiz')}
            />
          </div>

          {/* Daily Challenge */}
          <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
            <DailyChallengeCard
              theme="Capitales d'Europe"
              difficulty="moyen"
              timeLeft={0}
              streak={4}
              xpReward={150}
              state="idle"
              trapsEnabled={true}
              onStart={() => console.log("Start challenge")}
              onViewHistory={() => console.log("View history")}
            />
          </div>

          {/* Podium */}
          <div className="animate-fade-in" style={{ animationDelay: "600ms" }}>
            <Podium />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
