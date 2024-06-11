import { Button, Form, Modal } from "antd";
import { useState } from "react";
import { IMemoir, JournalFormType } from "../../model/types/journal";
import { PlusOutlined } from "@ant-design/icons";
import { useJournalStore } from "../../model/store/useJournalStore";
import cls from "./AddJournalButton.module.scss";
import { JournalForm } from "../JournalForm/JournalForm";
import dayjs from "dayjs";
import { generateUniqueId } from "helpers/generateUniqueId";
import { useOnline } from "hooks";
import { saveRequestToIndexedDB } from "helpers/saveRequestToIndexedDB";
import { IRequest } from "app/types/globalTypes";
import { serverPort } from "entities/Journal/model/constants/serverPort";
import { shallow } from "zustand/shallow";

export const AddJournalButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isOnline = useOnline();
  const [form] = Form.useForm();
  const [addMemoir, addMemoirOffline] = useJournalStore(
    (state) => [state.addMemoir, state.addMemoirOffline],
    shallow,
  );

  const showModal = () => {
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    form.submit();
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const sendForm = ({ title, date, description, tags }: JournalFormType) => {
    const memoirId: string = generateUniqueId();

    const payload: IMemoir = {
      id: memoirId,
      title: title,
      description: description,
      date: dayjs(date).toISOString(),
      tags: tags,
    };

    if (isOnline) {
      addMemoir(payload, () => handleCancel());
      return;
    }

    const requestPayload: IRequest = {
      id: memoirId,
      url: `${serverPort}/memoirs`,
      method: "post",
      payload: payload,
    };

    addMemoirOffline(payload, () => handleCancel());
    return saveRequestToIndexedDB(requestPayload, () => handleCancel());
  };

  return (
    <>
      <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
        Новое воспоминание
      </Button>
      <Modal
        title={<h3 className={cls.title}>Добавить запись в журнал</h3>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <JournalForm form={form} sendForm={sendForm} />
      </Modal>
    </>
  );
};
