import React from "react";
import styled from "styled-components";

export const SimpleCard = ({ data }) => {
  const { continent, name, code, countries } = data;
  return (
    <Container continent={continent ? continent.name : name}>
      <div className="card-header">
        <span className="card-header-title">{code}</span>
        <span className="card-icon">
          <i className="fas fa-ellipsis-h"></i>
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
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 130px;
  height: 180px;
  margin-bottom: .5rem;
  border-radius: 1px;
  padding: 1.5rem 0.6rem;
  background: var(--darkmode-card);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 5px #9999a20d solid;
  position: relative;

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

  @media (min-width: 420px) {
    padding: 1.5rem 1.2rem;

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
  }
`;
