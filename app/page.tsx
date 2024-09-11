import { Main } from "@/shared/Main";
import Table from "@/widgets/Table/Table";

export default async function Home() {
  const tableData = [
    {
      id: 1,
      name: "One",
      icon: "/images/image.png",
      params: "One, One",
      visibility: true,
    },
    {
      id: 2,
      name: "Two",
      icon: "/images/image.png",
      params: "Two, Two",
      visibility: true,
    },
    {
      id: 3,
      name: "Three",
      icon: "/images/image.png",
      params: "Three, Three",
      visibility: true,
    },
    {
      id: 4,
      name: "Four",
      icon: "/images/image.png",
      params: "Four, Four",
      visibility: true,
    },
    {
      id: 5,
      name: "Five",
      icon: "/images/image.png",
      params: "Five, Five",
      visibility: true,
    },
    {
      id: 1,
      name: "One",
      icon: "/images/image.png",
      params: "One, One",
      visibility: true,
    },
    {
      id: 2,
      name: "Two",
      icon: "/images/image.png",
      params: "Two, Two",
      visibility: true,
    },
    {
      id: 3,
      name: "Three",
      icon: "/images/image.png",
      params: "Three, Three",
      visibility: true,
    },
    {
      id: 4,
      name: "Four",
      icon: "/images/image.png",
      params: "Four, Four",
      visibility: true,
    },
    {
      id: 5,
      name: "Five",
      icon: "/images/image.png",
      params: "Five, Five",
      visibility: true,
    },
    {
      id: 1,
      name: "One",
      icon: "/images/image.png",
      params: "One, One",
      visibility: true,
    },
    {
      id: 2,
      name: "Two",
      icon: "/images/image.png",
      params: "Two, Two",
      visibility: true,
    },
    {
      id: 3,
      name: "Three",
      icon: "/images/image.png",
      params: "Three, Three",
      visibility: true,
    },
    {
      id: 4,
      name: "Four",
      icon: "/images/image.png",
      params: "Four, Four",
      visibility: true,
    },
    {
      id: 5,
      name: "Five",
      icon: "/images/image.png",
      params: "Five, Five",
      visibility: true,
    },
    {
      id: 1,
      name: "One",
      icon: "/images/image.png",
      params: "One, One",
      visibility: true,
    },
    {
      id: 2,
      name: "Two",
      icon: "/images/image.png",
      params: "Two, Two",
      visibility: true,
    },
    {
      id: 3,
      name: "Three",
      icon: "/images/image.png",
      params: "Three, Three",
      visibility: true,
    },
    {
      id: 4,
      name: "Four",
      icon: "/images/image.png",
      params: "Four, Four",
      visibility: true,
    },
    {
      id: 5,
      name: "Five",
      icon: "/images/image.png",
      params: "Five, Five",
      visibility: true,
    },
    {
      id: 1,
      name: "One",
      icon: "/images/image.png",
      params: "One, One",
      visibility: true,
    },
    {
      id: 2,
      name: "Two",
      icon: "/images/image.png",
      params: "Two, Two",
      visibility: true,
    },
    {
      id: 3,
      name: "Three",
      icon: "/images/image.png",
      params: "Three, Three",
      visibility: true,
    },
    {
      id: 4,
      name: "Four",
      icon: "/images/image.png",
      params: "Four, Four",
      visibility: true,
    },
    {
      id: 5,
      name: "Five",
      icon: "/images/image.png",
      params: "Five, Five",
      visibility: true,
    },
  ];

  return (
    <Main>
      <Table data={tableData} />
    </Main>
  );
}
