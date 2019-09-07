import gql from 'graphql-tag';

export const ALLCOUNTRIES = gql`
{
  countries {
    name,
    code,
    continent {
      name
    },
    currency,
    languages {
      name,
    },
  }
}
`;

export const ALLCONTINENTS = gql`
{
  continents {
    name,
    code,
    countries {
      name
    }
  }
}
`;