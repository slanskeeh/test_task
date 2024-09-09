import ButtonDelete from "@/features/ButtonDelete";
import DragNDropDots from "@/features/DragNDropDots";
import Icon from "@/features/Icon";

export default function Home() {
  return (
    <main>
      <ButtonDelete />
      <DragNDropDots />
      <Icon src={"/images/image.png"} />
    </main>
  );
}
