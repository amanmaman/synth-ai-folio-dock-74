
import { useEffect, useRef, useState } from "react";
import { Dos } from "js-dos";
import LoadingIndicator from "./LoadingIndicator";

interface DOSGameFrameProps {
  gameId: string;
  bundleUrl: string;
}

const DOSGameFrame = ({ gameId, bundleUrl }: DOSGameFrameProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const dos = Dos(canvasRef.current);
    
    setLoading(true);
    dos
      .run(bundleUrl)
      .then(ci => {
        setLoading(false);
        // Optional: Store ci reference for command interface if needed
      })
      .catch(error => {
        console.error("DOSBox error:", error);
        setLoading(false);
        setError("Failed to load the game. Please try again.");
      });

    return () => {
      // Cleanup DOS instance when component unmounts
      if (dos) {
        try {
          dos.exit();
        } catch (e) {
          console.log("Error during DOS cleanup:", e);
        }
      }
    };
  }, [bundleUrl]);

  return (
    <div className="relative w-full h-full">
      {loading && <LoadingIndicator message={`Loading ${gameId.charAt(0).toUpperCase() + gameId.slice(1)}...`} />}
      {error && <div className="text-red-500 p-4 text-center">{error}</div>}
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        tabIndex={1} // Make canvas focusable
      />
      <div className="text-xs text-gray-500 mt-2">
        Click inside the game window to capture keyboard input
      </div>
    </div>
  );
};

export default DOSGameFrame;
