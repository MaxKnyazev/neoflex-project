import { AboutCard } from "@c/AboutCard";
import { CardInfo } from "@c/CardInfo";
import { GetCard } from "@c/GetCard";
import { LoanForm } from "@c/LoanForm";
import { LoanTabs } from "@c/LoanTabs";

export const LoanPage: React.FC = () => {
  return (
    <>
      <CardInfo />
      <LoanTabs />
      <GetCard />
      <LoanForm />
    </>
  );
}
