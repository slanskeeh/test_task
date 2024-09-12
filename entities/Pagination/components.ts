"use client";

import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  /* height: 100%; */
  margin: 0 auto;
  margin-top: auto;
`;

export const PaginationArrowButton = styled.button<{
  $direction: "prev" | "next";
}>`
  cursor: pointer;
  border: 1px solid #a0a0a0;
  border-radius: 6px;
  background-color: #f9f9f9;

  padding: 6px;
  height: 30px;
  width: 30px;
  color: #6e7b97;
  font-size: 12px;
  line-height: 15px;
  font-weight: 600;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  position: relative;

  &:before {
    content: "";
    width: 8px;
    height: 1px;

    position: absolute;
    background-color: #6e7b97;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -3px)
      ${(props) =>
        props.$direction === "next" ? "rotate(45deg)" : "rotate(-45deg)"};
  }
  &:after {
    content: "";
    width: 8px;
    height: 1px;

    position: absolute;
    background-color: #6e7b97;

    top: 50%;
    left: 50%;

    transform: translate(-50%, 3px)
      ${(props) =>
        props.$direction === "next" ? "rotate(-45deg)" : "rotate(45deg)"};
  }
`;

export const PaginationPageButton = styled.button`
  cursor: pointer;
  border: 1px solid #a0a0a0;
  border-radius: 6px;
  background-color: #f9f9f9;
  height: 30px;
  width: 30px;

  padding: 6px;
  color: #6e7b97;
  font-size: 12px;
  line-height: 15px;
  font-weight: 600;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PaginationPagesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
