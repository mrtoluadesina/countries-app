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
      native
    },
    emoji,
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

export const GETCOUNTRY = gql`
query Country($code: String) {
  country (code: $code) {
    name,
    phone,
    code,
    continent {
      name,
      code
    },
    currency,
    languages {
      name,
      native,
      code
    },
    emoji
  }
}
`;

export const GETCONTINENT = gql`
query Continent($code: String) {
  continent (code: $code) {
    name,
    countries {
      name,
      code,
      continent {
        name
      }
    }
  }
}
`;