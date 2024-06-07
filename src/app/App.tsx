import { Suspense } from "react";
import { MainPage } from "../pages/MainPage";
import "./styles/index.scss";

function App() {
  return (
    <div className="app">
      <Suspense fallback="">
        <MainPage />
      </Suspense>
    </div>
  );
}

export default App;
