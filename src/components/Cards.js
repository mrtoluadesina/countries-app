import React from "react";
import styled from "styled-components";

export const SimpleCard = ({ data }) => {
  const { continent, name, code, countries, currency, languages } = data;
  return (
    <Container continent={continent ? continent.name : name}>
      <div className="card-header">
        <span className="card-header-title">{code}</span>
        <span className="card-icon">
            <span>currency</span>
          <h3>
            {currency}
          </h3>
        </span>
      </div>
      <div className="card-body">
        <div className="card-body-country">
          {continent ? (
            <h3>{name}</h3>
          ) : (
            <h3>{`${countries.length} Countries`}</h3>
          )}
        </div>
        <div className="card-body-continent">
          <h2>{continent ? continent.name : name}</h2>
        </div>
        {continent ? (
          <div className="card-body-content">
            <h3>Languages (English & Native)</h3>
            <ul>
              {languages.map((language, index) => (
                <li key={index}>
                  {language.name} - {language.native}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
};

export const LinkCard = ({ data }) => {
  return (
    <Container className="full-width" continent={data.name}>
      {data.name}
    </Container>
  );
};

export const DetailsCard = ({ data }) => {
  return (
    <Container className="full-width marg-t-sm min-height" continent="lightbg">
      <div className="half">
        <h2 className="flag">{data.emoji}</h2>
      </div>
      <div className="half">
        <Section>
          <h2>{data.name}</h2>
          <span>Located in {data.continent.name}</span>
        </Section>
        <Section>
          <h2>Languages</h2>
        </Section>
        <ul>
          <li>Currency - {data.currency}</li>
          <li>Phone - {data.phone}</li>
          <li>Continent - {data.continent.name}</li>
          <li>
            Languages
            <ul>
              {data.languages.map((lang, index) => (
                <li key={index}>
                  {lang.name} - {lang.native}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 300px;
  height: 250px;
  margin-bottom: 0.5rem;
  border-radius: 1px;
  padding: 1.5rem 0.6rem;
  background: var(--darkmode-card);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 5px #9999a20d solid;
  position: relative;

  &.full-width {
    width: 100%;
  }

  &.marg-t-sm {
    margin-top: 1.5rem;
  }

  &.min-height {
    min-height: 50vh;
  }

  .card-header {
    color: #a6a6ac;
    display: inline-flex;
    justify-content: space-between;
  }

  .card-header-title {
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .card-icon {
    color: #51525c;
    font-weight: 400;
    font-size: 13px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    span {
      font-size: 10px;
    }
    h3 {
      width: 100px;
      text-align: right;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .card-body-continent {
    color: rgba(233, 233, 234, 0.28);
    text-transform: capitalize;
  }

  .card-body-country {
    h3 {
      font-weight: 450;
      font-size: 0.65rem;
      color: rgb(172, 173, 185);
      text-transform: capitalize;
    }
  }

  .card-body-continent {
    h2 {
      font-weight: 600;
      font-size: 1rem;
      margin-top: 2px;
    }
  }

  .card-body-content {
    h3 {
      font-size: 0.95rem;
      color: rgb(172, 173, 185);
      text-transform: capitalize;
      margin-top: 7px;
    }
    ul {
      li {
        font-weight: 600;
        font-size: 1rem;
        margin-top: 2px;
      }
    }
  }

  &::before {
    content: "";
    width: 2.5px;
    height: 15px;
    display: flex;
    background: ${({ continent }) =>
      `var(--${continent
        .toLowerCase()
        .split(" ")
        .join("-")}-color)`};
    position: absolute;
    left: -5px;
  }

  .half {
    flex: 0 0 50%;
    .flag {
      font-size: 10rem;
      line-height: 5rem;
      padding: 1rem;
    }
  }

  @media (min-width: 420px) {
    width: 250px;
    height: 350px;
    padding: 1.5rem 1.2rem;
    &.full-width {
      flex-direction: row;
    }

    .card-body-country {
      h3 {
        font-size: 1rem;
      }
    }

    .card-body-continent {
      h2 {
        font-size: 1.3rem;
        margin-top: 8px;
      }
    }

    .half {
      .flag {
        font-size: 20rem;
        line-height: 15rem;
      }
    }
  }
`;

const Section = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;

  h2 {
    font-size: 1.8rem;
    text-transform: uppercase;
    letter-spacing: 0.14rem;
  }
`;
