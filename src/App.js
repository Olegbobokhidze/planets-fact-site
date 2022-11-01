import { GlobalStyle } from "./GlobalStyles";
import { Planets } from "./components/Planets";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [planetName, setPlanetName] = useState("Mercury");
  const [content, setContent] = useState("overview");
  function ChangeContent(planet) {
    if (content === "overview") {
      return planet.overview.content;
    } else if (content === "structure") {
      return planet.structure.content;
    } else if (content === "surface") {
      return planet.geology.content;
    }
  }
  function ChangeImg(planet) {
    if (content === "overview") {
      return process.env.PUBLIC_URL + planet.images.planet;
    } else if (content === "structure") {
      return process.env.PUBLIC_URL + planet.images.internal;
    } else if (content === "surface") {
      return process.env.PUBLIC_URL + planet.images.planet;
    }
  }
  function ChangeLink(planet) {
    if (content === "overview") {
      return planet.overview.source;
    } else if (content === "structure") {
      return planet.structure.source;
    } else if (content === "surface") {
      return planet.geology.source;
    }
  }
  return (
    <>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route
            path={"/planets-fact-site/" + planetName}
            element={
              <Planets
                content={content}
                setContent={setContent}
                ChangeImg={ChangeImg}
                ChangeContent={ChangeContent}
                ChangeLink={ChangeLink}
                setPlanetName={setPlanetName}
                planetName={planetName}
              />
            }
          />
          <Route
            path="/planets-fact-site/"
            element={
              <Planets
                content={content}
                setContent={setContent}
                ChangeImg={ChangeImg}
                ChangeContent={ChangeContent}
                ChangeLink={ChangeLink}
                setPlanetName={setPlanetName}
                planetName={planetName}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
