import { DatePicker, Form, Input } from "antd";
import { FC } from "react";
import { JournalFormType } from "../../model/types/journal";

interface JournalFormProps {
  form: any;
  sendForm: (form: JournalFormType) => void;
}

export const JournalForm: FC<JournalFormProps> = (props) => {
  const { form, sendForm } = props;

  return (
    <Form form={form} onFinish={sendForm} layout={"vertical"}>
      <Form.Item label="Заголовок" name="title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Дата" name="date" rules={[{ required: true }]}>
        <DatePicker />
      </Form.Item>

      <Form.Item label="Метки" name="tags" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Описание"
        name="description"
        rules={[{ required: true }]}
      >
        <Input.TextArea rows={4} maxLength={6} />
      </Form.Item>
    </Form>
  );
};
