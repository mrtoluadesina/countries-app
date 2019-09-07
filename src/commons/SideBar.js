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
        <img src='/assets/images/logo.png' alt="site_logo" />
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
    img {
      width: 40px;
      height: 40px;
      animation: spin 40s infinite linear;
    }
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
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
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;

    &:before {
      background-color: #fff;
      bottom: 4px;
      content: '';
      height: 16px;
      left: 3px;
      top: 2px;
      position: absolute;
      transition: 0.4s;
      width: 16px;
    }
  }

  input:checked + .slider {
    background-color: #66bb6a;
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