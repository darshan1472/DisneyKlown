import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import NewToDisney from './NewToDisney';
import Originals from './Originals';
import Viewers from './Viewers';
import Trending from './Trending';
import Recommends from './Recommends';





function Home() {
  return (
   <Container>
    <ImgSlider/>
    <Viewers/>
    <Recommends/>
    <NewToDisney/>
    <Originals/>
    <Trending/>
   </Container>
  )
}

export default Home

const Container =styled.main`

  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after{
    background: url('images/home-background.png') center center/cover no-repeat fixed;
    content: "";
    position: absolute;
    inset:0px;
    opacity: 1;
    z-index: -1;
  }


`