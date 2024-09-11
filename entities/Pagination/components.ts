"use client";

import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  /* height: 100%; */
  margin-top: auto;
`;

export const PaginationArrowButton = styled.button`
  cursor: pointer;
  border: 1px solid #a0a0a0;
  border-radius: 6px;
  background-color: #f9f9f9;

  padding: 6px;
  height: 30px;
  color: #6e7b97;
  font-size: 12px;
  line-height: 15px;
  font-weight: 600;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
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
