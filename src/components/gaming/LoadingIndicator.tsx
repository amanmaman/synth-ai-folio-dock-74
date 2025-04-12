
import { motion } from "framer-motion";

interface LoadingIndicatorProps {
  message: string;
}

const LoadingIndicator = ({ message }: LoadingIndicatorProps) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <div className="animate-spin h-8 w-8 border-2 border-black border-t-transparent rounded-full mx-auto mb-4"></div>
        <p>{message}</p>
      </motion.div>
    </div>
  );
};

export default LoadingIndicator;
