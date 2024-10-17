import styled from 'styled-components';

const FaqSectionWrapper = styled.section`
  margin: 0.5rem auto;
  position: relative;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  .category_name {
    margin: 0.5rem 0 0.5rem;
    font-style: italic;
    // text-transform: capitalize;
  }
  .accordion__item + .accordion__item {
    border-color: transparent;
  }
  .reusecore__accordion {
    margin-bottom: 5rem;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
  }
  .accordion__item {
    .accordion__header {
      padding: 0;
      background: #00b39f;
      h5 {
        font-weight: 700;
        font-size: 18px;
        position: relative;
        color: #ffffff;
      }
      > div {
        &:focus {
          outline: none;
        }
      }
    }

    .accordion__body {
      padding: 0 0.625rem 0 0.625rem;
      p {
        font-size: 16px;
        font-weight: 300;
        text-align: initial;
        margin: 0;
      }
    }

    .markdown {
      text-align: left;
      color: ${({ theme }) => theme.text};
      font-size: 16px;
      p {
        margin: 1rem 0;
      }
    }
  }
  div.faqbutton {
    text-align: center;

    button.faqbutton {
      margin-bottom: 1.25rem;
    }
  }
  .section-title {
    text-align: center;
    h1 {
      margin-bottom: 3.75rem;
      font-size: 40px;
      line-height: 3.125rem;
    }
    .search {
      margin-bottom: 3.125rem;
      input {
        font-size: 20px;
        width: 80%;
        padding: 1rem;
        border: 1px solid #ffffff;
        background-color: #f0f0f0;
        border-radius: 1.25rem;
      }
    }
  }

  .askus_section {
    text-align: left;
    h2 {
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 2rem;
    }
    button {
      margin-bottom: 0.5rem;
    }
  }
  @media only screen and (max-width: 912px) {
    .reusecore__accordion {
      margin-bottom: 3.125rem;
    }
  }

  @media only screen and (max-width: 568px) {
    .section-title {
      text-align: center;
    }
    .reusecore__accordion {
      text-align: left;
    }
    h2 {
      text-align: left;
    }
  }

  @media only screen and (max-width: 480px) {
    .accordion__item {
      .accordion__header {
        h5 {
          font-size: 15px;
          line-height: 21px;
          padding-right: 1.6rem;
        }
      }
      .markdown {
        font-size: 13px;
        p {
          font-size: 13px;
          text-overflow: clip;
        }
        ul {
          padding-left: 1rem;
        }
      }
    }
  }
`;

export default FaqSectionWrapper;
