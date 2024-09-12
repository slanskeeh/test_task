"use client";

import styled from "styled-components";

const Button = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  background-color: #f9f9f9;
  border: none;

  cursor: pointer;

  @media screen and (max-width: 560px) {
    width: 24px;
    height: 24px;
  }
`;

const Cross = styled.div`
  width: 12px;
  height: 12px;
  position: relative;

  @media screen and (max-width: 560px) {
    width: 7px;
    height: 7px;
  }

  &::before {
    content: "";
    width: 17px;
    height: 2px;
    border-radius: 2px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background-color: #f93c47;

    @media screen and (max-width: 560px) {
      width: 10px;
      height: 1px;
    }
  }

  &::after {
    content: "";
    width: 17px;
    height: 2px;
    border-radius: 2px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    background-color: #f93c47;

    @media screen and (max-width: 560px) {
      width: 10px;
      height: 1px;
    }
  }
`;

const ButtonDelete = ({ handler }: { handler: () => void }) => {
  return (
    <Button onClick={handler}>
      <Cross />
    </Button>
  );
};

export default ButtonDelete;
