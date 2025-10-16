import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Crown } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Leaderboard = () => {
  const topPlayers = [
    { rank: 1, name: "Alex M.", username: "alexm_quiz", score: 9820, trend: "+120" },
    { rank: 2, name: "Marie L.", username: "marie_l", score: 8450, trend: "+85" },
    { rank: 3, name: "Thomas K.", username: "thomas_k", score: 7920, trend: "+92" },
    { rank: 4, name: "Sophie D.", username: "sophie_d", score: 7650, trend: "+78" },
    { rank: 5, name: "Lucas M.", username: "lucas_m", score: 7340, trend: "+95" },
    { rank: 6, name: "Emma W.", username: "emma_w", score: 7210, trend: "+63" },
    { rank: 7, name: "Pierre B.", username: "pierre_b", score: 6980, trend: "+71" },
    { rank: 8, name: "Julie P.", username: "julie_p", score: 6750, trend: "+88" },
    { rank: 9, name: "Marc L.", username: "marc_l", score: 6520, trend: "+54" },
    { rank: 10, name: "Claire D.", username: "claire_d", score: 6310, trend: "+67" },
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="h-5 w-5 text-primary" />;
    if (rank === 2) return <Trophy className="h-5 w-5 text-secondary" />;
    if (rank === 3) return <Medal className="h-5 w-5 text-accent" />;
    return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
  };

  const getRankBadgeColor = (rank: number) => {
    if (rank === 1) return "bg-primary text-primary-foreground";
    if (rank === 2) return "bg-secondary text-secondary-foreground";
    if (rank === 3) return "bg-accent text-accent-foreground";
    return "bg-muted text-muted-foreground";
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground flex items-center justify-center gap-2">
              <Trophy className="h-8 w-8 text-primary" />
              Classement mondial
            </h1>
            <p className="text-muted-foreground">Les meilleurs joueurs de QuizLab</p>
          </div>

          <Tabs defaultValue="global" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="global">Mondial</TabsTrigger>
              <TabsTrigger value="daily">Quotidien</TabsTrigger>
              <TabsTrigger value="weekly">Hebdo</TabsTrigger>
            </TabsList>

            <TabsContent value="global" className="space-y-3">
              {/* Top 3 Podium Cards */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {topPlayers.slice(0, 3).map((player) => (
                  <Card 
                    key={player.rank} 
                    className={`p-6 text-center ${
                      player.rank === 1 ? 'gradient-primary text-white' : 
                      player.rank === 2 ? 'gradient-secondary text-white' : 
                      'gradient-accent text-white'
                    }`}
                  >
                    <div className="flex justify-center mb-3">
                      {getRankIcon(player.rank)}
                    </div>
                    <Avatar className="h-16 w-16 mx-auto mb-3 border-2 border-white">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-white text-primary text-lg font-bold">
                        {player.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold text-lg mb-1">{player.name}</h3>
                    <p className="text-sm opacity-90 mb-2">@{player.username}</p>
                    <div className="text-2xl font-bold">{player.score} pts</div>
                    <div className="text-xs opacity-80 mt-1">{player.trend} cette semaine</div>
                  </Card>
                ))}
              </div>

              {/* Rest of the rankings */}
              {topPlayers.slice(3).map((player) => (
                <Card key={player.rank} className="p-4 hover:shadow-medium transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getRankBadgeColor(player.rank)}`}>
                      {getRankIcon(player.rank)}
                    </div>
                    
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {player.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{player.name}</h3>
                      <p className="text-sm text-muted-foreground">@{player.username}</p>
                    </div>

                    <div className="text-right">
                      <div className="text-xl font-bold text-foreground">{player.score} pts</div>
                      <Badge variant="outline" className="text-xs mt-1 border-success text-success">
                        {player.trend}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}

              {/* Current User Rank */}
              <Card className="p-4 border-2 border-primary">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary text-primary-foreground">
                    <span className="text-lg font-bold">#462</span>
                  </div>
                  
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      TU
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">Toi</h3>
                    <p className="text-sm text-muted-foreground">Continue comme ça !</p>
                  </div>

                  <div className="text-right">
                    <div className="text-xl font-bold text-foreground">3,420 pts</div>
                    <Badge variant="outline" className="text-xs mt-1 border-success text-success">
                      +45
                    </Badge>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="daily" className="space-y-3">
              <Card className="p-8 text-center">
                <p className="text-muted-foreground">Classement quotidien en cours de calcul...</p>
              </Card>
            </TabsContent>

            <TabsContent value="weekly" className="space-y-3">
              <Card className="p-8 text-center">
                <p className="text-muted-foreground">Classement hebdomadaire disponible bientôt</p>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Leaderboard;

