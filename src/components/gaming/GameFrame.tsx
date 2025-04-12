
import { useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import LoadingIndicator from "./LoadingIndicator";

interface GameFrameProps {
  gameId: string;
  src: string;
  aspectRatio?: "square" | "video";
  poweredBy: string;
  sandbox?: string;
  allow?: string;
}

const GameFrame = ({ 
  gameId, 
  src, 
  aspectRatio = "video", 
  poweredBy,
  sandbox = "allow-scripts allow-same-origin", 
  allow = ""
}: GameFrameProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <TabsContent value={gameId} className="border rounded-lg p-4">
      <div className={`${aspectRatio === "square" ? "aspect-square" : "aspect-video"} w-full max-w-3xl mx-auto bg-gray-100 rounded-md overflow-hidden`}>
        {!loaded && (
          <LoadingIndicator message={`Loading ${gameId.charAt(0).toUpperCase() + gameId.slice(1)}...`} />
        )}
        <iframe 
          src={src}
          className="w-full h-full"
          onLoad={() => setLoaded(true)}
          style={{ opacity: loaded ? 1 : 0 }}
          sandbox={sandbox}
          allow={allow}
        ></iframe>
      </div>
      <p className="text-sm text-gray-500 mt-4 text-center">
        Powered by {poweredBy}
      </p>
    </TabsContent>
  );
};

export default GameFrame;
