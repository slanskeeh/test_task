"use client";

import ButtonDelete from "@/features/ButtonDelete";
import DragNDropDots from "@/features/DragNDropDots";
import Icon from "@/features/Icon";
import Toggle from "@/features/Toggle";
import { useState } from "react";
import styled from "styled-components";

const TableRow = styled.tr<{ visibility: boolean }>`
  display: grid;
  grid-template-columns: 1.5fr 2fr 2fr 40px;
  gap: 12px;
  transition: 0.2s;
  opacity: ${(props) => (props.visibility ? "1" : "0.3")};

  align-items: center;

  position: relative;

  height: 76px;

  cursor: pointer;
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
}: {
  data: {
    id: number;
    name: string;
    icon: string;
    params: string;
  };
  deleteItem: () => void;
}) => {
  const [visibility, setVisibility] = useState<boolean>(true);

  const cropTextContent = (text: string, length: number = 13) =>
    text.length > length ? text.slice(0, length - 3) + "..." : text;

  return (
    <TableRow visibility={visibility} draggable>
      <TableItemInfoWrapper>
        <DragNDropDots />
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
        <ButtonDelete />
      </td>
    </TableRow>
  );
};

export default TableItem;
