import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../commons/SideBar";
import { LinkCard } from "../components/Cards";
import Header from "../commons/Header";

export default function Home({ links, headerMetaData }) {
  return (
    <App>
      <Sidebar />
      <section className="app-main">
        <Header headerMetaData={headerMetaData} />
        {links.map((item, index) => (
          <NavLink key={index} to={item.link}>
            <LinkCard data={item} />
          </NavLink>
        ))}
      </section>
    </App>
  );
}

const App = styled.section`
  background: var(--darkmode-color);
  color: var(--darkmode-font);
  height: 100vh;
  width: 100%;
  display: flex;

  .app-main {
    flex-grow: 1;
    padding: 0.8rem;
    overflow-y: scroll;
  }

  @media (min-width: 420px) {
    .app-main {
      padding: 4rem;
    }
  }
`;

Home.defaultProps = {
  links: [
    { name: "home", link: "/" },
    { name: "countries", link: "/countries" },
    { name: "continents", link: "/continents" }
  ],
  headerMetaData: {
    title: "My Countries List"
  }
};
