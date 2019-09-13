import React from "react";
import styled from "styled-components";
import Header from "../commons/Header";
import SideBar from "../commons/SideBar";
import { Query } from "react-apollo";
import { GETCONTINENT } from "../query";
import CardList from "../components/CardList";
import { Dimmer, Loader } from "semantic-ui-react";

export default function Continent({ headerMetaData, data, match }) {
  let code = match.params.code;
  return (
    <App>
      <SideBar />
      <div className="app-main">
        <Query query={GETCONTINENT} errorPolicy="all" variables={{ code }}>
          {({ error, data, loading }) =>
            loading ? (
              <Dimmer active>
                <Loader>Loading</Loader>
              </Dimmer>
            ) : error ? (
              <span>There is an error</span>
            ) : (
              <>
                <Header headerMetaData={{ title: data.continent.name }} />
                {console.log(data)}
                <CardList path={match.path} data={data.continent.countries} />
              </>
            )
          }
        </Query>
      </div>
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

Continent.defaultProps = {
  headerMetaData: {
    title: "Continent"
  },
  data: {
    countries: [
      { code: "NG", name: "Nigeria", continent: { name: "Africa" } },
      { code: "GH", name: "Ghana", continent: { name: "Africa" } }
    ]
  }
};
