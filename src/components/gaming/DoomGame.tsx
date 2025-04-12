
import { useState } from "react";
import { motion } from "framer-motion";
import { TabsContent } from "@/components/ui/tabs";
import LoadingIndicator from "./LoadingIndicator";

const DoomGame = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <TabsContent value="doom" className="border rounded-lg p-4">
      <div className="aspect-video w-full max-w-3xl mx-auto bg-gray-100 rounded-md overflow-hidden">
        {!loaded && <LoadingIndicator message="Loading Doom..." />}
        <iframe 
          src="https://playclassic.games/games/first-person-shooter-dos-games-online/play-doom-online/"
          className="w-full h-[600px]"
          onLoad={() => setLoaded(true)}
          style={{ opacity: loaded ? 1 : 0 }}
          allow="autoplay; gamepad"
          sandbox="allow-scripts allow-same-origin allow-modals"
        ></iframe>
      </div>
      <p className="text-sm text-gray-500 mt-4 text-center">
        Powered by PlayClassic Games
      </p>
    </TabsContent>
  );
};

export default DoomGame;
