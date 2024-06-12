import { Suspense, useEffect, useState } from "react";
import { MainPage } from "../pages/MainPage";
import { Navbar } from "components/Navbar/Navbar";
import { Spin } from "antd";
import { useOnline } from "hooks";
import { sendRequestsOffline } from "helpers/sendRequestsFromDbToServer";
import "./styles/index.scss";

function App() {
  // Имитация запроса на сервер
  const [loading, setLoading] = useState(false);
  const isOnline = useOnline();

  useEffect(() => {
    if (isOnline) {
      const send = async () => {
        setLoading(true);
        try {
          await sendRequestsOffline();
        } catch (e) {
          console.log(`${e}`);
        } finally {
          setLoading(false);
        }
      };
      send();
    }
  }, [isOnline]);

  return (
    <Spin spinning={loading} size={"large"} tip={"Идет синхронизация"}>
      <div className="app">
        <Navbar />
        <div className="main">
          <Suspense fallback="">
            <MainPage />
          </Suspense>
        </div>
      </div>
    </Spin>
  );
}

export default App;
