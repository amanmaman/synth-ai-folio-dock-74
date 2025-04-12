
import { useState } from "react";
import { motion } from "framer-motion";
import { Gamepad } from "lucide-react";
import { GiChessKnight } from "react-icons/gi";
import { RiGhostLine, RiSwordLine, RiLayoutGridLine } from "react-icons/ri";
import { FaBomb } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GamingPage = () => {
  const [chessLoaded, setChessLoaded] = useState(false);
  const [doomLoaded, setDoomLoaded] = useState(false);
  const [pacmanLoaded, setPacmanLoaded] = useState(false);
  const [minesweeperLoaded, setMinesweeperLoaded] = useState(false);
  const [dune2Loaded, setDune2Loaded] = useState(false);
  const [tetrisLoaded, setTetrisLoaded] = useState(false);

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
          <TabsTrigger value="minebomb" className="flex items-center gap-2">
            <FaBomb size={18} />
            <span>Minesweeper</span>
          </TabsTrigger>
          <TabsTrigger value="dune2" className="flex items-center gap-2">
            <RiSwordLine size={18} />
            <span>Dune 2</span>
          </TabsTrigger>
          <TabsTrigger value="tetris" className="flex items-center gap-2">
            <RiLayoutGridLine size={18} />
            <span>Tetris</span>
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
              src="https://dos.zone/player/?bundleUrl=https%3A%2F%2Fcdn.dos.zone%2Fcustom%2Fdos%2Fdoom.jsdos?anonymous=1"
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
        
        <TabsContent value="minebomb" className="border rounded-lg p-4">
          <div className="aspect-video w-full max-w-3xl mx-auto bg-gray-100 rounded-md overflow-hidden">
            {!minesweeperLoaded && (
              <div className="w-full h-full flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <div className="animate-spin h-8 w-8 border-2 border-black border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p>Loading Minesweeper...</p>
                </motion.div>
              </div>
            )}
            <iframe 
              src="https://www.free-minesweeper.com/minesweeper-classic/game/"
              className="w-full h-[600px]"
              onLoad={() => setMinesweeperLoaded(true)}
              style={{ opacity: minesweeperLoaded ? 1 : 0 }}
              sandbox="allow-scripts allow-same-origin"
              title="Minesweeper"
            ></iframe>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Powered by Free Minesweeper
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
              src="https://dos.zone/player/?bundleUrl=https%3A%2F%2Fcdn.dos.zone%2Fcustom%2Fdos%2Fdune2.jsdos?anonymous=1"
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
        
        <TabsContent value="tetris" className="border rounded-lg p-4">
          <div className="aspect-video w-full max-w-3xl mx-auto bg-gray-100 rounded-md overflow-hidden">
            {!tetrisLoaded && (
              <div className="w-full h-full flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <div className="animate-spin h-8 w-8 border-2 border-black border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p>Loading Tetris...</p>
                </motion.div>
              </div>
            )}
            <iframe 
              src="https://tetris.com/games-content/play-tetris-content/resources/project-tetriscom/"
              className="w-full h-[600px]"
              onLoad={() => setTetrisLoaded(true)}
              style={{ opacity: tetrisLoaded ? 1 : 0 }}
              sandbox="allow-scripts allow-same-origin"
              title="Tetris"
            ></iframe>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Powered by Tetris.com
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GamingPage;
