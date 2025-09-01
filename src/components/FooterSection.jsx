import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3rem 2rem;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  color: var(--primary);
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const FooterLink = styled(Link)`
  color: var(--text-secondary);
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    color: var(--primary);
  }
`;

const ExternalLink = styled.a`
  color: var(--text-secondary);
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    color: var(--primary);
  }
`;

const FooterText = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  line-height: 1.6;
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-secondary);
  font-size: 0.8rem;
`;

export const FooterSection = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSectionContainer>
          <FooterTitle>Product</FooterTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/features">Features</FooterLink>
          <ExternalLink href="https://memento.featurebase.app" target="_blank" rel="noopener noreferrer">
            Feature Requests
          </ExternalLink>
        </FooterSectionContainer>

        <FooterSectionContainer>
          <FooterTitle>Support</FooterTitle>
          <ExternalLink href="mailto:memento.computer@gmail.com">
            Contact Us
          </ExternalLink>
          <ExternalLink href="https://memento.featurebase.app" target="_blank" rel="noopener noreferrer">
            Feedback & Ideas
          </ExternalLink>
          <FooterText>Response time: 24 hours</FooterText>
        </FooterSectionContainer>

        <FooterSectionContainer>
          <FooterTitle>Legal</FooterTitle>
          <FooterLink to="/terms">Terms of Service</FooterLink>
          <FooterLink to="/privacy">Privacy Policy</FooterLink>
          <FooterLink to="/eula">End User License Agreement</FooterLink>
        </FooterSectionContainer>

        <FooterSectionContainer>
          <FooterTitle>Company</FooterTitle>
          <FooterText>Memento</FooterText>
          <FooterText>Time Management & Productivity Tool</FooterText>
          <FooterText>Empowering teams to work smarter</FooterText>
        </FooterSectionContainer>
      </FooterContent>

      <Copyright>
        <FooterText>
          © 2024 Memento. All rights reserved. | 
          Made with ❤️ for productive teams
        </FooterText>
      </Copyright>
    </FooterContainer>
  );
};