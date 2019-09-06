import React from "react";
import { NavLink } from "react-router-dom";
import { Query } from "react-apollo";
import { ALLCOUNTRIES } from "../query";
import { Dimmer, Loader } from "semantic-ui-react";

export default function Countries(props) {
  return (
    <>
      <NavLink to="/"> Back</NavLink>
      <h2>Countries</h2>
      <Query query={ALLCOUNTRIES} errorPolicy="all">
        {({ data, loading }) =>
          loading ? (
            <Dimmer active>
              <Loader content="Loading" />
            </Dimmer>
          ) : (
            <ul>
              {console.log(data.countries)}
              {data.countries.map((country, index) => (
                <NavLink key={index} to={{pathname: `/countries/${country.code}`, state: country}} >
                <li>{country.name}</li>
                </NavLink>
              ))}
            </ul>
          )
        }
      </Query>
    </>
  );
}
