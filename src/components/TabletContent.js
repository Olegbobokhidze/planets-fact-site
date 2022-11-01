import React from "react";
import {
  PlanetButtonAndImg,
  ContentHolder,
  HeaderTitle,
  PlanetImg,
  PlanetInfo,
  PlanetInfoNumber,
  PlanetInfoText,
  PlanetLine,
  PlanetName,
  PlanetNameHolder,
  PlanetPath,
  InfoBox,
  ButtonPath1,
  ButtonPath2,
  ButtonPath3,
  Holder,
  PlanetInfoName,
  ButtonsHolder,
  ButtonsAndPlanet,
  InfoBoxHolder,
  InfoButtonText,
  PlanetPathLine1,
  PlanetPathLine2,
  PlanetPathLine3,
  PlanetPathLine4,
  PlanetPathLine5,
  PlanetPathLine6,
  PlanetPathLine7,
  PlanetPathLine8,
  PlanetImgDiv,
  PlanetImgGeology,
  PlanetLink,
  PlanetParagraphLink,
  PlanetLinkDiv,
} from "./Tablet.styles";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import IconLink from "../svgs/IconLink";
const NavBarLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  opacity: 65%;
  &.active {
    color: white;
    opacity: 1;
  }
`;
export default function TabletContent({
  content,
  setContent,
  planet,
  ChangeImg,
  ChangeContent,
  ChangeColor,
  ChangeImgSize,
  ChangeImgSizeDesktop,
  ChangeLink,
  setPlanetName,
}) {
  return (
    <Holder>
      <ContentHolder>
        <HeaderTitle>the planets</HeaderTitle>
        <PlanetNameHolder>
          <NavBarLink
            to="/Mercury"
            activeclassname="any"
            onClick={() => setPlanetName("Mercury")}
          >
            <PlanetPath>
              mercury
              <PlanetPathLine1 planet={planet} />
            </PlanetPath>
          </NavBarLink>
          <NavBarLink
            to="/Venus"
            onClick={() => setPlanetName("Venus")}
            activeclassname="any"
          >
            <PlanetPath>
              venus
              <PlanetPathLine2 planet={planet} />
            </PlanetPath>
          </NavBarLink>
          <NavBarLink
            to="/Earth"
            onClick={() => setPlanetName("Earth")}
            activeclassname="any"
          >
            <PlanetPath>
              earth
              <PlanetPathLine3 planet={planet} />
            </PlanetPath>
          </NavBarLink>
          <NavBarLink
            to="/Mars"
            onClick={() => setPlanetName("Mars")}
            activeclassname="any"
          >
            <PlanetPath>
              mars
              <PlanetPathLine4 planet={planet} />
            </PlanetPath>
          </NavBarLink>
          <NavBarLink
            to="/Jupiter"
            activeclassname="any"
            onClick={() => setPlanetName("Jupiter")}
          >
            <PlanetPath>
              jupiter
              <PlanetPathLine5 planet={planet} />
            </PlanetPath>
          </NavBarLink>
          <NavBarLink
            to="/Saturn"
            onClick={() => setPlanetName("Saturn")}
            activeclassname="any"
          >
            <PlanetPath>
              saturn
              <PlanetPathLine6 planet={planet} />
            </PlanetPath>
          </NavBarLink>
          <NavBarLink
            to="/Uranus"
            onClick={() => setPlanetName("Uranus")}
            activeclassname="any"
          >
            <PlanetPath>
              uranus
              <PlanetPathLine7 planet={planet} />
            </PlanetPath>
          </NavBarLink>
          <NavBarLink
            to="/Neptune"
            onClick={() => setPlanetName("Neptune")}
            activeclassname="any"
          >
            <PlanetPath>
              neptune
              <PlanetPathLine8 planet={planet} />
            </PlanetPath>
          </NavBarLink>
        </PlanetNameHolder>
      </ContentHolder>
      <PlanetLine />
      <PlanetButtonAndImg>
        <PlanetImgDiv content={content} planet={planet}>
          <PlanetImg
            key={planet.name}
            alt={planet.name}
            src={ChangeImg(planet)}
            ChangeImgSize={ChangeImgSize(planet)}
            ChangeImgSizeDesktop={ChangeImgSizeDesktop(planet)}
            content={content}
            planet={planet}
          />
          <PlanetImgGeology
            src={process.env.PUBLIC_URL + planet.images.geology}
            content={content}
          />
        </PlanetImgDiv>
        <ButtonsAndPlanet>
          <PlanetInfoName>
            <PlanetName>{planet.name}</PlanetName>
            <PlanetInfo>{ChangeContent(planet)}</PlanetInfo>
            <PlanetLinkDiv>
              <PlanetParagraphLink>Source: </PlanetParagraphLink>
              <PlanetLink href={ChangeLink(planet)}>
                Wikipedia
                <IconLink />
              </PlanetLink>
            </PlanetLinkDiv>
          </PlanetInfoName>
          <ButtonsHolder>
            <ButtonPath1
              onClick={() => setContent("overview")}
              content={content}
              ChangeColor={ChangeColor}
            >
              <PlanetInfoText>01</PlanetInfoText>
              <InfoButtonText>overview</InfoButtonText>
            </ButtonPath1>
            <ButtonPath2
              onClick={() => setContent("structure")}
              content={content}
              ChangeColor={ChangeColor}
            >
              <PlanetInfoText>02</PlanetInfoText>
              <InfoButtonText>internal structure</InfoButtonText>
            </ButtonPath2>
            <ButtonPath3
              onClick={() => setContent("surface")}
              content={content}
              ChangeColor={ChangeColor}
            >
              <PlanetInfoText>03</PlanetInfoText>
              <InfoButtonText>surface geology</InfoButtonText>
            </ButtonPath3>
          </ButtonsHolder>
        </ButtonsAndPlanet>
      </PlanetButtonAndImg>
      <InfoBoxHolder>
        <InfoBox>
          <PlanetInfoText>rotation time</PlanetInfoText>
          <PlanetInfoNumber>{planet.rotation}</PlanetInfoNumber>
        </InfoBox>
        <InfoBox>
          <PlanetInfoText>revolution time</PlanetInfoText>
          <PlanetInfoNumber>{planet.revolution}</PlanetInfoNumber>
        </InfoBox>
        <InfoBox>
          <PlanetInfoText>radius time</PlanetInfoText>
          <PlanetInfoNumber>{planet.radius}</PlanetInfoNumber>
        </InfoBox>
        <InfoBox>
          <PlanetInfoText>average temp</PlanetInfoText>
          <PlanetInfoNumber>{planet.temperature}</PlanetInfoNumber>
        </InfoBox>
      </InfoBoxHolder>
    </Holder>
  );
}
