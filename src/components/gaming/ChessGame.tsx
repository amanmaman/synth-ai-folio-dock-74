
import { useState } from "react";
import { motion } from "framer-motion";
import { TabsContent } from "@/components/ui/tabs";

const ChessGame = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <TabsContent value="chess" className="border rounded-lg p-4">
      <div className="aspect-square w-full max-w-2xl mx-auto bg-gray-100 rounded-md overflow-hidden">
        {!loaded && (
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
          onLoad={() => setLoaded(true)}
          style={{ opacity: loaded ? 1 : 0 }}
        ></iframe>
      </div>
      <p className="text-sm text-gray-500 mt-4 text-center">
        Powered by ChessBase Web App
      </p>
    </TabsContent>
  );
};

export default ChessGame;
