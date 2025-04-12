
import { useState } from "react";
import { motion } from "framer-motion";
import { TabsContent } from "@/components/ui/tabs";

const DiamondRushGame = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <TabsContent value="diamondRush" className="border rounded-lg p-4">
      <div className="aspect-video w-full max-w-3xl mx-auto bg-gray-100 rounded-md overflow-hidden">
        {!loaded && (
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
          onLoad={() => setLoaded(true)}
          style={{ opacity: loaded ? 1 : 0 }}
          sandbox="allow-scripts allow-same-origin allow-modals"
          allow="autoplay; fullscreen"
        ></iframe>
      </div>
      <p className="text-sm text-gray-500 mt-4 text-center">
        Powered by RetroGames
      </p>
    </TabsContent>
  );
};

export default DiamondRushGame;
