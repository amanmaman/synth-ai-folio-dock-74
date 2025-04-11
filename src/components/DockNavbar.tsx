
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  User, 
  Briefcase, 
  Code2, 
  FileText, 
  MessageSquare 
} from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User },
  { name: "Projects", path: "/projects", icon: Briefcase },
  { name: "Skills", path: "/skills", icon: Code2 },
  { name: "Blog", path: "/blog", icon: FileText },
  { name: "Contact", path: "/contact", icon: MessageSquare },
];

const DockNavbar = () => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-end justify-center gap-2 px-4 py-3 bg-white/80 backdrop-blur-lg rounded-full shadow-lg border border-gray-200">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const isHovered = hoveredItem === item.name;
          const IconComponent = item.icon;
          
          return (
            <Link
              key={item.name}
              to={item.path}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div
                className={`
                  transition-all duration-300 ease-in-out 
                  ${isActive || isHovered ? "scale-110 -translate-y-2" : "scale-100"}
                `}
              >
                <IconComponent
                  size={isActive || isHovered ? 26 : 22}
                  className={`transition-all duration-300 ${
                    isActive ? "text-black" : "text-gray-500 hover:text-gray-800"
                  }`}
                />
              </div>
              {(isActive || isHovered) && (
                <span className="absolute -top-7 whitespace-nowrap text-xs font-medium bg-black text-white px-2 py-1 rounded opacity-90">
                  {item.name}
                </span>
              )}
              {isActive && (
                <div className="absolute -bottom-2 w-1 h-1 rounded-full bg-black" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DockNavbar;
