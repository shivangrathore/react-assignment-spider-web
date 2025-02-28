import { ChevronUpIcon } from "lucide-react";
import { cn } from "../lib/utils";
import FirstMenuItem from "./icons/FirstMenuItem";
import FollowupMenuItem from "./icons/FollowupMenuItem";

export function SidebarDropdown({
  name,
  items,
  active = false,
}: {
  name: string;
  items: string[];
  active?: boolean;
}) {
  function indicatorIcon(i: number) {
    if (i === 0) {
      return FirstMenuItem;
    } else {
      return FollowupMenuItem;
    }
  }
  return (
    <div className="flex gap-2 flex-col w-full text-start">
      <button
        className={cn(
          "p-4 rounded-lg inline-flex justify-between text-lg font-medium",
          active && "border-2 border-ascent text-ascent",
        )}
      >
        <span className="font-semibold">{name}</span>
        <span>
          <ChevronUpIcon />
        </span>
      </button>
      <div
        className={cn(
          "grid relative ml-10 -mt-1 space-y-1 isolate",
          "grid-rows-[0fr] transition-all overflow-hidden",
          active && "grid-rows-[1fr]",
        )}
      >
        {items.map((item, i) => (
          <div className={cn("relative flex")}>
            {indicatorIcon(i)({
              strokeWidth: "0px",
              className: cn(
                "absolute",
                i == 0 ? "top-2 h-7" : "-top-10 h-18",
                i == 0 && active && "text-ascent",
              ),
              style: {
                zIndex: 100 - i,
              },
            })}
            <button
              className={cn(
                "p-4 py-2 ml-6 rounded mt-2",
                i == 0 &&
                  active &&
                  "border-2 border-ascent text-ascent flex-grow",
              )}
            >
              {item}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Sidebar() {
  return (
    <aside className="flex-grow max-w-[300px] w-full border-ascent border-2 rounded-lg bg-black/50 p-4 overflow-auto hide-scrollbar flex flex-col">
      <SidebarDropdown
        name="Events"
        active
        items={["New Requests", "Estimate", "Events", "Partial Requests"]}
      />
      <button className="p-4 rounded-lg inline-flex justify-between w-full text-lg font-medium">
        Positions
      </button>
      <button className="p-4 rounded-lg inline-flex justify-between w-full text-lg font-medium">
        Contractors
      </button>
      <SidebarDropdown
        name="Users"
        items={["Admins", "Clients", "Coordinators"]}
      />
      <button className="p-4 rounded-lg inline-flex justify-between w-full text-lg font-medium">
        Profile
      </button>
      <button className="p-4 rounded-lg inline-flex justify-between w-full text-lg font-medium bg-black mt-auto">
        Logout
      </button>
    </aside>
  );
}
