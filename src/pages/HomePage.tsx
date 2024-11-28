import { CardDesign } from "@c/CardDesign";
import { Course } from "@c/Course";
import { Features } from "@c/Features";
import { News } from "@c/News";
import { Support } from "@c/Support";
import { WorldMap } from "@c/WorldMap";

export const HomePage: React.FC = () => {
  return (
    <>
      <CardDesign />
      <Features />
      <Course />
      <WorldMap />
      <News />
      <Support />
    </>
  );
}
