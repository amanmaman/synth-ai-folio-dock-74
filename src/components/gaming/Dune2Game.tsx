
import { useState } from "react";
import { motion } from "framer-motion";
import { TabsContent } from "@/components/ui/tabs";

const Dune2Game = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <TabsContent value="dune2" className="border rounded-lg p-4">
      <div className="aspect-video w-full max-w-3xl mx-auto bg-gray-100 rounded-md overflow-hidden">
        {!loaded && (
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
          onLoad={() => setLoaded(true)}
          style={{ opacity: loaded ? 1 : 0 }}
          sandbox="allow-scripts allow-same-origin allow-modals"
          allow="autoplay"
        ></iframe>
      </div>
      <p className="text-sm text-gray-500 mt-4 text-center">
        Powered by DOS Zone
      </p>
    </TabsContent>
  );
};

export default Dune2Game;
