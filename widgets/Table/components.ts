"use client";

import styled from "styled-components";

export const TableWrapper = styled.div`
  background-color: #fff;
  border-radius: 16px;
  max-width: 1132px;
  width: 100%;

  padding: 88px 30px 60px 30px;

  height: clamp(480px, 780px, 100vh);

  display: flex;
  flex-direction: column;
  gap: 12px;

  overflow: hidden;

  @media screen and (max-width: 560px) {
    padding: 30px 16px 30px 16px;
    height: 680px;
  }
`;

export const TableHead = styled.thead`
  width: 100%;
  display: flex;
`;

export const TableHeadRow = styled.tr`
  display: grid;
  grid-template-columns:
    minmax(200px, 1.5fr) minmax(120px, 2fr) minmax(100px, 2fr)
    40px;
  gap: 12px;

  background-color: #f9f9f9;
  padding: 9px 0;

  border-radius: 12px;

  /* width: 100%; */

  th {
    &:first-child {
      padding-left: 44px;
    }
  }

  @media screen and (max-width: 560px) {
    grid-template-columns:
      minmax(170px, 1.5fr) minmax(80px, 2fr) minmax(60px, 2fr)
      24px;
  }
`;

export const TableHeader = styled.th`
  color: #6e7b97;
  font-size: 12px;
  line-height: 15px;
  font-weight: 600;

  display: flex;
`;

export const TableTable = styled.table`
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-x: scroll;
  width: 100%;
`;

export const TableBody = styled.tbody`
  tr {
    &:nth-child(n + 1) {
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        display: block;
        width: 100%;
        height: 2px;
        background-color: #f9f9f9;
      }
    }

    &:last-child {
      &:after {
        display: none;
      }
    }
  }
`;
