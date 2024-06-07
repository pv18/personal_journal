import { Button, Form, Modal } from "antd";
import { useState } from "react";
import { JournalFormType, IMemoir } from "../../model/types/journal";
import { PlusOutlined } from "@ant-design/icons";
import { useJournalStore } from "../../model/store/useJournalStore";
import cls from "./AddJournalButton.module.scss";
import { JournalForm } from "../JournalForm/JournalForm";
import dayjs from "dayjs";
import { generateUniqueId } from "helpers/generateUniqueId";

export const AddJournalButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addMemoir = useJournalStore((state) => state.addMemoir);
  const [form] = Form.useForm();

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
    const payload: IMemoir = {
      id: generateUniqueId(),
      title: title,
      description: description,
      date: dayjs(date).toISOString(),
      tags: tags,
    };
    addMemoir(payload, () => handleCancel());
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
