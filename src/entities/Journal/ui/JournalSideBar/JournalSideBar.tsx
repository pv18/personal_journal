import { Logo } from "@/shared/ui/Logo/Logo";
import LogoImg from "@/shared/assets/icons/logo.svg";
import { AddJournalButton } from "../AddJournalButton/AddJournalButton";
import { JournalList } from "@/entities/Journal";
import cls from "./JournalSideBar.module.scss";

export const JournalSideBar = () => {
  return (
    <div className={cls.journalSideBar}>
      <Logo image={LogoImg} />
      <AddJournalButton />
      <JournalList />
    </div>
  );
};
