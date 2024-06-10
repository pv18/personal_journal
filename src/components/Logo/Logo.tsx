import cls from "./Logo.module.scss";
import classNames from "classnames";
import { FC, memo } from "react";
import LogoImg from "app/assets/icons/logo.svg";

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = memo(({ className }) => {
  return (
    <img
      className={classNames(cls.logo, className)}
      src={LogoImg}
      alt="Логотип журнала"
    />
  );
});
