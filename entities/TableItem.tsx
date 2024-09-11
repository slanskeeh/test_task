"use client";

import ButtonDelete from "@/features/ButtonDelete";
import DragNDropDots from "@/features/DragNDropDots";
import Icon from "@/features/Icon";
import Toggle from "@/features/Toggle";
import { MutableRefObject, useRef, useState } from "react";
import styled from "styled-components";

const TableRow = styled.tr<{ $visibility: boolean; $isDragging: boolean }>`
  display: grid;
  grid-template-columns: 1.5fr 2fr 2fr 40px;
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
`;

const TableItemInfoWrapper = styled.td`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const TableItemText = styled.p`
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  margin-left: -8px;

  max-width: 150px;
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
          <TableItemText>{cropTextContent(data.name)}</TableItemText>
        </TableItemInfoWrapper>
        <td>
          <TableItemText>{cropTextContent(data.params)}</TableItemText>
        </td>
        <td>
          <Toggle checked={visibility} onChange={setVisibility} />
        </td>
        <td>
          <ButtonDelete handler={() => deleteItem(data.id)} />
        </td>
      </TableRow>
    </>
  );
};

export default TableItem;
