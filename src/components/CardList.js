import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SimpleCard } from "./Cards";

export default function CardList({ data, className, path }) {
  return (
    <Container className={className}>
      {data.map((data, index) => (
        <Link
          to={{ pathname: `${path}/${data.code}`, state: data }}
          style={{ color: "#51525c" }}
          key={index}
        >
          <SimpleCard data={data} />
        </Link>
      ))}
    </Container>
  );
}

const Container = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;

  @media (min-width: 420px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    &::after {
      content: '';
      /* flex: auto; */
    }
  }
`;