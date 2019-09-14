import React, {useState} from 'react';
import styled from 'styled-components';

export default function Header({headerMetaData: {title}}) {
  const [searchToggle, setSearchToggle] = useState(false);

  const handleSearchToggle = () => {
    setSearchToggle(!searchToggle);
  }

  return (
    <Container searchToggle={searchToggle}>
      <div className="view-title">
        <h2>{title}</h2>
      </div>
      <div className="search-form">
        <form>
          <span className="search-field">
            <div className="search-box">
              <input type="text" placeholder="search by country, continent or code" />
            </div>
            <span htmlFor="search-icon-box" className="search-icon" onClick={handleSearchToggle}>
              <i className="fas fa-search"></i>
            </span>
          </span>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;

  .view-title {
    order: 1;
    margin-top: 1rem;
  }

  h2 {
    font-size: 1.4rem;
    text-transform: capitalize;
    line-height: 1rem;
    font-weight: 700;
  }

  .search-form {
    display: flex;
    align-items: center;

    form {
      .search-field {
        display: inline-flex;
        align-items: center;

        .search-box {
          overflow: hidden;

          input {
            width: 250px;
            height: 30px;
            border-radius: 30px;
            border: 1px solid;
            padding: 0 0.5rem;
            margin-left: 0.4rem;
            font-weight: 500;
            font-size: 0.7rem;
            position: relative;
            right: ${({ searchToggle }) => (searchToggle ? '0' : '-320px')};
            &:focus {
              outline: none;
            }
            transition: ${({ searchToggle }) => (searchToggle ? 'right 0.5s' : 'right 0.5s')};
          }
        }

        .search-icon {
          width: 35px;
          height: 35px;
          background: var(--darkmode-card);
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 0.4rem;
          cursor: pointer;
        }
      }
    }
  }
    @media (min-width: 420px) {
    flex-direction: row;
    justify-content: space-between;

    .view-title {
      order: 0;
    }

    .search-form {
    display: flex;
    align-items: center;

    form {
      .search-field {
        display: inline-flex;
        align-items: center;

        .search-box {
          overflow: hidden;

          input {
            width: 300px;
          }
        }
      }
    }
  }
  }
`;