import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

interface HeadingProps {
  title: string;
  icon: LucideIcon;
  description: string;
  iconColor?: string;
  bgColor?: string;
}
const Heading: React.FC<HeadingProps> = ({
  title,
  icon: Icon,
  description,
  iconColor,
  bgColor,
}) => {
  return (
    <div className="lg:px-8 px-4 flex items-center gap-x-3 mb-8">
      <div className={cn("p-2 w-fit rounded-md", bgColor)}>
        <Icon className={cn("w-10 h-10", iconColor)} />
      </div>
      <div >
        <h2 className="font-bold text-3xl">{title}</h2>
        <div className="text-sm text-muted-foreground">
            {description}
        </div>
      </div>
    </div>
  );
};

export default Heading;
