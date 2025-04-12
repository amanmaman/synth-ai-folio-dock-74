
import { useState } from "react";
import { motion } from "framer-motion";
import { TabsContent } from "@/components/ui/tabs";
import LoadingIndicator from "./LoadingIndicator";

const Dune2Game = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <TabsContent value="dune2" className="border rounded-lg p-4">
      <div className="aspect-video w-full max-w-3xl mx-auto bg-gray-100 rounded-md overflow-hidden">
        {!loaded && <LoadingIndicator message="Loading Dune 2..." />}
        <iframe 
          src="https://playclassic.games/games/real-time-strategy-dos-games-online/play-dune-2-the-building-of-a-dynasty-online/"
          className="w-full h-[600px]"
          onLoad={() => setLoaded(true)}
          style={{ opacity: loaded ? 1 : 0 }}
          sandbox="allow-scripts allow-same-origin allow-modals"
          allow="autoplay"
        ></iframe>
      </div>
      <p className="text-sm text-gray-500 mt-4 text-center">
        Powered by PlayClassic Games
      </p>
    </TabsContent>
  );
};

export default Dune2Game;
