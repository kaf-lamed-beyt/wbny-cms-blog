import styled from "styled-components";

export const Card = styled.div`
  height: 340px;
  width: 200px;
  border: 1px solid red !important;
  border-radius: 4px;

  :hover {
    cursor: pointer;
    background: grey;
    transition: all 0.3s ease-in;
  }

  .featured-image {
    height: 200px;
    width: 100%;

    img {
      display: block;
    }
  }

  .card-info {
    height: 70px;
    border: 1px solid red;

    .author-date {
      display: flex;
      justify-content: space-between;
    }
  }
`;
