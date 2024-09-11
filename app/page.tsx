import { Main } from "@/shared/Main";
import Table from "@/widgets/Table/Table";

export default async function Home() {
  const tableData = [
    {
      id: 1,
      name: "Куртка",
      icon: "/images/image.png",
      params: "Красный, легкий, прочный",
      visibility: true,
    },
    {
      id: 2,
      name: "Сапоги",
      icon: "/images/image.png",
      params: "Черные, кожаные, теплые",
      visibility: true,
    },
    {
      id: 3,
      name: "Шарф",
      icon: "/images/image.png",
      params: "Шерстяной, мягкий, длинный",
      visibility: true,
    },
    {
      id: 4,
      name: "Шапка",
      icon: "/images/image.png",
      params: "Синяя, теплая, вязаная",
      visibility: true,
    },
    {
      id: 5,
      name: "Рубашка",
      icon: "/images/image.png",
      params: "Белая, хлопковая, классическая",
      visibility: true,
    },
    {
      id: 6,
      name: "Пальто",
      icon: "/images/image.png",
      params: "Черное, длинное, шерстяное",
      visibility: true,
    },
    {
      id: 7,
      name: "Джинсы",
      icon: "/images/image.png",
      params: "Синие, узкие, прочные",
      visibility: true,
    },
    {
      id: 8,
      name: "Платье",
      icon: "/images/image.png",
      params: "Красное, шелковое, легкое",
      visibility: true,
    },
    {
      id: 9,
      name: "Перчатки",
      icon: "/images/image.png",
      params: "Кожаные, черные, теплые",
      visibility: true,
    },
    {
      id: 10,
      name: "Футболка",
      icon: "/images/image.png",
      params: "Белая, хлопковая, легкая",
      visibility: true,
    },
    {
      id: 11,
      name: "Пиджак",
      icon: "/images/image.png",
      params: "Серый, классический, приталенный",
      visibility: true,
    },
    {
      id: 12,
      name: "Брюки",
      icon: "/images/image.png",
      params: "Черные, классические, строгие",
      visibility: true,
    },
    {
      id: 13,
      name: "Туфли",
      icon: "/images/image.png",
      params: "Кожаные, коричневые, удобные",
      visibility: true,
    },
    {
      id: 14,
      name: "Шорты",
      icon: "/images/image.png",
      params: "Джинсовые, короткие, удобные",
      visibility: true,
    },
    {
      id: 15,
      name: "Кроссовки",
      icon: "/images/image.png",
      params: "Белые, легкие, спортивные",
      visibility: true,
    },
    {
      id: 16,
      name: "Костюм",
      icon: "/images/image.png",
      params: "Темно-синий, деловой, стильный",
      visibility: true,
    },
    {
      id: 17,
      name: "Кепка",
      icon: "/images/image.png",
      params: "Черная, хлопковая, легкая",
      visibility: true,
    },
    {
      id: 18,
      name: "Свитер",
      icon: "/images/image.png",
      params: "Шерстяной, теплый, мягкий",
      visibility: true,
    },
    {
      id: 19,
      name: "Носки",
      icon: "/images/image.png",
      params: "Хлопковые, белые, мягкие",
      visibility: true,
    },
    {
      id: 20,
      name: "Юбка",
      icon: "/images/image.png",
      params: "Черная, короткая, легкая",
      visibility: true,
    },
  ];

  return (
    <Main>
      <Table data={tableData} />
    </Main>
  );
}
