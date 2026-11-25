import styled from "styled-components";

export const NotFoundWrapper = styled.main`
  max-width: 75%;
  margin: 5rem auto;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .not-found {
    text-align: center;
  }

  .code {
    margin: 0;
    font-size: 9rem;
    font-weight: 700;
    line-height: 1;
    color: rgb(0, 179, 159);
  }

  h1 {
    margin: 1rem 0 1.5rem;
  }

  .message {
    max-width: 40rem;
    margin: 0 auto 3rem;
    font-size: 1.35rem;
    color: ${({ theme }) => theme.text};
  }

  .home-btn {
    display: inline-block;
    padding: 1rem 1.5rem;
    font-size: 1.25rem;
    color: #1e2117;
    text-decoration: none;
    background: rgba(235, 192, 23, 1);
    border: 1px solid rgba(235, 192, 23, 0.3);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    transition: 0.2s ease-in-out;
  }

  .home-btn:hover,
  .home-btn:focus-visible {
    background-color: rgba(255, 208, 25, 1);
    box-shadow: 0px 0px 15px rgba(235, 192, 23, 1);
  }

  @media screen and (max-width: 768px) {
    max-width: 85%;
    margin: 3rem auto;

    .code {
      font-size: 6rem;
    }
  }

  @media screen and (max-width: 568px) {
    max-width: 90%;
  }
`;
