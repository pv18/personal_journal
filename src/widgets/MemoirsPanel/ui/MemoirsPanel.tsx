import classNames from "classnames";
import { FC, ReactNode } from "react";
import cls from "./MemoirsPanel.module.scss";

interface MemoirsPanelProps {
  children?: ReactNode;
  className?: string;
}

export const MemoirsPanel: FC<MemoirsPanelProps> = (props) => {
  const { className, children } = props;

  return (
    <div className={classNames(cls.memoirsPanel, className)}>{children}</div>
  );
};
