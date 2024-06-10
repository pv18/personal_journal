import { Suspense } from "react";
import { MainPage } from "../pages/MainPage";
import { useRequestOfflineHandler } from "hooks/useRequestOfflineHandler";
import { Navbar } from "components/Navbar/Navbar";
import "./styles/index.scss";

function App() {
  useRequestOfflineHandler();

  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <Suspense fallback="">
          <MainPage />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
