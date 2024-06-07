import classNames from "classnames";
import { FC, ReactNode } from "react";
import cls from "./Memoir.module.scss";

interface MemoirProps {
  children?: ReactNode;
  className?: string;
}

export const Memoir: FC<MemoirProps> = (props) => {
  const { children, className } = props;

  return <div className={classNames(cls.Memoir, className)}>{children}</div>;
};
