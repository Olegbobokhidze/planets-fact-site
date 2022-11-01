import React from "react";
import PlanetsData from "./data.json";
import MenuIcon from "../svgs/MenuIcon";
import MobileContent from "./MobileContent";
import MobileMenu from "./MobileMenu";
import { Header, HeaderTitle, Holder } from "./Mobile.styles.js";
import { useState } from "react";
import { useEffect } from "react";
import TabletContent from "./TabletContent";
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
function ChangeColor(planet) {
  if (planet.name === "Mercury") {
    return "#419EBB";
  } else if (planet.name === "Venus") {
    return "#EDA249";
  } else if (planet.name === "Earth") {
    return "#6D2ED5";
  } else if (planet.name === "Mars") {
    return "#D14C32";
  } else if (planet.name === "Jupiter") {
    return "#D83A34";
  } else if (planet.name === "Saturn") {
    return "#CD5120";
  } else if (planet.name === "Uranus") {
    return "#1EC1A2";
  } else if (planet.name === "Neptune") {
    return "#2D68F0";
  }
}
function ChangeImgSizeMobile(planet) {
  if (planet.name === "Mercury") {
    return "111px";
  } else if (planet.name === "Venus") {
    return "154px";
  } else if (planet.name === "Earth") {
    return "173px";
  } else if (planet.name === "Mars") {
    return "129px";
  } else if (planet.name === "Jupiter") {
    return "224px";
  } else if (planet.name === "Saturn") {
    return "256px";
  } else if (planet.name === "Uranus") {
    return "176px";
  } else if (planet.name === "Neptune") {
    return "173px";
  }
}
function ChangeImgSize(planet) {
  if (planet.name === "Mercury") {
    return "184px";
  } else if (planet.name === "Venus") {
    return "253px";
  } else if (planet.name === "Earth") {
    return "285px";
  } else if (planet.name === "Mars") {
    return "213px";
  } else if (planet.name === "Jupiter") {
    return "369px";
  } else if (planet.name === "Saturn") {
    return "400px";
  } else if (planet.name === "Uranus") {
    return "290px";
  } else if (planet.name === "Neptune") {
    return "285px";
  }
}
function ChangeImgSizeDesktop(planet) {
  if (planet.name === "Mercury") {
    return "290px";
  } else if (planet.name === "Venus") {
    return "400px";
  } else if (planet.name === "Earth") {
    return "450px";
  } else if (planet.name === "Mars") {
    return "336px";
  } else if (planet.name === "Jupiter") {
    return "582px";
  } else if (planet.name === "Saturn") {
    return "660px";
  } else if (planet.name === "Uranus") {
    return "458px";
  } else if (planet.name === "Neptune") {
    return "450px";
  }
}

export function Planets({
  ChangeContent,
  ChangeImg,
  content,
  setContent,
  ChangeLink,
  setPlanetName,
  planetName,
}) {
  const [menu, setMenu] = useState(false);
  const { height, width } = useWindowDimensions();
  return (
    <Holder>
      {PlanetsData.filter((planet) => planet.name === planetName).map(
        (planet) => {
          return (
            <>
              {width < 768 ? (
                <>
                  {menu ? (
                    <MobileMenu
                      setPlanetName={setPlanetName}
                      planetName={planetName}
                      setMenu={setMenu}
                    />
                  ) : null}
                  <Header>
                    <HeaderTitle>the planets</HeaderTitle>
                    <MenuIcon
                      setMenu={setMenu}
                      menu={menu}
                      setPlanetName={setPlanetName}
                    />
                  </Header>
                  <MobileContent
                    setPlanetName={setPlanetName}
                    content={content}
                    ChangeColor={() => ChangeColor(planet)}
                    ChangeImg={() => ChangeImg(planet)}
                    ChangeLink={() => ChangeLink(planet)}
                    ChangeContent={() => ChangeContent(planet)}
                    setContent={setContent}
                    planet={planet}
                    ChangeImgSizeMobile={() => ChangeImgSizeMobile(planet)}
                  />
                </>
              ) : (
                <TabletContent
                  setPlanetName={setPlanetName}
                  content={content}
                  ChangeColor={() => ChangeColor(planet)}
                  ChangeImg={() => ChangeImg(planet)}
                  ChangeContent={() => ChangeContent(planet)}
                  setContent={setContent}
                  planet={planet}
                  ChangeImgSize={() => ChangeImgSize(planet)}
                  ChangeImgSizeDesktop={() => ChangeImgSizeDesktop(planet)}
                  ChangeLink={() => ChangeLink(planet)}
                />
              )}
            </>
          );
        }
      )}
    </Holder>
  );
}
