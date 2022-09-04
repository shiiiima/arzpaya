import React, { useState } from "react";
import "./App.css";
import ToggleButton from "./Components/Toggle/Toggle";
import {
  lightTheme,
  darkTheme,
  GlobalStyles,
} from "./Components/Themes/Themes";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Defaultt from "./Pages/Default/Default";
import Defi from "./Pages/Defi/Defi";
import NFT from "./Pages/NFT/NFT";
import Metaverse from "./Pages/Metaverse/Metaverse";
import Favorites from "./Pages/Favorites/Favorites";
function App() {
  const [theme, setTheme] = useState("light");
  const [fav, setFav] = useState([]);
  const [iconFAv, setIconFav] = useState(true);
  const [toggle, setToggle] = useState(false);
  const ThemeToggle = () => {
    setToggle(!toggle);
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const StyledApp = styled.div`
    color: ${(props) => props.theme.fontColor};
  `;

  const handleFAvorites = (id) => {
    if (!fav.includes(id)) {
      setFav([...fav, id]);
      setIconFav(false);
    } else {
      setIconFav(true);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <StyledApp className="App">
          <Router>
            <GlobalStyles />

            <ToggleButton toggle={toggle} ThemeToggle={ThemeToggle} />

            <Header />
            <Switch>
              <Route path="/" exact component={Defaultt}>
                <Defaultt handleFAvorites={handleFAvorites} />
              </Route>
              <Route path={"/defi"}>
                <Defi handleFAvorites={handleFAvorites} />
              </Route>
              <Route path={"/nft"}>
                <NFT handleFAvorites={handleFAvorites} />
              </Route>
              <Route path={"/metaverse"}>
                <Metaverse handleFAvorites={handleFAvorites} />
              </Route>
              <Route path={"/favorites"}>
                <Favorites fav={fav} />
              </Route>
            </Switch>
          </Router>
        </StyledApp>
      </ThemeProvider>
    </>
  );
}

export default App;
