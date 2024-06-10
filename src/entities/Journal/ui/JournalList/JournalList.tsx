import { FC, useEffect } from "react";
import { JournalItem } from "../JournalItem/JournalItem";
import classNames from "classnames";
import cls from "./JournalList.module.scss";
import { IMemoir } from "entities/Journal/model/types/journal";

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
