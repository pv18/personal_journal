import cls from "./JournalItem.module.scss";
import { FC } from "react";
import dayjs from "dayjs";
import { Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { useJournalStore } from "../../model/store/useJournalStore";
import { IMemoir } from "../../model/types/journal";
import classNames from "classnames";

interface JournalItemProps {
  memoir: IMemoir;
}

export const JournalItem: FC<JournalItemProps> = (props) => {
  const {
    memoir: { title, date, description, id },
  } = props;
  const chooseMemoir = useJournalStore((state) => state.setCurrentMemoir);
  const currentMemoir = useJournalStore((state) => state.currentMemoir);

  const onChooseMemoir = () => {
    chooseMemoir(id);
  };

  const formatedDate = dayjs(date).format("YYYY-MM-DD");

  return (
    <div
      className={classNames(cls.journalItem, {
        [cls.active]: currentMemoir?.id === id,
      })}
    >
      <h2 className={cls.journalItem__header}>{title}</h2>
      <h2 className={cls.journalItem__body}>
        <div className={cls.journalItem__date}>{formatedDate}</div>
        <div className={cls.journalItem__text}>{description}</div>
      </h2>
      <div className={cls.btnWrapper}>
        <Button
          icon={<EyeOutlined />}
          onClick={onChooseMemoir}
          size={"small"}
          shape="circle"
        />
      </div>
    </div>
  );
};
