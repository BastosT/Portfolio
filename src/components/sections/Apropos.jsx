import React from "react";
import styled from "styled-components";
import { aboutMeContent } from "../../data/constants";
import { Bio } from "../../data/constants";
import {
  Email,
  GitHub,
  LinkedIn,
  Mail,
  Phone,
} from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const AboutCard = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 28px;
  margin-top: 30px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ContentText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 20px;
`;

const ContactSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 32px;
  justify-content: center;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  border-radius: 12px;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  }
`;

const AboutMe = () => {
  return (
    <Container id="about">
      <Wrapper>
        <Title>À propos de moi</Title>
        <AboutCard>
          <ContentText>
          {aboutMeContent.intro}
          </ContentText>
          <ContentText>
          {aboutMeContent.closing}
          </ContentText>
          <ContactSection>
            <ContactItem href={`mailto:${Bio.email}`}>
              <Mail size={20} />
              <span>Email</span>
            </ContactItem>
            <ContactItem href={Bio.github} target="_blank">
              <GitHub size={20} />
              <span>GitHub</span>
            </ContactItem>
            <ContactItem href={Bio.linkedin} target="_blank">
              <LinkedIn size={20} />
              <span>LinkedIn</span>
            </ContactItem>
          </ContactSection>
        </AboutCard>
      </Wrapper>
    </Container>
  );
};

export default AboutMe;