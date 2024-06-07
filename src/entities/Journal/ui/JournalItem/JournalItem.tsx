import cls from "./JournalItem.module.scss";
import { FC } from "react";

interface JournalItemProps {
  title: string;
  post: string;
  date: Date;
}

export const JournalItem: FC<JournalItemProps> = (props) => {
  const { title, post, date } = props;

  const formatedDate = new Intl.DateTimeFormat("ru-RU").format(date);

  return (
    <div className={cls.journalItem}>
      <h2 className={cls.journalItem__header}>{title}</h2>
      <h2 className={cls.journalItem__body}>
        <div className={cls.journalItem__date}>{formatedDate}</div>
        <div className={cls.journalItem__text}>{post}</div>
      </h2>
    </div>
  );
};
