import "./App.css";
import Main from "./components/Main";
import { MaxWidthWrapper } from "./components/MaxWidthWrapper";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";

function App() {
  return (
    <>
      <MaxWidthWrapper className="absolute w-[1434px] h-[1486px] -top-[200px] left-1/2 -translate-x-1/2 animte-bg ">
        <div className="size-[750px] shrink-0 rounded-full gr1 left-[666px] absolute" />
        <div className="size-[750px] shrink-0 rounded-full gr2 top-[700px] absolute" />
      </MaxWidthWrapper>
      <MaxWidthWrapper className="h-full w-full relative isolate flex flex-col p-6 overflow-hidden">
        <Topbar />
        <div className="flex flex-grow mt-10 overflow-hidden gap-4">
          <Sidebar />
          <Main />
        </div>
      </MaxWidthWrapper>
    </>
  );
}

export default App;
