import { FC } from "react";
import { JournalItem } from "../JournalItem/JournalItem";
import classNames from "classnames";
import { IMemoir } from "entities/Journal/model/types/journal";
import cls from "./JournalList.module.scss";

interface JournalListProps {
  items: IMemoir[];
}

export const JournalList: FC<JournalListProps> = ({ items }) => {
  return (
    <div className={classNames(cls.journalList)}>
      {items.map((item) => (
        <JournalItem key={item.id} memoir={item} />
      ))}
    </div>
  );
};
