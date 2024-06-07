import { Memoir } from "@/widgets/Memoir";
import { MemoirsPanel } from "@/widgets/MemoirsPanel";
import { JournalList } from "@/entities/Journal";
import { Logo } from "@/shared/ui/Logo/Logo";
import LogoImg from "@/shared/assets/icons/logo.svg";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Journal } from "@/entities/Journal/model/types/journal";
import { useState } from "react";

const MainPage = () => {
  const [data, setData] = useState<Journal[]>([
    { title: "1", text: "234234", date: new Date() },
    { title: "2", text: "2sadf34234", date: new Date() },
    { title: "3", text: "23423asa4", date: new Date() },
  ]);

  return (
    <section className="mainPage">
      <MemoirsPanel>
        <Logo image={LogoImg} />
        <Button type="primary" icon={<PlusOutlined />}>
          Новое воспоминание
        </Button>
        <JournalList items={data} />
      </MemoirsPanel>
      <Memoir>asdf</Memoir>
    </section>
  );
};

export default MainPage;
