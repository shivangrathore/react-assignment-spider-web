import { ComponentProps } from "react";
import { cn } from "../lib/utils";

type Props = ComponentProps<"div">;
export function MaxWidthWrapper({ className, ...props }: Props) {
  return <div className={cn("max-w-[1640px] mx-auto", className)} {...props} />;
}
