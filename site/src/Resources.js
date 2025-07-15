import React from "react";
import Button from "./reusecore/Button";
import styled from "styled-components";
import AcademyIcon from './assets/images/academy-icon.svg';
import CatalogIcon from './assets/images/catalog-icon.svg'
import BookIcon from './assets/images/book-icon.svg'
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const MainHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Subheading = styled.p`
  font-size: 1.125rem;
  max-width: 900px;
  margin: 0 auto;
`;


const CardGrid = styled.div`
  display: flex;
  grid-template-columns: 1fr;
  gap: 2rem;
  justify-content: center;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
  }
`;

const Card = styled.div`
  background-color:  ${({ theme }) => theme.body};
  border-radius: 0.5rem;
  box-shadow: 0px 0px 2px;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardImageContainer = styled.div`
  max-width: 6rem;
`;
const CardImage = styled.img`
  max-width: 6rem;
  object-fit: contain;
  margin: 0 auto 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
 color: ${props => props.theme.text};
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  margin-bottom: 2rem;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;


const ResourcesSection = () => {
  return (
    <Container>
      <HeaderSection>
        <MainHeading>
          No setup required
        </MainHeading>
        <Subheading>
        Learn by doing: explore these hands-on resources using the playground right in your browser
        </Subheading>
      </HeaderSection>

      <CardGrid>
        <Card>
          <CardImageContainer>
            <CardImage 
              src={BookIcon} 
              alt="Hands-on tutorials" 
              style={{ paddingTop: "1.2rem" }}
            />
          </CardImageContainer>
          <CardTitle>Tutorials</CardTitle>
          <CardDescription>
            Interactive tutorials to increase your cloud native knowledge.
          </CardDescription>
          <Spacer />
          <Button url="https://docs.meshery.io/guides/tutorials" style={{ color: "rgb(255,255,255)" }}> Tutorials</Button>
        </Card>

        {/* <Card>
          <CardImageContainer>
            <CardImage 
              src={AcademyIcon}
              alt="Academy Icon" 
            />
          </CardImageContainer>
          <CardTitle>Academy</CardTitle>
          <CardDescription>
            Learn how to use various cloud native tools with Meshery.
          </CardDescription>
          <Spacer />
          <Button url="https://docs.meshery.io/guides/tutorials"  style={{ color: "rgb(255,255,255)"}}>Get Started</Button>
        </Card> */}

       
        <Card>
          <CardImageContainer>
            <CardImage 
              src={CatalogIcon}
              alt="Catalog Icon" 
            />
          </CardImageContainer>
          <CardTitle>Catalog</CardTitle>
          <CardDescription>
          Reusable designs and templates for Cloud Native Infrastructure.
          </CardDescription>
          <Spacer />
          <Button url="https://meshery.io/catalog" style={{ color: "rgb(255,255,255)"}}>Learn More</Button>
        </Card>
      </CardGrid>
    </Container>
  );
};

export default ResourcesSection;
