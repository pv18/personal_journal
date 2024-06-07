import type { PopconfirmProps } from "antd";
import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useJournalStore } from "../../model/store/useJournalStore";

export const RemoveJournalButton = () => {
  const deleteMemoir = useJournalStore((state) => state.deleteMemoir);

  const confirm: PopconfirmProps["onConfirm"] = (e) => {
    console.log(e);
    deleteMemoir();
  };

  const cancel: PopconfirmProps["onCancel"] = (e) => {
    console.log(e);
  };

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
