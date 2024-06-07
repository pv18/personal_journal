import cls from './JournalInfo.module.scss';
import {FC, memo, ReactNode} from 'react';
import {CalendarOutlined, FolderOutlined, SmileOutlined,} from '@ant-design/icons';
import {IMemoir} from '../../model/types/journal';
import dayjs from 'dayjs';
import {RemoveJournalButton} from '../RemoveJournalButton/RemoveJournalButton';

interface JournalInfoProps {
  memoir: IMemoir | undefined;
}

export const JournalInfo: FC<JournalInfoProps> = memo((props) => {
  const { memoir } = props;

  const formatedDate = dayjs(memoir?.date).format("YYYY-MM-DD");

  return (
    <div className={cls.journalInfo}>
      {memoir ? (
        <>
          <div className={cls.header}>
            <h3 className={cls.title}>
              {memoir?.title || "Воспоминание не выбрано"}
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
              content={memoir?.tags}
            />
          </div>
          <div className={cls.description}>{memoir?.description || ""}</div>
        </>
      ) : (
        <div style={{ textAlign: "center" }}>
          <SmileOutlined style={{ fontSize: 20 }} />
          <p>Запись не выбрана</p>
        </div>
      )}
    </div>
  );
});

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
