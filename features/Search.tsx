"use client";

import { ChangeEvent, useState } from "react";
import styled from "styled-components";

const SearchWrapper = styled.div`
  cursor: pointer;
  min-width: 216px;
  min-height: 44px;
  width: fit-content;
  padding: 10px;
  display: flex;
  gap: 10px;
  border-radius: 12px;
  background-color: #f9f9f9;
`;

const SearchIcon = styled.span`
  color: #6e7b97;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled.input`
  width: fit-content;
  outline: none;
  border: none;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  &::placeholder {
    color: #6e7b97;
  }
`;

const Search = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <SearchWrapper>
      <SearchIcon>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
            fill="currentColor"
          />
        </svg>
      </SearchIcon>
      <SearchInput placeholder="Поиск" value={value} onChange={handleChange} />
    </SearchWrapper>
  );
};

export default Search;
