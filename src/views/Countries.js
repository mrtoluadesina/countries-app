import React from "react";
import { Query } from "react-apollo";
import { ALLCOUNTRIES } from "../query";
import { Dimmer, Loader } from "semantic-ui-react";
import styled from "styled-components";
import Header from "../commons/Header";
import SideBar from "../commons/SideBar";
import CardList from "../components/CardList";

export default function Countries({ headerMetaData, data, match }) {
  return (
    <App>
      <SideBar />
      <section className="app-main">
        <Header headerMetaData={headerMetaData} />
        {window.navigator.onLine ? (
        <Query query={ALLCOUNTRIES} errorPolicy="all">
          {({ data, loading }) =>
            loading ? (
              <Dimmer active>
                <Loader content="Loading" />
              </Dimmer>
            ) : (
              <CardList path={match.path} data={data.countries} />
            )
          }
        </Query>
        ):(
          <CardList path={match.path} data={data.countries} />
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

Countries.defaultProps = {
  headerMetaData: {
    title: "countries"
  },
  data: {
    countries: [
      { code: "NG", name: "Nigeria", continent: { name: "Africa" } },
      { code: "GH", name: "Ghana", continent: { name: "Africa" } }
    ]
  }
};
