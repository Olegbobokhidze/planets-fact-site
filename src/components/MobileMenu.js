import React from "react";
import {
  Menu,
  MercuryColor,
  VenusColor,
  EarthColor,
  MarsColor,
  JupiterColor,
  SaturnColor,
  UranusColor,
  NeptuneColor,
  PlanetTitleAndColor,
  PlanetMenuName,
  MenuHr,
} from "./Mobile.styles";
import { NavLink } from "react-router-dom";
import IconChevron from "../svgs/IconChevron";
import styled from "styled-components";

const NavBarLink = styled(NavLink)`
  text-decoration: none;
  margin-right: 5px;
`;
export default function MobileMenu({ setPlanetName, planetName, setMenu }) {
  return (
    <Menu>
      <NavBarLink
        to="/Mercury"
        onClick={() => setPlanetName("Mercury") + setMenu(false)}
      >
        <PlanetTitleAndColor>
          <MercuryColor></MercuryColor>
          <PlanetMenuName>Mercury</PlanetMenuName>
          <IconChevron />
          <MenuHr />
        </PlanetTitleAndColor>
      </NavBarLink>
      <NavBarLink
        onClick={() => setPlanetName("Venus") + setMenu(false)}
        to="/Venus"
      >
        <PlanetTitleAndColor>
          <VenusColor></VenusColor>
          <PlanetMenuName>Venus</PlanetMenuName>
          <IconChevron />
          <MenuHr />
        </PlanetTitleAndColor>
      </NavBarLink>
      <NavBarLink
        to="/Earth"
        onClick={() => setPlanetName("Earth") + setMenu(false)}
      >
        <PlanetTitleAndColor>
          <EarthColor></EarthColor>
          <PlanetMenuName>Earth</PlanetMenuName>
          <IconChevron />
          <MenuHr />
        </PlanetTitleAndColor>
      </NavBarLink>
      <NavBarLink
        to="/Mars"
        onClick={() => setPlanetName("Mars") + setMenu(false)}
      >
        <PlanetTitleAndColor>
          <MarsColor></MarsColor>
          <PlanetMenuName>Mars</PlanetMenuName>
          <IconChevron />
          <MenuHr />
        </PlanetTitleAndColor>
      </NavBarLink>
      <NavBarLink
        to="/Jupiter"
        onClick={() => setPlanetName("Jupiter") + setMenu(false)}
      >
        <PlanetTitleAndColor>
          <JupiterColor></JupiterColor>
          <PlanetMenuName>Jupiter</PlanetMenuName>
          <IconChevron />
          <MenuHr />
        </PlanetTitleAndColor>
      </NavBarLink>
      <NavBarLink
        to="/Saturn"
        onClick={() => setPlanetName("Saturn") + setMenu(false)}
      >
        <PlanetTitleAndColor>
          <SaturnColor></SaturnColor>
          <PlanetMenuName>Saturn</PlanetMenuName>
          <IconChevron />
          <MenuHr />
        </PlanetTitleAndColor>
      </NavBarLink>
      <NavBarLink
        to="/Uranus"
        onClick={() => setPlanetName("Uranus") + setMenu(false)}
      >
        <PlanetTitleAndColor>
          <UranusColor></UranusColor>
          <PlanetMenuName>Uranus</PlanetMenuName>
          <IconChevron />
          <MenuHr />
        </PlanetTitleAndColor>
      </NavBarLink>
      <NavBarLink
        to="/Neptune"
        onClick={() => setPlanetName("Neptune") + setMenu(false)}
      >
        <PlanetTitleAndColor>
          <NeptuneColor></NeptuneColor>
          <PlanetMenuName>Neptune</PlanetMenuName>
          <IconChevron />
          <MenuHr />
        </PlanetTitleAndColor>
      </NavBarLink>
    </Menu>
  );
}
