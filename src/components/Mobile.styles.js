import styled from "styled-components";
/* font-family: 'Antonio', sans-serif; */
/* font-family: 'League Spartan', sans-serif; */

export const PlanetImg = styled.img`
  width: ${(props) => props.ChangeImgSizeMobile};
  height: ${(props) => props.ChangeImgSizeMobile};
  margin-top: 50px;
`;
export const PlanetImgGeology = styled.img`
  display: ${(props) => (props.content === "surface" ? "flex" : "none")};
  position: absolute;
  left: 95px;
  top: 180px;
  width: 70px;
  height: 70px;
`;
export const PlanetImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 260px;
  position: relative;
`;
export const PlanetBox = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const PlanetTitle = styled.h1`
  font-family: "Antonio", sans-serif;
  font-size: 40px;
  font-weight: 400;
  color: #fff;
  margin-top: 35px;
  text-transform: uppercase;
`;
export const PlanetDescription = styled.p`
  font-family: "League Spartan", sans-serif;
  font-size: 11px;
  font-weight: 400;
  margin-top: 5px;
  color: #fff;
  width: 300px;
  height: 120px;
  line-height: 22px;
`;
export const PlanetLinkDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const PlanetLink = styled.a`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 80%;
  font-family: "League Spartan", sans-serif;
  font-size: 12px;
  line-height: 25px;
  margin-left: 3px;
  font-weight: 700;
`;
export const PlanetParagraphLink = styled.p`
  font-family: "League Spartan", sans-serif;
  font-size: 12px;
  font-weight: 700;
  opacity: 40%;
`;
export const PlanetInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  width: 327px;
  height: 48px;
  background: rgba(0, 0, 19, 0.1);
  border: 1px solid rgb(128, 128, 128, 0.5);
  margin-top: 8px;
  margin-bottom: 10px;
  position: relative;
`;

export const PlanetInfoText = styled.p`
  font-family: "League Spartan", sans-serif;
  font-weight: 700;
  font-size: 10px;
  margin-left: 24px;
  opacity: 20%;
`;
export const PlanetInfoNumber = styled.p`
  font-family: "Antonio", sans-serif;
  font-size: 20px;
  fill: #fff;
  text-transform: uppercase;
  margin-right: 24px;
`;
export const Line = styled.hr`
  width: 100vw;
  height: 1px;
  background-color: #fff;
  opacity: 20%;
  margin-bottom: 20px;
`;
export const Line2 = styled.hr`
  width: 100vw;
  height: 1px;
  background-color: #fff;
  opacity: 20%;
`;

export const SectionDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 40px;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const SectionTitles1 = styled.h2`
  font-family: "League Spartan", sans-serif;
  font-size: 14px;
  line-height: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: grey;
  color: ${(props) => (props.content === "overview" ? "#fff" : "grey")};
  position: relative;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
`;
export const SectionTitles2 = styled.h2`
  font-family: "League Spartan", sans-serif;
  font-size: 14px;
  line-height: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: grey;
  color: ${(props) => (props.content === "structure" ? "#fff" : "grey")};
  position: relative;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
`;
export const SectionTitles3 = styled.h2`
  font-family: "League Spartan", sans-serif;
  font-size: 14px;
  line-height: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: grey;
  color: ${(props) => (props.content === "surface" ? "#fff" : "grey")};
  position: relative;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
`;
export const SectionTitlesHr1 = styled.hr`
  display: ${(props) => (props.content === "overview" ? "flex" : "none")};
  width: 80px;
  height: 4px;
  background-color: ${(props) => props.ChangeColor()};
  border: none;
  position: absolute;
  top: 27px;
  left: 2px;
`;
export const SectionTitlesHr2 = styled.hr`
  display: ${(props) => (props.content === "structure" ? "flex" : "none")};
  width: 80px;
  height: 4px;
  background-color: ${(props) => props.ChangeColor()};
  border: none;
  position: absolute;
  top: 27px;
  left: 4px;
`;
export const SectionTitlesHr3 = styled.hr`
  display: ${(props) => (props.content === "surface" ? "flex" : "none")};
  width: 80px;
  height: 4px;
  background-color: ${(props) => props.ChangeColor()};
  border: none;
  position: absolute;
  top: 27px;
  left: -5px;
`;
export const Header = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 195px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  align-items: center;
`;
export const HeaderTitle = styled.h1`
  font-family: "Antonio", sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -1px;
  text-transform: uppercase;
`;
export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;
export const Menu = styled.div`
  display: flex;
  padding: 10px;
  top: 60px;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 999;
  overflow-x: hidden;
  background-color: #070724;
`;
export const MercuryColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #def4fc;
`;
export const VenusColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #f7cc7f;
`;
export const EarthColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #545bfe;
`;
export const MarsColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ff6a45;
`;
export const JupiterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ecad7a;
`;
export const SaturnColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fccb6b;
`;
export const UranusColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #65f0d5;
`;
export const NeptuneColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #497efa;
`;
export const PlanetTitleAndColor = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  position: relative;
`;
export const PlanetMenuName = styled.h2`
  font-family: "League Spartan", sans-serif;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  margin-left: 25px;
  margin-right: 25px;
`;
export const MenuHr = styled.hr`
  position: absolute;
  width: 100%;
  height: 1px;
  opacity: 10%;
  top: 44px;
`;
