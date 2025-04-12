
import { TabsTrigger } from "@/components/ui/tabs";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

interface GameTabItemProps {
  value: string;
  icon: LucideIcon | IconType;
  label: string;
}

const GameTabItem = ({ value, icon: Icon, label }: GameTabItemProps) => {
  return (
    <TabsTrigger value={value} className="flex items-center gap-2">
      <Icon size={18} />
      <span>{label}</span>
    </TabsTrigger>
  );
};

export default GameTabItem;
