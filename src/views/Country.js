import React from "react";
import styled from "styled-components";
import Header from "../commons/Header";
import SideBar from "../commons/SideBar";
import { Query } from "react-apollo";
import { DetailsCard } from "../components/Cards";
import { GETCOUNTRY } from "../query";
import { Dimmer, Loader } from "semantic-ui-react";

export default function Country(props) {
  let code = props.match.params.code;
  console.log(code);
  return (
    <App>
      <SideBar />
      <section className="app-main">
        <Query query={GETCOUNTRY} errorPolicy="all" variables={{ code }}>
          {({ error, data, loading }) =>
            loading ? (
              <Dimmer active>
                <Loader contnet="Loading" />
              </Dimmer>
            ) : (
              <>
                {console.log(data)}
                <Header headerMetaData={{ title: data.country.name }} />
                <DetailsCard data={data.country} />
              </>
            )
          }
        </Query>
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

Country.defaultProps = {
  headerMetaData: {
    title: { data: { country: { name: "countries" } } }
  }
};
