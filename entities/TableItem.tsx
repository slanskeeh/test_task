"use client";

import ButtonDelete from "@/features/ButtonDelete";
import DragNDropDots from "@/features/DragNDropDots";
import Icon from "@/features/Icon";
import Toggle from "@/features/Toggle";
import { MutableRefObject, useRef, useState } from "react";
import styled from "styled-components";

const TableRow = styled.tr<{ $visibility: boolean; $isDragging: boolean }>`
  display: grid;
  grid-template-columns:
    minmax(200px, 1.5fr) minmax(120px, 2fr) minmax(100px, 2fr)
    40px;
  gap: 12px;
  transition: 0.2s;
  opacity: ${(props) => (props.$visibility ? "1" : "0.3")};

  align-items: center;

  position: relative;

  height: 76px;

  cursor: pointer;

  background-color: ${({ $isDragging }) => ($isDragging ? "#f9f9f9" : "white")};
  ${({ $isDragging }) =>
    $isDragging &&
    `
    position: relative;
    z-index: 1000;
    transform: scale(0.99 );
  `}

  @media screen and (max-width: 560px) {
    grid-template-columns:
      minmax(170px, 1.5fr) minmax(80px, 2fr) minmax(60px, 2fr)
      24px;
  }
`;

const TableItemInfoWrapper = styled.td`
  display: flex;
  gap: 20px;
  align-items: center;

  @media screen and (max-width: 560px) {
    gap: 16px;
  }
`;

const TableItemText = styled.p`
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;

  width: fit-content;

  @media screen and (max-width: 560px) {
    font-size: 12px;
  }
`;

const TableRowContent = styled.td`
  display: flex;
  justify-content: start;
  width: 100%;
`;

const TableItem = ({
  data,
  deleteItem,
  onDragStart,
  onDragOver,
  onDrop,
  isDragging,
}: {
  data: {
    id: number;
    name: string;
    icon: string;
    params: string;
  };
  deleteItem: (id: number) => void;
  onDragStart: (e: React.DragEvent<HTMLTableRowElement>, id: number) => void;
  onDragOver: (e: React.DragEvent<HTMLTableRowElement>) => void;
  onDrop: (id: number) => void;
  isDragging: boolean;
}) => {
  const [visibility, setVisibility] = useState<boolean>(true);

  const cropTextContent = (text: string, length: number = 13) =>
    text.length > length ? text.slice(0, length - 3) + "..." : text;

  return (
    <>
      <TableRow
        onDragStart={visibility ? (e) => onDragStart(e, data.id) : undefined}
        onDragOver={visibility ? onDragOver : undefined}
        onDrop={visibility ? () => onDrop(data.id) : undefined}
        $visibility={visibility}
        draggable={visibility}
        $isDragging={isDragging}
      >
        <TableItemInfoWrapper>
          <DragNDropDots isActive={isDragging} />
          <Icon src={data.icon} />
          <TableItemText style={{ marginLeft: "-8px" }}>
            {cropTextContent(data.name)}
          </TableItemText>
        </TableItemInfoWrapper>
        <TableRowContent>
          <TableItemText>{cropTextContent(data.params)}</TableItemText>
        </TableRowContent>
        <TableRowContent>
          <Toggle checked={visibility} onChange={setVisibility} />
        </TableRowContent>
        <TableRowContent>
          <ButtonDelete handler={() => deleteItem(data.id)} />
        </TableRowContent>
      </TableRow>
    </>
  );
};

export default TableItem;
