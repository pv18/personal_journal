import cls from "./Logo.module.scss";
import classNames from "classnames";
import { FC, memo } from "react";

interface LogoProps {
  image: string;
  className?: string;
}

export const Logo: FC<LogoProps> = memo((props) => {
  const { image, className } = props;

  return (
    <img
      className={classNames(cls.logo, className)}
      src={image}
      alt="Логотип журнала"
    />
  );
});
