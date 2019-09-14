import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export default function Nav({nav}) {
  return (
    <NavLink to={nav.link} style={{color: '#51525c'}} exact activeStyle={{color:'#e9e9ea'}}>
      <NavIcon>
        <i className={nav.icon} style={{fontSize: `${nav.size ? nav.size : '1.5rem'}`}} />
      </NavIcon>
    </NavLink>
  )
}

const NavIcon = styled.div`
  margin: 1.5rem 0;
  cursor: pointer;
`;