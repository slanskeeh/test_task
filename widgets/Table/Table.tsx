"use client";

import TableItem from "@/entities/TableItem";
import Search from "@/features/Search";
import { useState } from "react";
import {
  TableBody,
  TableHeader,
  TableHeadRow,
  TableTable,
  TableWrapper,
} from "./components";

const Table = () => {
  const handleDeleteItem = () => {};
  return (
    <TableWrapper>
      <Search />
      <TableTable>
        <thead>
          <TableHeadRow>
            <TableHeader>Товар</TableHeader>
            <TableHeader>Параметры</TableHeader>
            <TableHeader>Видимость</TableHeader>
          </TableHeadRow>
        </thead>
        <TableBody>
          <TableItem
            data={{
              id: 121,
              name: "name",
              params: "params",
              icon: "/images/image.png",
            }}
            deleteItem={handleDeleteItem}
          />
          <TableItem
            data={{
              id: 121,
              name: "name",
              params: "params",
              icon: "/images/image.png",
            }}
            deleteItem={handleDeleteItem}
          />
          <TableItem
            data={{
              id: 121,
              name: "name",
              params: "paramsefffefefef",
              icon: "/images/image.png",
            }}
            deleteItem={handleDeleteItem}
          />
        </TableBody>
      </TableTable>
    </TableWrapper>
  );
};

export default Table;
