import { Input } from "@/shared/components/ui/input";
import { cn } from "@/shared/lib/utils";
import * as React from "react";

interface IconInputProps extends React.ComponentProps<typeof Input> {
  icon?: React.ReactNode;
}

function IconInput({ className, icon, ...props }: IconInputProps) {
  return (
    <div className="relative flex items-center w-full">
      <Input className={cn(icon && "pr-10", className)} {...props} />

      {icon && (
        <div className="absolute right-0 flex items-center h-full pointer-events-none pr-2">
          {icon}
          <div className="h-[65%] w-px bg-border mr-1" />
        </div>
      )}
    </div>
  );
}

export { IconInput };
