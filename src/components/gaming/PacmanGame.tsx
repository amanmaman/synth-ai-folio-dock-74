
import { useState } from "react";
import { motion } from "framer-motion";
import { TabsContent } from "@/components/ui/tabs";
import LoadingIndicator from "./LoadingIndicator";

const PacmanGame = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <TabsContent value="pacman" className="border rounded-lg p-4">
      <div className="aspect-video w-full max-w-3xl mx-auto bg-gray-100 rounded-md overflow-hidden">
        {!loaded && <LoadingIndicator message="Loading Pacman..." />}
        <iframe 
          src="https://playcanv.as/p/nL6fCDql/"
          className="w-full h-[600px]"
          onLoad={() => setLoaded(true)}
          style={{ opacity: loaded ? 1 : 0 }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <p className="text-sm text-gray-500 mt-4 text-center">
        Powered by PlayCanvas
      </p>
    </TabsContent>
  );
};

export default PacmanGame;
