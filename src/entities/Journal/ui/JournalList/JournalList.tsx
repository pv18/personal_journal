import { memo } from "react";
import { IMemoir } from "../../model/types/journal";
import { JournalItem } from "../JournalItem/JournalItem";
import classNames from "classnames";
import cls from "./JournalList.module.scss";

interface JournalListProps {
  items: IMemoir[];
}

export const JournalList = memo(({ items }: JournalListProps) => {
  return (
    <div className={classNames(cls.journalList)}>
      {items.map((item) => (
        <JournalItem key={item.id} memoir={item} />
      ))}
    </div>
  );
});
