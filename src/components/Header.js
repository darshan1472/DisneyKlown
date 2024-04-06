import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'


function Header() {
  return (
    <Nav>
      <Logo>
        <Link to='/'>
          <img src='/images/logo.svg'alt='disney' />
        </Link>
      </Logo>
<>
      <NavMenu>
        <a href='#'>
          <img src='/images/home-icon.svg' alt='HOME' />
          <span>Home</span>
        </a>
        <a href='#'>
          <img src='/images/search-icon.svg' alt='SEARCH' />
          <span>Search</span>
        </a>
        <a href='#'>
          <img src='/images/original-icon.svg' alt='ORIGINAL' />
          <span>Original</span>
        </a>
        <a href='#'>
          <img src='/images/movie-icon.svg' alt='MOVIE' />
          <span>Movie</span>
        </a>
        <a href='#'>
          <img src='/images/series-icon.svg' alt='SERIES' />
          <span>Series</span>
        </a>
      </NavMenu>

      <SignOut>
        <DropDown>
          <span>Sign Out</span>
        </DropDown>
      </SignOut>

      </>
    </Nav>
  )
}

export default Header


const Nav = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;

`

const Logo = styled.a`

    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;

    img{
        display: block;
        width: 100%;
    }

`

const NavMenu = styled.div`

    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    position: relative;
    margin-right: auto;
    margin-left: 25px;


    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img{
            height: 20px;
            min-width: 20px;
            z-index: auto ;
        }

        span{
            color: rgb(249,249,249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;
            text-transform: uppercase;
            
            &:before{
                content: "";
                background-color: rgb(249,249,249);
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
                visibility: hidden;
                width: auto;
            }
            
        }
            &:hover{
                span:before{
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }

    }

    @media (max-width: 768px){
        display: none;
    }

`







const DropDown = styled.div``
const SignOut=styled.div``