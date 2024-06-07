import { JournalSideBar } from "@/entities/Journal/ui/JournalSideBar/JournalSideBar";
import { JournalInfo } from "@/entities/Journal/ui/JournalInfo/JournalInfo";
import cls from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <section className={cls.mainPage}>
      <JournalSideBar />
      <JournalInfo />
    </section>
  );
};

export default MainPage;
