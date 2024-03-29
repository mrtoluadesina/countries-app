import React from 'react';
import Nav from '../components/Nav';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export default function Sidebar({navIcons}) {
  return (
    <Container>
      <div className="app-aside-siteLogo">
        <div className="theme-switch">
          <Switch className="switch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" />
            <div className="slider round"></div>
          </Switch>
        </div>
        <NavLink to="/">
        {/* <img src='/assets/images/logo.png' alt="site_logo" /> */}
        <div className="logo">
          <div></div>
        </div>
        </NavLink>
      </div>
      <div className="app-aside-siteNav">
        {navIcons.map((nav, index) => (
          <Nav nav={nav} key={index} />
        ))}
      </div>
      <div className="app-aside-homeIcon">
        <Nav nav={{ icon: 'fas fa-archway', size: '1.4rem', link: '/'}} />
      </div>
    </Container>
  );
}

const Container = styled.section`
  flex-grow: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0.2rem;
  background: #292930;
  position: relative;

  .app-aside-siteLogo {
    flex-grow: 1;
    .theme-switch {
      position: absolute;
      top: 0;
      margin: 20px 0;
    }
    .logo {
      width: 40px;
        height: 40px;
      border-radius: 50%;
      overflow: hidden;
      left: 0;
      margin: auto;
      div {
        width: 200%;
        height: 100%;
        animation: spin 20s infinite linear;
        background: url(https://web.opendrive.com/api/v1/download/file.json/NTlfMTQ1MTkzNDhf?inline=1);
        background-size: cover;
      }
    }
    @keyframes spin {
      /* from {
        transform: rotateY(0deg);

      } */
      to {
        transform: translateX(-50%);
        /* transform: rotateY(360deg); */
      }
    }
  }

  .app-aside-siteNav {
    flex-grow: 1;
  }

  .app-main {
    border: 1px solid #fff;
    flex-grow: 1;
  }

  .active-nav {
    color: #e9e9ea;
  }

  @media (min-width: 420px) {
    padding: 5rem 0.8rem;
    max-width: 8%;
  }

  @media (min-width: 780px) {
    max-width: 5%;
  }
`;

const Switch = styled.label`
  display: inline-block;
  height: 20px;
  position: relative;
  width: 35px;

  input {
    display: none;
  }

  .slider {
    background-color: var(--font-color);
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
  }

  .slider:before {
    background-color: var(--themeicon-color);
    bottom: 4px;
    content: '';
    height: 16px;
    left: 3px;
    top: 2px;
    position: absolute;
    transition: 0.4s;
    width: 16px;
  }

  input:checked + .slider {
    background-color: var(--font-color);
  }

  input:checked + .slider:before {
    transform: translateX(13px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

Sidebar.defaultProps = {
  navIcons: [
    { icon: 'fab fa-battle-net', link: '/countries' },
    {icon: 'fab fa-buffer', link: '/continents'}
  ]
}