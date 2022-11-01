import React from "react";
import styled from "styled-components";

const Icon = styled.svg`
  position: absolute;
  top: 16px;
  right: 10px;
`;
const IconChevron = () => {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" width="6" height="8">
      <path fill="none" stroke="#FFF" opacity=".3" d="M1 0l4 4-4 4" />
    </Icon>
  );
};

export default IconChevron;
