import React from 'react';
import { Search } from "./components/SearchAPI/Search";
import './App.css';
import styled from "styled-components";
import { CirclesBackground } from "./components/CirclesBackground/CirclesBackground";
// import {Provider} from "react-redux";

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`


function App() {
    return (
        <Main>
            < Search/>
            <CirclesBackground/>
        </Main>
    );
}

export default App;
