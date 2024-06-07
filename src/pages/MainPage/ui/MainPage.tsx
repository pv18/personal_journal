import { MemoirsPanel } from "@/widgets/MemoirsPanel";
import { JournalList } from "@/entities/Journal";
import { Logo } from "@/shared/ui/Logo/Logo";
import LogoImg from "@/shared/assets/icons/logo.svg";
import { useEffect } from "react";
import { useJournalStore } from "@/entities/Journal/model/store/useJournalStore";
import { AddJournalButton } from "@/entities/Journal/ui/AddJournalButton/AddJournalButton";
import cls from "./MainPage.module.scss";
import { JournalInfo } from "@/entities/Journal/ui/JournalInfo/JournalInfo";

const MainPage = () => {
  const getMemoirs = useJournalStore((state) => state.getMemoirs);
  const items = useJournalStore((state) => state.items);
  const currentItem = useJournalStore((state) => state.currentMemoir);

  useEffect(() => {
    getMemoirs();
  }, []);

  return (
    <section className={cls.mainPage}>
      <MemoirsPanel>
        <Logo image={LogoImg} />
        <AddJournalButton />
        <JournalList items={items} />
      </MemoirsPanel>
      <JournalInfo memoir={currentItem} />
    </section>
  );
};

export default MainPage;
