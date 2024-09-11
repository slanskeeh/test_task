"use client";

import styled from "styled-components";

const Dot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: #6e7b97;
`;

const DotsGrid = styled.div<{ $isActive?: boolean }>`
  cursor: pointer;
  display: grid;
  gap: 3px;
  grid-template-columns: repeat(2, 4px);
  grid-template-rows: repeat(3, 4px);
  width: 24px;
  height: 24px;

  align-content: center;
  justify-content: center;

  & > * {
    ${(props) => (props.$isActive ? `background-color: #5F9CF7;` : "")}
  }
`;

const DragNDropDots = ({ isActive = false }: { isActive?: boolean }) => {
  return (
    <DotsGrid $isActive={isActive}>
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
    </DotsGrid>
  );
};

export default DragNDropDots;
