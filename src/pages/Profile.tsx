import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Shield, Bell, Eye, Trash2, Smartphone } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Profile Header */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">AM</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-2xl font-bold text-foreground mb-1">Evan Durand Arranz Herranz</h1>
                  <p className="text-muted-foreground mb-2">evan.durand-arranz-herranz@epitech.eu</p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <Badge className="bg-primary text-primary-foreground">Rang #462</Badge>
                    <Badge variant="outline">3,420 pts</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Info */}
          <Card>
            <CardHeader>
              <CardTitle>Informations personnelles</CardTitle>
              <CardDescription>Gérez vos informations de profil</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input id="name" defaultValue="" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Pseudo</Label>
                  <Input id="username" defaultValue="" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="" />
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Sauvegarder les modifications
              </Button>
            </CardContent>
          </Card>

          {/* Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Sécurité
              </CardTitle>
              <CardDescription>Protégez votre compte</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="password">Changer le mot de passe</Label>
                <Input id="password" type="password" placeholder="Nouveau mot de passe" />
                <Button variant="outline" className="mt-2 hover:bg-muted">Mettre à jour</Button>
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Authentification à deux facteurs (2FA)</Label>
                  <p className="text-sm text-muted-foreground">Sécurité renforcée pour votre compte</p>
                </div>
                <Switch />
              </div>

              <Separator />


            </CardContent>
          </Card>

          {/* Learning Preferences */}
          <Card>
            <CardHeader>
              <CardTitle>Préférences d'apprentissage</CardTitle>
              <CardDescription>Personnalisez votre expérience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Tranche d'âge</Label>
                  <Select defaultValue="adult">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="child">Enfant (6-12 ans)</SelectItem>
                      <SelectItem value="teen">Adolescent (13-17 ans)</SelectItem>
                      <SelectItem value="adult">Adulte (18+ ans)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Niveau par défaut</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="easy">Facile</SelectItem>
                      <SelectItem value="medium">Moyen</SelectItem>
                      <SelectItem value="hard">Difficile</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Thèmes favoris</Label>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    Histoire
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    Sciences
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    Géographie
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    Culture Pop
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    Sport
                  </Badge>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Activer les réponses pièges</Label>
                  <p className="text-sm text-muted-foreground">Questions avec propositions ambiguës (15-20%)</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="border-destructive">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <Trash2 className="h-5 w-5" />
                Zone dangereuse
              </CardTitle>
              <CardDescription>Actions irréversibles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  La suppression de votre compte est définitive. Toutes vos données seront perdues.
                </p>
                <Button variant="destructive">
                  Supprimer mon compte
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
