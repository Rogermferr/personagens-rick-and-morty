import styled from "styled-components";

export const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  padding: 2rem 0;
  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
  }

  button {
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 2rem;

    font-size: 1rem;
    color: #269044;

    background-color: #fff;
    box-shadow: 0 0 20px 0 #d2e054;
    transition: all 0.5s;
  }

  button:hover {
    transform: scale(1.1);
  }
`;
