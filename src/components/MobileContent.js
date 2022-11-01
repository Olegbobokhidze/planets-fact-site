import React from "react";
import {
  PlanetInfoNumber,
  PlanetImg,
  PlanetTitle,
  PlanetDescription,
  PlanetLink,
  PlanetParagraphLink,
  PlanetLinkDiv,
  PlanetInfoBox,
  PlanetInfoText,
  PlanetBox,
  Line,
  Line2,
  SectionDiv,
  SectionTitles1,
  SectionTitles2,
  SectionTitles3,
  SectionTitlesHr1,
  SectionTitlesHr2,
  SectionTitlesHr3,
  PlanetImgDiv,
  PlanetImgGeology,
} from "./Mobile.styles.js";
import IconLink from "../svgs/IconLink.js";
export default function MobileContent({
  content,
  setContent,
  planet,
  ChangeImg,
  ChangeContent,
  ChangeColor,
  ChangeLink,
  ChangeImgSizeMobile,
}) {
  return (
    <>
      <Line2 />
      <SectionDiv>
        <SectionTitles1
          onClick={() => setContent("overview")}
          content={content}
        >
          overview
          <SectionTitlesHr1 content={content} ChangeColor={ChangeColor} />
        </SectionTitles1>
        <SectionTitles2
          onClick={() => setContent("structure")}
          content={content}
        >
          structure
          <SectionTitlesHr2 content={content} ChangeColor={ChangeColor} />
        </SectionTitles2>
        <SectionTitles3 onClick={() => setContent("surface")} content={content}>
          surface
          <SectionTitlesHr3 content={content} ChangeColor={ChangeColor} />
        </SectionTitles3>
      </SectionDiv>
      <Line />
      <PlanetBox>
        <PlanetImgDiv content={content} planet={planet}>
          <PlanetImg
            key={planet.name}
            alt={planet.name}
            src={ChangeImg(planet)}
            ChangeImgSizeMobile={ChangeImgSizeMobile(planet)}
            content={content}
            planet={planet}
          />
          <PlanetImgGeology
            src={process.env.PUBLIC_URL + planet.images.geology}
            content={content}
          />
        </PlanetImgDiv>
        <PlanetTitle>{planet.name}</PlanetTitle>
        <PlanetDescription>{ChangeContent(planet)}</PlanetDescription>
        <PlanetLinkDiv>
          <PlanetParagraphLink>Source: </PlanetParagraphLink>
          <PlanetLink href={ChangeLink(planet)}>
            Wikipedia
            <IconLink />
          </PlanetLink>
        </PlanetLinkDiv>
        <PlanetInfoBox>
          <PlanetInfoText>ROTATION</PlanetInfoText>
          <PlanetInfoNumber>{planet.rotation}</PlanetInfoNumber>
        </PlanetInfoBox>
        <PlanetInfoBox>
          <PlanetInfoText>REVOLUTION TIME</PlanetInfoText>
          <PlanetInfoNumber>{planet.revolution}</PlanetInfoNumber>
        </PlanetInfoBox>
        <PlanetInfoBox>
          <PlanetInfoText>RADIUS</PlanetInfoText>
          <PlanetInfoNumber>{planet.radius}</PlanetInfoNumber>
        </PlanetInfoBox>
        <PlanetInfoBox>
          <PlanetInfoText>AVERAGE TEMP.</PlanetInfoText>
          <PlanetInfoNumber>{planet.temperature}</PlanetInfoNumber>
        </PlanetInfoBox>
      </PlanetBox>
    </>
  );
}
