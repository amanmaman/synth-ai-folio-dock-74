
import { useState, useEffect } from "react";
import { TabsContent } from "@/components/ui/tabs";
import LoadingIndicator from "./LoadingIndicator";
import DOSGameFrame from "./DOSGameFrame";
import { useIsMobile } from "@/hooks/use-mobile";

interface GameFrameProps {
  gameId: string;
  src: string;
  aspectRatio?: "square" | "video";
  poweredBy: string;
  sandbox?: string;
  allow?: string;
  dosBundle?: string;
}

const GameFrame = ({ 
  gameId, 
  src, 
  aspectRatio = "video", 
  poweredBy,
  sandbox = "allow-scripts allow-same-origin", 
  allow = "",
  dosBundle
}: GameFrameProps) => {
  const [loaded, setLoaded] = useState(false);
  const [fullHeight, setFullHeight] = useState(false);
  const isMobile = useIsMobile();
  
  // Set height for DOS games
  useEffect(() => {
    if (poweredBy === "DOS Zone" || dosBundle) {
      setFullHeight(true);
    }
  }, [poweredBy, dosBundle]);

  const isDOSGame = poweredBy === "DOS Zone" && dosBundle;

  return (
    <TabsContent value={gameId} className="border rounded-lg p-4">
      <div 
        className={`${aspectRatio === "square" ? "aspect-square" : "aspect-video"} w-full max-w-3xl mx-auto bg-gray-100 rounded-md overflow-hidden ${fullHeight ? "md:h-[80vh] h-[60vh] max-h-[800px]" : ""}`}
      >
        {isDOSGame && dosBundle ? (
          <DOSGameFrame gameId={gameId} bundleUrl={dosBundle} />
        ) : (
          <>
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
              title={`${gameId} game`}
            ></iframe>
          </>
        )}
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-500">
          Powered by {poweredBy}
        </p>
        {(fullHeight || isDOSGame) && (
          <p className="text-xs text-gray-500">
            For best experience, use keyboard controls and click inside the game to capture input
          </p>
        )}
      </div>
    </TabsContent>
  );
};

export default GameFrame;
