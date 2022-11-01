import React from "react";
import styled from "styled-components";

const Icon = styled.svg`
  opacity: ${(props) => (props.menu === true ? "0.5" : "1")};
  cursor: pointer;
`;
const MenuIcon = ({ setMenu, menu }) => {
  return (
    <Icon
      onClick={() => setMenu((prevMode) => !prevMode)}
      menu={menu}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="17"
    >
      <g fill="#FFF" fillRule="evenodd">
        <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
      </g>
    </Icon>
  );
};

export default MenuIcon;
