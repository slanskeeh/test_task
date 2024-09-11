"use client";

import TableItem from "@/entities/TableItem";
import Search from "@/features/Search";
import { useEffect, useRef, useState } from "react";
import {
  TableBody,
  TableHeader,
  TableHeadRow,
  TableTable,
  TableWrapper,
} from "./components";
import Pagination from "@/entities/Pagination/Pagination";

interface TableDataItem {
  id: number;
  name: string;
  icon: string;
  params: string;
}

const ITEMS_PER_PAGE = 6;

const Table = ({ data }: { data: TableDataItem[] }) => {
  if (!data) return;
  const [items, setItems] = useState<TableDataItem[]>(data);
  const [draggingItemId, setDraggingItemId] = useState<number | null>(null);
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const dragImageRef = useRef<HTMLElement | null>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    setDraggingItemId(id);

    // Создаем кастомное изображение для drag preview
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const copy = target.cloneNode(true) as HTMLElement;
    copy.style.position = "absolute";
    copy.style.top = "-9999px"; // Скрываем элемент из видимости
    document.body.appendChild(copy);
    dragImageRef.current = copy;

    // Устанавливаем кастомное изображение в качестве drag preview
    e.dataTransfer.setDragImage(
      copy,
      e.clientX - rect.left,
      e.clientY - rect.top
    );
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (dragImageRef.current) {
      document.body.removeChild(dragImageRef.current); // Удаляем кастомное изображение
      dragImageRef.current = null;
    }
  };

  const handleDrop = (id: number) => {
    if (draggingItemId === null) return;

    const draggedItemIndex = items.findIndex(
      (item) => item.id === draggingItemId
    );
    const targetItemIndex = items.findIndex((item) => item.id === id);

    if (draggedItemIndex === -1 || targetItemIndex === -1) return;

    const newItems = [...items];
    const [draggedItem] = newItems.splice(draggedItemIndex, 1);
    newItems.splice(targetItemIndex, 0, draggedItem);

    setItems(newItems);
    setDraggingItemId(null);
  };

  const handleDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (searchFilter) {
      setItems(
        data.filter((item) =>
          item.name.toLowerCase().includes(searchFilter.toLowerCase())
        )
      );
    } else {
      setItems(data);
    }
  }, [searchFilter]);

  const tableItems = items.map((item, index) => (
    <TableItem
      key={index}
      isDragging={draggingItemId === item.id}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      data={item}
      deleteItem={handleDelete}
    />
  ));

  return (
    <>
      <TableWrapper>
        <Search setSearchValue={setSearchFilter} />
        <TableTable>
          <thead>
            <TableHeadRow>
              <TableHeader>Товар</TableHeader>
              <TableHeader>Параметры</TableHeader>
              <TableHeader>Видимость</TableHeader>
            </TableHeadRow>
          </thead>
          <TableBody>
            {tableItems.slice(indexOfFirstItem, indexOfLastItem)}
          </TableBody>
        </TableTable>
        {tableItems.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        )}
      </TableWrapper>
    </>
  );
};

export default Table;
