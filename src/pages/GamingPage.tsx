import { Gamepad, Sword } from "lucide-react";
import { GiChessKnight } from "react-icons/gi";
import { RiGhostLine, RiSwordLine } from "react-icons/ri";
import { GiPunchBlast } from "react-icons/gi";
import { IoGameControllerOutline } from "react-icons/io5";
import { Tabs, TabsList } from "@/components/ui/tabs";

import GameTabItem from "../components/gaming/GameTabItem";
import GameFrame from "../components/gaming/GameFrame";

const GamingPage = () => {
  const gameItems = [
    { value: "chess", icon: GiChessKnight, label: "Chess" },
    { value: "doom", icon: Gamepad, label: "Doom" },
    { value: "pacman", icon: RiGhostLine, label: "Pacman" },
    { value: "dune2", icon: RiSwordLine, label: "Dune 2" },
    { value: "contra", icon: Sword, label: "Contra" },
    { value: "mortalKombat", icon: GiPunchBlast, label: "Mortal Kombat" },
    { value: "diamondRush", icon: IoGameControllerOutline, label: "Diamond Rush" },
  ];

  const games = [
    {
      id: "chess",
      src: "https://fritz.chessbase.com",
      aspectRatio: "square",
      poweredBy: "ChessBase Web App"
    },
    {
      id: "doom",
      src: "https://dos.zone/doom-dec-1993/",
      poweredBy: "DOS Zone",
      sandbox: "allow-scripts allow-same-origin allow-modals",
      allow: "autoplay; gamepad"
    },
    {
      id: "pacman",
      src: "https://playcanv.as/p/nL6fCDql/",
      poweredBy: "PlayCanvas",
      sandbox: "allow-scripts allow-same-origin"
    },
    {
      id: "dune2",
      src: "https://dos.zone/dune-2-dos-1992/",
      poweredBy: "DOS Zone",
      sandbox: "allow-scripts allow-same-origin allow-modals",
      allow: "autoplay"
    },
    {
      id: "contra",
      src: "https://www.retrogames.cc/embed/16841-contra-usa.html",
      poweredBy: "RetroGames",
      sandbox: "allow-scripts allow-same-origin allow-modals",
      allow: "autoplay; fullscreen"
    },
    {
      id: "mortalKombat",
      src: "https://www.retrogames.cc/embed/16420-mortal-kombat-usa-rev-1-0.html",
      poweredBy: "RetroGames",
      sandbox: "allow-scripts allow-same-origin allow-modals",
      allow: "autoplay; fullscreen"
    },
    {
      id: "diamondRush",
      src: "https://www.retrogames.cc/embed/48292-gameloft-diamond-rush-128x160.html",
      poweredBy: "RetroGames",
      sandbox: "allow-scripts allow-same-origin allow-modals",
      allow: "autoplay; fullscreen"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12">
      <h1 className="text-4xl font-thin mb-8 border-b pb-4">Gaming Corner</h1>
      
      <p className="text-gray-600 mb-8">
        When I'm not working on AI models, you'll find me enjoying some games.
        Try out these classics directly in your browser!
      </p>
      
      <Tabs defaultValue="chess" className="w-full">
        <TabsList className="mb-8 flex flex-wrap">
          {gameItems.map((game) => (
            <GameTabItem 
              key={game.value} 
              value={game.value} 
              icon={game.icon} 
              label={game.label}
            />
          ))}
        </TabsList>
        
        {games.map((game) => (
          <GameFrame
            key={game.id}
            gameId={game.id}
            src={game.src}
            aspectRatio={game.aspectRatio as "square" | "video"}
            poweredBy={game.poweredBy}
            sandbox={game.sandbox}
            allow={game.allow}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default GamingPage;
