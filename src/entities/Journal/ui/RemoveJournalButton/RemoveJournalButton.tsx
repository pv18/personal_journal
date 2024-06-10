import type { PopconfirmProps } from "antd";
import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useJournalStore } from "../../model/store/useJournalStore";
import { useOnline } from "hooks/useOnline";
import { saveRequestToIndexedDB } from "helpers/saveRequestToIndexedDB";
import { IRequest } from "app/types/globalTypes";
import { serverPort } from "entities/Journal/model/constants/serverPort";

export const RemoveJournalButton = () => {
  const deleteMemoir = useJournalStore((state) => state.deleteMemoir);
  const deleteMemoirOffline = useJournalStore(
    (state) => state.deleteMemoirOffline,
  );
  const currentMemoir = useJournalStore((state) => state.currentMemoir);
  const isOnline = useOnline();

  const confirm: PopconfirmProps["onConfirm"] = (e) => {
    if (isOnline) {
      deleteMemoir();
    } else {
      deleteMemoirOffline();

      const id = currentMemoir?.id;

      if (id) {
        const requestPayload: IRequest = {
          id: id,
          url: `${serverPort}/memoirs/${id}`,
          method: "delete",
        };

        return saveRequestToIndexedDB(requestPayload);
      }
    }
  };

  const cancel: PopconfirmProps["onCancel"] = (e) => {};

  return (
    <Popconfirm
      placement="left"
      title="Удалить запись"
      description="Вы действительно хотите удалить эту запись?"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Да"
      cancelText="Нет"
    >
      <Button type={"primary"} icon={<DeleteOutlined />} />
    </Popconfirm>
  );
};
