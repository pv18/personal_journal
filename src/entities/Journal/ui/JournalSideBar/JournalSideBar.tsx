import LogoImg from "app/assets/icons/logo.svg";
import { AddJournalButton } from "../AddJournalButton/AddJournalButton";
import cls from "./JournalSideBar.module.scss";
import { Logo } from "components/Logo/Logo";
import { JournalList } from "entities/Journal/ui/JournalList/JournalList";

export const JournalSideBar = () => {
  return (
    <div className={cls.journalSideBar}>
      <AddJournalButton />
      <JournalList />
    </div>
  );
};
