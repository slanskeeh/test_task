"use client";

import styled from "styled-components";

const Dot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: #6e7b97;
`;

const DotsGrid = styled.div`
  cursor: pointer;
  display: grid;
  gap: 3px;
  grid-template-columns: repeat(2, 4px);
  grid-template-rows: repeat(3, 4px);
`;

const DragNDropDots = () => {
  return (
    <DotsGrid>
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
