import { AddJournalButton } from "../AddJournalButton/AddJournalButton";
import { JournalList } from "entities/Journal/ui/JournalList/JournalList";
import { useJournalStore } from "entities/Journal/model/store/useJournalStore";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";
import cls from "./JournalSideBar.module.scss";

export const JournalSideBar = () => {
  const [memoirs, syncMemoir] = useJournalStore(
    (state) => [state.items, state.syncMemoir],
    shallow,
  );

  useEffect(() => {
    syncMemoir();
  }, []);

  return (
    <div className={cls.journalSideBar}>
      <AddJournalButton />
      <JournalList items={memoirs} />
    </div>
  );
};
