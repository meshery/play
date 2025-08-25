import styled from "styled-components";

export const VendorSelectionWrapper = styled.div`
  padding: 1rem;
  text-align: center;
  align-items: center;

  h2 {
    margin-bottom: 1rem;
    color: ${(props) => props.theme.text};
    font-size: 1.8rem;
  }

  .selection-description {
    margin-bottom: 2rem;
    color: ${(props) => props.theme.textSecondary || props.theme.text};
    font-size: 1rem;
    opacity: 0.8;
  }

  .vendors-grid {
    display: flex;
    max-width: 800px;
    margin: 0 auto;
  
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    // grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .disclaimer {
    padding: 1rem;
    background: ${(props) =>
      props.theme.cardBackground || "rgba(0, 0, 0, 0.05)"};
    border-radius: 8px;

    p {
      font-size: 0.85rem;
      color: ${(props) => props.theme.textSecondary || props.theme.text};
      margin: 0;
      opacity: 0.7;
    }
  }
`;

export const VendorCard = styled.div`
  background: ${(props) => props.theme.cardBackground || props.theme.body};
  border: 2px solid
    ${(props) =>
      props.available ? "rgb(0, 179, 159)" : "rgba(128, 128, 128, 0.3)"};
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  width: 300px;
  flex-direction: column;
  transition: all 0.3s ease;
  opacity: ${(props) => (props.available ? 1 : 0.7)};

  &:hover {
    transform: ${(props) => (props.available ? "translateY(-2px)" : "none")};
    box-shadow: ${(props) =>
      props.available ? "0 8px 25px rgba(0, 179, 159, 0.15)" : "none"};
  }

  .vendor-info {
    h3 {
      color: ${(props) => props.theme.text};
      margin-bottom: 0.5rem;
      font-size: 1.3rem;
    }

    p {
      color: ${(props) => props.theme.textSecondary || props.theme.text};
      font-size: 0.9rem;
      opacity: 0.8;
      line-height: 1.4;
    }
  }

  .vendor-action {
    .vendor-btn {
      width: 100%;
      padding: 0.8rem 1.5rem;
      border-radius: 8px;
      font-weight: 500;
      transition: all 0.3s ease;

      &.disabled {
        background: rgba(128, 128, 128, 0.3) !important;
        color: rgba(128, 128, 128, 0.7) !important;
        cursor: not-allowed;
      }
      &.hosted {
        background: rgb(235, 192, 23);
        &:not(.disabled):hover {
          background: rgba(0, 179, 159 0.9) !important;
          transform: translateY(-1px);
        }
      }
      &.self-hosted {
        background: rgb(0, 179, 159);
        &:not(.disabled):hover {
          background: rgba(255, 208, 25, 0.9) !important;
          transform: translateY(-1px);
        }
      }
    }
    

    a {
      text-decoration: none;
      display: block;
    }

  }
`;

export const AddYourOwnCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(0, 179, 159, 0.1),
    rgba(235, 192, 23, 0.1)
  );
  border: 2px dashed rgb(0, 179, 159);
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 179, 159, 0.15);
    background: linear-gradient(
      135deg,
      rgba(0, 179, 159, 0.15),
      rgba(235, 192, 23, 0.15)
    );
  }

  .add-your-own-content {
    text-align: center;

    h3 {
      color: ${(props) => props.theme.text};
      margin-bottom: 0.5rem;
      font-size: 1.3rem;
    }

    p {
      color: ${(props) => props.theme.textSecondary || props.theme.text};
      font-size: 0.9rem;
      opacity: 0.8;
      line-height: 1.4;
    }

    .add-btn {
      background: transparent !important;
      border: 2px solid rgb(0, 179, 159);
      color: rgb(0, 179, 159) !important;
      padding: 0.8rem 1.5rem;
      border-radius: 8px;
      font-weight: 500;
      transition: all 0.3s ease;

      &:hover {
        background: rgb(0, 179, 159) !important;
        color: white !important;
        transform: translateY(-1px);
      }
    }

    a {
      text-decoration: none;
    }
  }
`;
