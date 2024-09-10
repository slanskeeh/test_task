"use client";

import ButtonDelete from "@/features/ButtonDelete";
import DragNDropDots from "@/features/DragNDropDots";
import Icon from "@/features/Icon";
import Toggle from "@/features/Toggle";
import { useState } from "react";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  return (
    <main>
      <ButtonDelete />
      <DragNDropDots />
      <Icon src={"/images/image.png"} />
      <Toggle checked={toggle} onChange={setToggle} />
    </main>
  );
}
