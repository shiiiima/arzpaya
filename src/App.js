import React, { useState ,useEffect} from 'react';
import GetInfo from './Services/GetInfo';
import './App.css';
import ToggleButton from "./Components/Toggle/Toggle"
import { lightTheme, darkTheme , GlobalStyles } from './Components/Themes/Themes';
import styled, { ThemeProvider } from "styled-components"
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Defaultt from './Pages/Default/Default';
import Defi from './Pages/Defi/Defi';
import NFT from './Pages/NFT/NFT';
import Metaverse from './Pages/Metaverse/Metaverse';
import Favorites from './Pages/Favorites/Favorites';
function App() {
  const [theme, setTheme] = useState("light")
  const [fav, setFav] = useState([])
  const [iconFAv, setIconFav] = useState(true)
  const [toggle, setToggle] = useState(false);
  const triggerToggle = () => {
    
    

  }
  const ThemeToggle = () => {
    setToggle(!toggle)
    theme === "light" ? setTheme("dark") : setTheme("light")
  }
  const StyledApp = styled.div`
  color:${(props) => props.theme.fontColor}
  
  `



  const handleFAvorites = (id) => {
      if (!fav.includes(id)) {
        setFav([...fav, id])
       setIconFav(false)
      }
      else {
        setIconFav(true)
}
  }


 

  return (
    <>
          <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>

      <StyledApp className="App">
  
    <Router>
            



            <GlobalStyles />
    
              <ToggleButton toggle={toggle} ThemeToggle={ ThemeToggle} />
      
         

  <Header/>
        <Routes>

              <Route path="/" exact element={<Defaultt iconFAv={iconFAv}  handleFAvorites={handleFAvorites } />} />
            <Route path={"/defi"} element={<Defi  handleFAvorites={handleFAvorites }/>} />
            <Route path="/nft" element={<NFT  handleFAvorites={handleFAvorites }/>} />
          <Route path="/metaverse" element={<Metaverse   handleFAvorites={handleFAvorites }/>} />
          <Route path="/favorites"  element={<Favorites  fav={fav}/>  } />
            </Routes>

    
          </Router>
    
        </StyledApp>
        </ThemeProvider>
      </>
   
  );
}

export default App;