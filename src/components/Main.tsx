import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  PlusIcon,
  SearchIcon,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useState } from "react";

export default function Main() {
  const [isViewingEvent, setIsViewingEvent] = useState(false);
  return (
    <main className="border-2 border-ascent flex-grow w-full overflow-auto hide-scrollbar rounded-lg bg-black/30 flex flex-col">
      {!isViewingEvent ? (
        <>
          <div className="flex justify-between items-center p-8">
            <h2 className="text-3xl font-medium">Event Requests</h2>
            <div className="flex items-center gap-2">
              <div className="relative">
                <SearchIcon className="absolute left-2 top-2" />
                <input
                  className="rounded-lg border-2 border-white p-2 pl-10"
                  placeholder="Search here"
                />
              </div>
              <button className="size-10 p-2 bg-gradient-to-br from-pink-500 to-violet-500 rounded-lg border-white border-2 flex items-center justify-center cursor-pointer">
                <PlusIcon />
              </button>
            </div>
          </div>
          <div className="grid table-grid-cols overflow-auto custom-scrollbar">
            {/* Header */}
            <div className="contents">
              {[
                "Event Name",
                "Event Start",
                "Event End",
                "Client Name",
                "Contact Info",
                "Venue",
                "City",
                "State",
                "Zip Code",
              ].map((header, i) => (
                <div
                  className={cn(
                    "bg-[#D175B6] p-4",
                    i == 0 && "sticky left-0 z-10",
                  )}
                >
                  {header}
                </div>
              ))}
            </div>
            {new Array(10).fill(0).map((_, i) => (
              <div className="contents" key={i}>
                {[
                  "Filled Name",
                  "Jan 12, 2024",
                  "Jan 14, 2024",
                  "Muhammed Asad",
                  "+123 456 789",
                  "Lorem impsum dolor sit amet",
                  "-",
                  "-",
                  "-",
                ].map((data, i) => (
                  <div
                    className={cn(
                      "p-4 flex items-center gap-2 border-b-2 border-ascent",
                      i == 0 &&
                        "sticky left-0 bg-black/20 z-10 backdrop-blur-3xl",
                    )}
                  >
                    {i == 0 && (
                      <button
                        className="p-0.5 rounded-lg hover:bg-gray-500"
                        onClick={() => setIsViewingEvent(true)}
                      >
                        <img src="/eye.svg" className="w-8" />
                      </button>
                    )}
                    {data}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 p-4 bg-black mt-auto">
            <ArrowLeft />
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span className="text-ascent">4</span>
            <ArrowRight className="text-gray-600" />
          </div>
        </>
      ) : (
        <div className="p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                className="size-10 p-2 bg-gray-600/30 rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => setIsViewingEvent(false)}
              >
                <ArrowLeft />
              </button>
              <div>
                <h2 className="text-3xl font-medium inline">Event Details</h2>
                <span className="ml-4 text-xl">(Venue Details)</span>
              </div>
            </div>
          </div>
          <div className="flex mt-4">
            {[
              "Event Details",
              "Assign Coordinator/Contractor",
              "Session Management",
              "Generate SOW",
            ].map((header, i) => (
              <div
                key={header}
                className={cn(
                  "p-4 border-2 border-ascent",
                  i == 2 && "bg-ascent",
                  i == 0 && "rounded-l-lg",
                  i == 3 && "rounded-r-lg",
                )}
              >
                {header}
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            <div className="flex-grow flex flex-col gap-1">
              <h4 className="text-2xl font-semibold">Assign Coordinator</h4>
              <div className="relative flex-grow">
                <input
                  className="p-2 w-full border-2 border-white rounded-lg"
                  placeholder="Search Coordinator"
                />
                <ChevronDown className="absolute right-2 top-2" />
              </div>
              <div className="text-ascent">Assign New Coordinator</div>
            </div>
            <div className="flex-grow flex flex-col gap-1">
              <h4 className="text-2xl font-semibold">Event Name (Venue)</h4>
              <div className="relative flex-grow flex items-center border-2 border-ascent rounded-lg">
                <div className="relative flex items-center flex-grow">
                  <input
                    className="p-2 w-full rounded-lg pl-14 font-bold"
                    defaultValue={"12-12-2023"}
                    type="date"
                  />
                  <span className="absolute left-2">Start:</span>
                </div>
                <div className="relative flex items-center flex-grow">
                  <input
                    className="p-2 w-full rounded-lg pl-14 font-bold"
                    defaultValue={"12-12-2024"}
                    type="date"
                  />
                  <span className="absolute left-2">End:</span>
                </div>
              </div>
              <div className="relative flex-grow flex items-center border-2 border-ascent rounded-lg">
                <div className="relative flex items-center flex-grow">
                  <input
                    className="p-2 w-full rounded-lg pl-32 font-bold"
                    defaultValue={"My Location, 123, city, Country"}
                  />
                  <span className="absolute left-2">Venue Address:</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-10 max-h-[500px] overflow-hidden">
            <h3 className="text-2xl font-bold">Assign Contractor</h3>
            <div className="flex w-full gap-10 overflow-hidden">
              <div className="flex flex-col gap-4 p-4 border-2 border-ascent bg-black rounded-lg mt-4 shrink-0 overflow-auto hide-scrollbar">
                {new Array(5).fill(0).map((_, i) => (
                  <div
                    className={cn(
                      "border-2 border-ascent p-4 rounded-lg",
                      i == 0 && "bg-ascent",
                    )}
                    key={i}
                  >
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-xl">
                        Meeting Room {i + 1}
                      </h4>
                      <img src="/star.png" className="size-5" />
                      <span
                        className={cn(
                          i == 0 ? "text-black font-semibold" : "text-ascent",
                        )}
                      >
                        12 Positions
                      </span>
                    </div>
                    <span>Start from 12 Jan 2023 - Ends at 15 Jan, 2023</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 flex-grow overflow-hidden">
                <h4 className="text-2xl font-medium">Positions</h4>
                <div className="grid table-position-grid-cols flex-grow border-2 border-ascent rounded-lg bg-black overflow-auto hide-scrollbar">
                  <div className="contents">
                    {["Position", "Time", "Info", "Quantity", ""].map(
                      (header, i) => (
                        <div
                          className="font-semibold border-b border-ascent flex p-2"
                          key={i}
                        >
                          {header}
                        </div>
                      ),
                    )}
                  </div>
                  {new Array(10).fill(0).map((_, i) => (
                    <div className="contents" key={i}>
                      {[
                        "Camera 1 (Video)",
                        "9 am - 7 pm",
                        "LP default",
                        "20",
                      ].map((header, i) => (
                        <div
                          className="font-semibold flex items-center p-2 border-b border-ascent"
                          key={i}
                        >
                          {header}
                        </div>
                      ))}
                      <div className="p-2 border-b border-ascent">
                        <div className="relative border border-ascent flex rounded-lg">
                          <input
                            placeholder="Select Contractor"
                            className="p-2 w-full"
                          />
                          <ChevronDown className="absolute right-2 top-2" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <button className="bg-pink-400 p-4 rounded-lg w-fit mx-auto mt-10 px-10 cursor-pointer block">
            Save Edits
          </button>
        </div>
      )}
    </main>
  );
}
