import { useEffect } from "react";
import { JournalItem } from "../JournalItem/JournalItem";
import classNames from "classnames";
import cls from "./JournalList.module.scss";
import { useJournalStore } from "../../model/store/useJournalStore";

export const JournalList = () => {
  const getMemoirs = useJournalStore((state) => state.getMemoirs);
  const items = useJournalStore((state) => state.items);

  useEffect(() => {
    getMemoirs();
  }, []);

  return (
    <div className={classNames(cls.journalList)}>
      {items.map((item) => (
        <JournalItem key={item.id} memoir={item} />
      ))}
    </div>
  );
};
