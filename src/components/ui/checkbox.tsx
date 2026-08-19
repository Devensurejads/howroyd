import { Check } from "lucide-react";
import * as React from "react";
import { cn } from "../../lib/utils";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <span className="relative inline-flex h-5 w-5 shrink-0">
        <input
          type="checkbox"
          ref={ref}
          className={cn(
            "peer h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-[4px] border border-[#00000033] bg-transparent transition-colors checked:border-[#363535] checked:bg-[#363535] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          {...props}
        />
        <Check className="pointer-events-none absolute inset-0 h-5 w-5 p-[3px] text-white opacity-0 peer-checked:opacity-100" />
      </span>
    );
  },
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
