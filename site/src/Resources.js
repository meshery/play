import React from "react";
import Button from "./reusecore/Button";
import styled from "styled-components";
import Tutorials from "./assets/images/5-tutorials.png"
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
  color: #0c2340;
  margin-bottom: 1rem;
`;

const Subheading = styled.p`
  font-size: 1.125rem;
  max-width: 900px;
  margin: 0 auto;
`;


const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
`;

const CardImage = styled.img`
  width: 12rem;
  height: 12rem;
  object-fit: contain;
  margin: 0 auto 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #0c2340;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  margin-bottom: 2rem;
`;


const ResourcesSection = () => {
  return (
    <Container>
      <HeaderSection>
        <MainHeading>
          No setup required
        </MainHeading>
        <Subheading>
            Access the playground right in your browser
        </Subheading>
      </HeaderSection>

      <CardGrid>
        <Card>
          <CardImage 
            src={Tutorials} 
            alt="Hands-on tutorials" 
          />
          <CardTitle>Tutorials</CardTitle>
          <CardDescription>
            Hands-on tutorials to increase your cloud native knowledge.
          </CardDescription>
          <Button url="/tutorials/101"> Tutorials</Button>
        </Card>

        {/* Lab Environment Card */}
        <Card>
          <CardImage 
            src={Tutorials}
            alt="" 
          />
          <CardTitle>Academy</CardTitle>
          <CardDescription>
            Learn how to use various cloud native tools with Meshery.
          </CardDescription>
          <Button to="/lab-environment">Get Started</Button>
        </Card>

       
        <Card>
          <CardImage 
            src={Tutorials}
            alt="" 
          />
          <CardTitle>Catalog</CardTitle>
          <CardDescription>
           Ready-made blueprints for Kubernetes and Cloud Native Infrastructure
          </CardDescription>
          <Button url="/community-training">Learn More</Button>
        </Card>
      </CardGrid>
    </Container>
  );
};

export default ResourcesSection;
