"use client";

import styled from "styled-components";

const ToggleContainer = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 40px;
  height: 24px;
  border-radius: 12px;
  background-color: ${(props) => (props.checked ? "#5F9CF7" : "#e5e5ea")};
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s;
`;

const ToggleCircle = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 100%;
  position: absolute;
  top: 2px;
  left: ${(props) => (props.checked ? "18px" : "2px")};
  transition: left 0.2s;
  box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.06), 0 3px 8px 0 rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(0, 0, 0, 0.04);
`;

const Toggle = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
}) => {
  const handleToggle = () => {
    onChange(!checked);
  };
  return (
    <ToggleContainer checked={checked} onClick={handleToggle}>
      <ToggleCircle checked={checked} />
    </ToggleContainer>
  );
};

export default Toggle;
