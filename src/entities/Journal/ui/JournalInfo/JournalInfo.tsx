import cls from "./JournalInfo.module.scss";
import { FC, memo, ReactNode } from "react";
import {
  CalendarOutlined,
  FolderOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import { RemoveJournalButton } from "../RemoveJournalButton/RemoveJournalButton";
import { useJournalStore } from "../../model/store/useJournalStore";
import { DateFormats } from "enums";

export const JournalInfo = () => {
  const currentItem = useJournalStore((state) => state.currentMemoir);

  const formatedDate = dayjs(currentItem?.date).format(
    DateFormats.PRIMARY_DATE_FORMAT,
  );

  return (
    <div className={cls.journalInfo}>
      {currentItem ? (
        <>
          <div className={cls.header}>
            <h3 className={cls.title}>
              {currentItem?.title || "Воспоминание не выбрано"}
            </h3>
            <div className={cls.actions}>
              <RemoveJournalButton />
            </div>
          </div>
          <div className={cls.labels}>
            <Label
              icon={<CalendarOutlined />}
              title={"Дата"}
              content={formatedDate}
            />
            <Label
              icon={<FolderOutlined />}
              title={"Метки"}
              content={currentItem?.tags}
            />
          </div>
          <div className={cls.description}>
            {currentItem?.description || ""}
          </div>
        </>
      ) : (
        <div style={{ textAlign: "center" }}>
          <SmileOutlined style={{ fontSize: 20 }} />
          <p>Запись не выбрана</p>
        </div>
      )}
    </div>
  );
};

interface LabelProps {
  icon: ReactNode;
  title: string;
  content?: string;
}

const Label: FC<LabelProps> = memo((props) => {
  const { icon, title, content } = props;

  return (
    <div className={cls.label}>
      <div className={cls.labelIcon}>{icon}</div>
      <div className={cls.labelTitle}>{title}</div>
      <div className={cls.labelContent}>{content}</div>
    </div>
  );
});
