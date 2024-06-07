import { memo } from "react";
import { Journal } from "../../model/types/journal";
import { JournalItem } from "../JournalItem/JournalItem";
import classNames from "classnames";
import cls from "./JournalList.module.scss";

interface JournalListProps {
  items: Journal[];
}

export const JournalList = memo(({ items }: JournalListProps) => {
  return (
    <div className={classNames(cls.journalList)}>
      {items.map((item) => (
        <JournalItem
          key={item.text}
          title={item.title}
          date={item.date}
          post={item.text}
        />
      ))}
    </div>
  );
});
