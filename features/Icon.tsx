"use client";

import Image from "next/image";
import styled from "styled-components";

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

const Icon = ({ src, alt }: { src: string; alt?: string }) => {
  return (
    <IconWrapper>
      <Image fill src={src} alt={alt || ""} />
    </IconWrapper>
  );
};

export default Icon;
