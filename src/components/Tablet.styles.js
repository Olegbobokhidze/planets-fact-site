import styled from "styled-components";
/* font-family: 'Antonio', sans-serif; */
/* font-family: 'League Spartan', sans-serif; */

export const PlanetButtonAndImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;
export const Holder = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  align-items: center;
`;
export const ContentHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
  }
`;
export const HeaderTitle = styled.h2`
  font-family: "Antonio", sans-serif;
  font-size: 28px;
  margin-bottom: 10px;
  font-weight: 400;
  letter-spacing: -1px;
  text-transform: uppercase;
  margin-top: 30px;
  @media screen and (min-width: 1440px) {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;
export const PlanetPath = styled.h3`
  font-family: "League Spartan", sans-serif;
  font-size: 11px;
  line-height: 25px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
`;
export const PlanetPathLine1 = styled.hr`
  display: ${(props) => (props.planet.name === "Mercury" ? "flex" : "none")};
  bottom: -28px;
  left: -5px;
  width: 65px;
  height: 4px;
  background-color: aliceblue;
  position: absolute;
  border: none;
  transition: 0.5s all ease-in-out;
  background-color: #419ebb;
  @media screen and (min-width: 1440px) {
    top: -31px;
  }
`;
export const PlanetPathLine2 = styled.hr`
  display: ${(props) => (props.planet.name === "Venus" ? "flex" : "none")};
  bottom: -28px;
  left: -7px;
  width: 55px;
  height: 4px;
  background-color: aliceblue;
  position: absolute;
  border: none;
  transition: 0.5s all ease-in-out;
  background-color: #eda249;
  @media screen and (min-width: 1440px) {
    top: -31px;
  }
`;
export const PlanetPathLine3 = styled.hr`
  display: ${(props) => (props.planet.name === "Earth" ? "flex" : "none")};
  bottom: -28px;
  left: -8px;
  width: 55px;
  height: 4px;
  background-color: aliceblue;
  position: absolute;
  border: none;
  transition: 0.5s all ease-in-out;
  background-color: #6d2ed5;
  @media screen and (min-width: 1440px) {
    top: -31px;
  }
`;
export const PlanetPathLine4 = styled.hr`
  display: ${(props) => (props.planet.name === "Mars" ? "flex" : "none")};
  bottom: -28px;
  left: -8px;
  width: 50px;
  height: 4px;
  background-color: aliceblue;
  position: absolute;
  border: none;
  transition: 0.5s all ease-in-out;
  background-color: #d14c32;
  @media screen and (min-width: 1440px) {
    top: -31px;
  }
`;
export const PlanetPathLine5 = styled.hr`
  display: ${(props) => (props.planet.name === "Jupiter" ? "flex" : "none")};
  bottom: -28px;
  left: -5px;
  width: 57px;
  height: 4px;
  background-color: aliceblue;
  position: absolute;
  border: none;
  transition: 0.5s all ease-in-out;
  background-color: #d83a34;
  @media screen and (min-width: 1440px) {
    top: -31px;
  }
`;
export const PlanetPathLine6 = styled.hr`
  display: ${(props) => (props.planet.name === "Saturn" ? "flex" : "none")};
  bottom: -28px;
  left: -5px;
  width: 60.5px;
  height: 4px;
  background-color: aliceblue;
  position: absolute;
  border: none;
  transition: 0.5s all ease-in-out;
  background-color: #cd5120;
  @media screen and (min-width: 1440px) {
    top: -31px;
  }
`;
export const PlanetPathLine7 = styled.hr`
  display: ${(props) => (props.planet.name === "Uranus" ? "flex" : "none")};
  bottom: -28px;
  left: -5px;
  width: 61px;
  height: 4px;
  background-color: aliceblue;
  position: absolute;
  border: none;
  transition: 0.5s all ease-in-out;
  background-color: #1ec1a2;
  @media screen and (min-width: 1440px) {
    top: -31px;
  }
`;
export const PlanetPathLine8 = styled.hr`
  display: ${(props) => (props.planet.name === "Neptune" ? "flex" : "none")};
  bottom: -28px;
  left: -5px;
  width: 65px;
  height: 4px;
  background-color: aliceblue;
  position: absolute;
  border: none;
  transition: 0.5s all ease-in-out;
  background-color: #2d68f0;
  @media screen and (min-width: 1440px) {
    top: -31px;
  }
`;
export const PlanetLine = styled.hr`
  width: 100%;
  opacity: 20%;
  height: 1px;
  margin-bottom: 27px;
`;
export const PlanetNameHolder = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto;
  column-gap: 33px;
  margin-top: 10px;
  margin-bottom: 27px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
`;
export const PlanetImg = styled.img`
  width: ${(props) => props.ChangeImgSize};
  height: ${(props) => props.ChangeImgSize};
  position: relative;
  @media screen and (min-width: 1440px) {
    width: ${(props) => props.ChangeImgSizeDesktop};
    height: ${(props) => props.ChangeImgSizeDesktop};
  }
`;
export const PlanetImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 430px;
  height: 430px;
  position: relative;
  @media screen and (min-width: 1440px) {
    width: 670px;
    height: 670px;
    margin-right: 110px;
  }
