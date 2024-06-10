import classNames from "classnames";
import cls from "./Navbar.module.scss";
import { Logo } from "components/Logo/Logo";
import { NetworkState } from "components/NetworkState/NetworkState";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(cls.navbar, className)}>
    <Logo />
    <NetworkState />
  </div>
);
