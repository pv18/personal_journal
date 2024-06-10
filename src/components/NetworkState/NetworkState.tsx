import React from "react";
import cls from "./NetworkState.module.scss";
import classNames from "classnames";
import { GlobalOutlined } from "@ant-design/icons";
import { useOnline } from "hooks/useOnline";

export enum NetworkColor {
  ONLINE = "#00CC66",
  OFFLINE = "#FF0033",
}

export const NetworkState = () => {
  const isOnline = useOnline();

  return (
    <div className={classNames(cls.network)}>
      <GlobalOutlined
        style={{
          color: `${isOnline ? NetworkColor.ONLINE : NetworkColor.OFFLINE}`,
          fontSize: 30,
        }}
      />
    </div>
  );
};