`;
export const PlanetImgGeology = styled.img`
  display: ${(props) => (props.content === "surface" ? "flex" : "none")};
  position: absolute;
  left: 165px;
  top: 270px;
  width: 100px;
  height: 120px;
  @media screen and (min-width: 1440px) {
    width: 163px;
    height: 199px;
    left: 253px;
    top: 415px;
  }
`;
export const PlanetName = styled.h1`
  font-family: "Antonio", sans-serif;
  font-size: 48px;
  font-weight: 400;
  line-height: 62px;
  text-transform: uppercase;
  margin-bottom: 24px;
  @media screen and (min-width: 1440px) {
    font-size: 80px;
    line-height: 103px;
  }
`;
export const PlanetInfo = styled.p`
  font-family: "League Spartan", sans-serif;
  font-size: 11px;
  line-height: 22px;
  opacity: 75%;
  width: 300px;
  height: 110px;
  @media screen and (min-width: 1440px) {
    font-size: 14px;
    width: 350px;
    height: 120px;
  }
`;
export const PlanetInfoName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
`;
export const ButtonsHolder = styled.div`
  display: grid;
  grid-template-columns: auto;
  margin-top: 30px;
`;
export const ButtonsAndPlanet = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 100px;
  margin-top: 50px;
  @media screen and (min-width: 1440px) {
    grid-template-columns: auto;
  }
`;
export const ButtonPath1 = styled.button`
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: center;
  padding: 10px;
  margin-bottom: 16px;
  width: 281px;
  height: 40px;
  background: rgba(0, 0, 19, 0.1);
  background-color: ${(props) =>
    props.content === "overview" ? props.ChangeColor() : "rgba(0, 0, 19, 0.1)"};
  border: 1px solid rgb(128, 128, 128, 0.5);
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.content === "overview"
        ? props.ChangeColor()
        : "rgb(128, 128, 128, 0.5)"};
    transition: 0.5s;
  }
  @media screen and (min-width: 1440px) {
    width: 350px;
    height: 48px;
  }
`;
export const ButtonPath2 = styled.button`
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: center;
  padding: 10px;
  margin-bottom: 16px;
  width: 281px;
  height: 40px;
  background: rgba(0, 0, 19, 0.1);
  background-color: ${(props) =>
    props.content === "structure"
      ? props.ChangeColor()
      : "rgba(0, 0, 19, 0.1)"};
  border: 1px solid rgb(128, 128, 128, 0.5);
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.content === "structure"
        ? props.ChangeColor()
        : "rgb(128, 128, 128, 0.5)"};
    transition: 0.5s;
  }
  @media screen and (min-width: 1440px) {
    width: 350px;
    height: 48px;
  }
`;
export const ButtonPath3 = styled.button`
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: center;
  padding: 10px;
  margin-bottom: 16px;
  width: 281px;
  height: 40px;
  background: rgba(0, 0, 19, 0.1);
  background-color: ${(props) =>
    props.content === "surface" ? props.ChangeColor() : "rgba(0, 0, 19, 0.1)"};
  border: 1px solid rgb(128, 128, 128, 0.5);
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.content === "surface"
        ? props.ChangeColor()
        : "rgb(128, 128, 128, 0.5)"};
    transition: 0.5s;
  }
  @media screen and (min-width: 1440px) {
    width: 350px;
    height: 48px;
  }
`;
export const InfoBoxHolder = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 9px;
  margin-top: 10px;
  margin-bottom: 10px;
  @media screen and (min-width: 1440px) {
    column-gap: 37.5px;
  }
`;
export const InfoBox = styled.div`
  width: 164px;
  height: 88px;
  background: rgba(0, 0, 19, 0.1);
  border: 1px solid rgb(128, 128, 128, 0.5);
  padding: 15px;
  @media screen and (min-width: 1440px) {
    width: 255px;
    height: 128px;
  }
`;
export const PlanetInfoText = styled.p`
  color: #fff;
  font-family: "League Spartan", sans-serif;
  font-weight: 700;
  font-size: 10px;
  opacity: 20%;
  text-transform: uppercase;
  margin-top: 3px;
  @media screen and (min-width: 1440px) {
    font-size: 12px;
  }
`;
export const PlanetInfoNumber = styled.p`
  font-family: "Antonio", sans-serif;
  font-size: 24px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: -1px;
  line-height: 31px;
  margin-top: 6px;
  @media screen and (min-width: 1440px) {
    font-size: 40px;
    margin-top: 20px;
  }
`;
export const InfoButtonText = styled.p`
  font-family: "Antonio", sans-serif;
  font-size: 10px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 25px;
  margin-left: 10px;
  @media screen and (min-width: 1440px) {
    font-size: 12px;
  }
`;
export const PlanetLinkDiv = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;
export const PlanetLink = styled.a`
  color: white;
  display: flex;
  justify-content: left;
  align-items: center;
  opacity: 80%;
  font-family: "League Spartan", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 25px;
  margin-left: 5px;
  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }
`;
export const PlanetParagraphLink = styled.p`
  font-family: "League Spartan", sans-serif;
  font-weight: 700;
  font-size: 12px;
  opacity: 40%;
  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }
`;
