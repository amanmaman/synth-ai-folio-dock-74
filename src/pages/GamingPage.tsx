
import { useState } from "react";
import { motion } from "framer-motion";
import { Gamepad } from "lucide-react";
import { GiChessKnight } from "react-icons/gi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GamingPage = () => {
  const [chessLoaded, setChessLoaded] = useState(false);
  const [doomLoaded, setDoomLoaded] = useState(false);

  return (
    <div className="max-w-6xl mx-auto py-12">
      <h1 className="text-4xl font-thin mb-8 border-b pb-4">Gaming Corner</h1>
      
      <p className="text-gray-600 mb-8">
        When I'm not working on AI models, you'll find me enjoying some games.
        Try out these classics directly in your browser!
      </p>
      
      <Tabs defaultValue="chess" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="chess" className="flex items-center gap-2">
            <GiChessKnight size={18} />
            <span>Chess</span>
          </TabsTrigger>
          <TabsTrigger value="doom" className="flex items-center gap-2">
            <Gamepad size={18} />
            <span>Doom</span>
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
          <div className="aspect-video w-full max-w-2xl mx-auto bg-gray-100 rounded-md overflow-hidden">
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
              src="https://js-dos.com/games/doom.exe.html"
              className="w-full h-full"
              onLoad={() => setDoomLoaded(true)}
              style={{ opacity: doomLoaded ? 1 : 0 }}
            ></iframe>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Powered by js-dos
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GamingPage;
