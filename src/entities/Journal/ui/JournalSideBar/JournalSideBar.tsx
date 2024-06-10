import { AddJournalButton } from "../AddJournalButton/AddJournalButton";
import cls from "./JournalSideBar.module.scss";
import { JournalList } from "entities/Journal/ui/JournalList/JournalList";
import { useJournalStore } from "entities/Journal/model/store/useJournalStore";
import { useEffect } from "react";

export const JournalSideBar = () => {
  const syncMemoir = useJournalStore((state) => state.syncMemoir);
  const items = useJournalStore((state) => state.items);

  useEffect(() => {
    syncMemoir();
  }, []);

  return (
    <div className={cls.journalSideBar}>
      <AddJournalButton />
      <JournalList items={items} />
    </div>
  );
};
