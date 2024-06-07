import ReactDOM from "react-dom/client";
import App from "./app/App";
import { ConfigProvider } from "antd";
import ruRU from "antd/locale/ru_RU";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import dayjs from "dayjs";
import "dayjs/locale/ru.js";
import updateLocale from "dayjs/plugin/updateLocale";
dayjs.extend(updateLocale);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider locale={ruRU}>
    <App />
  </ConfigProvider>,
);

serviceWorkerRegistration.register();
