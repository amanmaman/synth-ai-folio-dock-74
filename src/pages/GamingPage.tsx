import { useState } from "react";
import { motion } from "framer-motion";
import { Gamepad, Sword } from "lucide-react";
import { GiChessKnight } from "react-icons/gi";
import { RiGhostLine, RiSwordLine } from "react-icons/ri";
import { GiPunchBlast } from "react-icons/gi";
import { IoGameControllerOutline } from "react-icons/io5";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GamingPage = () => {
  const [chessLoaded, setChessLoaded] = useState(false);
  const [doomLoaded, setDoomLoaded] = useState(false);
  const [pacmanLoaded, setPacmanLoaded] = useState(false);
  const [dune2Loaded, setDune2Loaded] = useState(false);
  const [contraLoaded, setContraLoaded] = useState(false);
  const [mortalKombatLoaded, setMortalKombatLoaded] = useState(false);
  const [diamondRushLoaded, setDiamondRushLoaded] = useState(false);

  return (
    <div className="max-w-6xl mx-auto py-12">
      <h1 className="text-4xl font-thin mb-8 border-b pb-4">Gaming Corner</h1>
      
      <p className="text-gray-600 mb-8">
        When I'm not working on AI models, you'll find me enjoying some games.
        Try out these classics directly in your browser!
      </p>
      
      <Tabs defaultValue="chess" className="w-full">
        <TabsList className="mb-8 flex flex-wrap">
          <TabsTrigger value="chess" className="flex items-center gap-2">
            <GiChessKnight size={18} />
            <span>Chess</span>
          </TabsTrigger>
          <TabsTrigger value="doom" className="flex items-center gap-2">
            <Gamepad size={18} />
            <span>Doom</span>
          </TabsTrigger>
          <TabsTrigger value="pacman" className="flex items-center gap-2">
            <RiGhostLine size={18} />
            <span>Pacman</span>
          </TabsTrigger>
          <TabsTrigger value="dune2" className="flex items-center gap-2">
            <RiSwordLine size={18} />
            <span>Dune 2</span>
          </TabsTrigger>
          <TabsTrigger value="contra" className="flex items-center gap-2">
            <Sword size={18} />
            <span>Contra</span>
          </TabsTrigger>
          <TabsTrigger value="mortalKombat" className="flex items-center gap-2">
            <GiPunchBlast size={18} />
            <span>Mortal Kombat</span>
          </TabsTrigger>
          <TabsTrigger value="diamondRush" className="flex items-center gap-2">
            <IoGameControllerOutline size={18} />
            <span>Diamond Rush</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="chess" className="border rounded-lg p-4">
          <div className="aspect-square w-full max-w-2xl mx-auto bg-gray-100 rounded-md overflow-hidden">
            {!chessLoaded && (
              <div className="w-full h-full flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <div className="animate-spin h-8 w-8 border-2 border-black border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p>Loading Chess...</p>
                </motion.div>
              </div>
            )}
            <iframe 
              src="https://fritz.chessbase.com"
              className="w-full h-full"
              onLoad={() => setChessLoaded(true)}
              style={{ opacity: chessLoaded ? 1 : 0 }}
            ></iframe>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Powered by ChessBase Web App
          </p>
        </TabsContent>
        
        <TabsContent value="doom" className="border rounded-lg p-4">
          <div className="aspect-video w-full max-w-3xl mx-auto bg-gray-100 rounded-md overflow-hidden">
            {!doomLoaded && (
              <div className="w-full h-full flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <div className="animate-spin h-8 w-8 border-2 border-black border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p>Loading Doom...</p>
                </motion.div>
              </div>
            )}
            <iframe 
              src="https://dos.zone/player/?bundleUrl=https://cdn.dos.zone/original/2X/2/2cb4f0edbb236c2a261a7e00b95d38fc0210e6ca.jsdos"
              className="w-full h-[600px]"
              onLoad={() => setDoomLoaded(true)}
              style={{ opacity: doomLoaded ? 1 : 0 }}
              allow="autoplay; gamepad"
              sandbox="allow-scripts allow-same-origin allow-modals"
            ></iframe>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Powered by DOS Zone
          </p>
        </TabsContent>
        
        <TabsContent value="pacman" className="border rounded-lg p-4">
          <div className="aspect-video w-full max-w-3xl mx-auto bg-gray-100 rounded-md overflow-hidden">
            {!pacmanLoaded && (
              <div className="w-full h-full flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <div className="animate-spin h-8 w-8 border-2 border-black border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p>Loading Pacman...</p>
                </motion.div>
              </div>
            )}
            <iframe 
              src="https://www.google.com/logos/2010/pacman10-i.html"
              className="w-full h-[600px]"
              onLoad={() => setPacmanLoaded(true)}
              style={{ opacity: pacmanLoaded ? 1 : 0 }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Powered by Google Doodle
          </p>
        </TabsContent>
        
        <TabsContent value="dune2" className="border rounded-lg p-4">
          <div className="aspect-video w-full max-w-3xl mx-auto bg-gray-100 rounded-md overflow-hidden">
            {!dune2Loaded && (
              <div className="w-full h-full flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <div className="animate-spin h-8 w-8 border-2 border-black border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p>Loading Dune 2...</p>
                </motion.div>
              </div>
            )}
            <iframe 
              src="https://dos.zone/player/?bundleUrl=https://cdn.dos.zone/custom/dos/dune2-v111.jsdos&file=DUNE2.EXE"
              className="w-full h-[600px]"
              onLoad={() => setDune2Loaded(true)}
              style={{ opacity: dune2Loaded ? 1 : 0 }}
              sandbox="allow-scripts allow-same-origin allow-modals"
              allow="autoplay"
            ></iframe>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Powered by DOS Zone
          </p>
        </TabsContent>
        
        <TabsContent value="contra" className="border rounded-lg p-4">
          <div className="aspect-video w-full max-w-3xl mx-auto bg-gray-100 rounded-md overflow-hidden">
            {!contraLoaded && (
              <div className="w-full h-full flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <div className="animate-spin h-8 w-8 border-2 border-black border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p>Loading Contra...</p>
                </motion.div>
              </div>
            )}
            <iframe 
              src="https://www.retrogames.cc/embed/16841-contra-usa.html"
              className="w-full h-[600px]"
              onLoad={() => setContraLoaded(true)}
              style={{ opacity: contraLoaded ? 1 : 0 }}
              sandbox="allow-scripts allow-same-origin allow-modals"
              allow="autoplay; fullscreen"
            ></iframe>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Powered by RetroGames
          </p>
        </TabsContent>
        
        <TabsContent value="mortalKombat" className="border rounded-lg p-4">
          <div className="aspect-video w-full max-w-3xl mx-auto bg-gray-100 rounded-md overflow-hidden">
            {!mortalKombatLoaded && (
              <div className="w-full h-full flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <div className="animate-spin h-8 w-8 border-2 border-black border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p>Loading Mortal Kombat...</p>
                </motion.div>
              </div>
            )}
            <iframe 
              src="https://www.retrogames.cc/embed/16420-mortal-kombat-usa-rev-1-0.html"
              className="w-full h-[600px]"
              onLoad={() => setMortalKombatLoaded(true)}
              style={{ opacity: mortalKombatLoaded ? 1 : 0 }}
              sandbox="allow-scripts allow-same-origin allow-modals"
              allow="autoplay; fullscreen"
            ></iframe>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Powered by RetroGames
          </p>
        </TabsContent>
        
        <TabsContent value="diamondRush" className="border rounded-lg p-4">
          <div className="aspect-video w-full max-w-3xl mx-auto bg-gray-100 rounded-md overflow-hidden">
            {!diamondRushLoaded && (
              <div className="w-full h-full flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <div className="animate-spin h-8 w-8 border-2 border-black border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p>Loading Diamond Rush...</p>
                </motion.div>
              </div>
            )}
            <iframe 
              src="https://www.retrogames.cc/embed/48292-gameloft-diamond-rush-128x160.html"
              className="w-full h-[600px]"
              onLoad={() => setDiamondRushLoaded(true)}
              style={{ opacity: diamondRushLoaded ? 1 : 0 }}
              sandbox="allow-scripts allow-same-origin allow-modals"
              allow="autoplay; fullscreen"
            ></iframe>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Powered by RetroGames
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GamingPage;
