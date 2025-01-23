import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const TermsContainer = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: var(--background);
  color: var(--text);
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #fff;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--primary), transparent);
  }
`;

const Section = styled.div`
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--primary);
`;

const Text = styled.p`
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style-position: inside;
  margin: 1rem 0;
  color: var(--text-secondary);

  li {
    margin-bottom: 0.5rem;
    line-height: 1.8;
  }
`;

export const TermsSection = () => {
  return (
    <TermsContainer>
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Terms of Service
        </Title>

        <Section>
          <SectionTitle>1. Introduction</SectionTitle>
          <Text>
            Welcome to Memento. By using our service, you agree to these terms. Please read them carefully.
            These Terms of Service ("Terms") govern your access to and use of Memento's services, including
            our website, mobile applications, and any other software or services offered by Memento.
          </Text>
        </Section>

        <Section>
          <SectionTitle>2. Using Our Services</SectionTitle>
          <Text>
            You must follow any policies made available to you within the Services. You may use our Services
            only as permitted by law. We may suspend or stop providing our Services to you if you do not
            comply with our terms or policies or if we are investigating suspected misconduct.
          </Text>
          <List>
            <li>You must be at least 13 years old to use our Services.</li>
            <li>You must provide accurate information when creating your account.</li>
            <li>You are responsible for maintaining the security of your account.</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>3. Privacy & Data Protection</SectionTitle>
          <Text>
            Memento's privacy policy explains how we treat your personal data and protect your privacy when
            you use our Services. By using our Services, you agree that Memento can use such data in
            accordance with our privacy policies.
          </Text>
        </Section>

        <Section>
          <SectionTitle>4. Service Changes & Updates</SectionTitle>
          <Text>
            We are constantly changing and improving our Services. We may add or remove functionalities or
            features, and we may suspend or stop a Service altogether. You can stop using our Services at
            any time, although we'll be sorry to see you go.
          </Text>
        </Section>

        <Section>
          <SectionTitle>5. Contact</SectionTitle>
          <Text>
            If you have any questions about these Terms, please contact us at support@memento.ai
          </Text>
        </Section>
      </Content>
    </TermsContainer>
  );
}; 