import { InstagramButton, FacebookButton } from "@/components/Buttons";
import Tile from "@/components/Tile";

export default function Subscribe() {
  return (
    <Tile>
      <h3 className="text-center pb-4 text-xl font-medium">
        Підписуйтесь на нас в соціальних мережах
      </h3>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <InstagramButton />
        <span>та</span>
        <FacebookButton />
      </div>
    </Tile>
  );
}
