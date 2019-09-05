import gql from 'graphql-tag';

export const ALLCOUNTRIES = gql`
{
  countries {
    name,
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