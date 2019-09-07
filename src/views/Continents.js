import React from "react";
import { Query } from "react-apollo";
import { ALLCONTINENTS } from "../query";
import { Dimmer, Loader } from "semantic-ui-react";
import styled from "styled-components";

import CardList from "../components/CardList";
import Sidebar from "../commons/SideBar";
import Header from "../commons/Header";

export default function Continents({ headerMetaData, data, match }) {
  return (
    <App>
      <Sidebar />
      <section className="app-main">
        <Header headerMetaData={headerMetaData} />
        {window.navigator.onLine ? (
        <Query query={ALLCONTINENTS} errorPolicy="all">
          {({ data, loading }) =>
            loading ? (
              <Dimmer active>
                <Loader content="loading" />
              </Dimmer>
            ) : (
              <CardList path={match.path} className="continent-list" data={data.continents} />
            )
          }
        </Query>
        ):(
          <CardList path={match.path} className="continent-list" data={data.continents} />
        )}
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

Continents.defaultProps = {
  headerMetaData: {
    title: "Continents"
  },
  data: {
    continents: [
      {
        name: "Africa",
        code: "AF",
        countries: [
          { name: "Nigeria", code: "NG" },
          { name: "Ghana", code: "GH" }
        ]
      }
    ]
  }
};
