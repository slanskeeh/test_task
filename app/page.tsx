"use client";

import Table from "@/widgets/Table/Table";
import styled from "styled-components";

const Main = styled.main`
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100%;
`;

export default function Home() {
  return (
    <Main>
      <Table />
    </Main>
  );
}
