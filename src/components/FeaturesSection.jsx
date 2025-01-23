import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaRobot, FaCalendarAlt, FaBrain, FaBell } from 'react-icons/fa';
import { SiSlack, SiNotion, SiJira } from 'react-icons/si';

const FeaturesContainer = styled.section`
  padding: 6rem 2rem;
  background: rgba(1, 2, 17, 0.5);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary), transparent);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary), transparent);
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  color: #fff;
  position: relative;
  width: 100%;
  text-align: center;

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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled(motion.div)`
  padding: 2rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      rgba(41, 255, 116, 0.06),
      transparent 40%
    );
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 16px;
    background: linear-gradient(45deg, transparent, rgba(41, 255, 116, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--text);
  position: relative;
  z-index: 1;
`;

const FeatureDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  position: relative;
  z-index: 1;
`;

const features = [
  {
    icon: <FaCalendarAlt />,
    title: 'Next-Gen Calendar',
    description: 'Experience a smart calendar that goes beyond simple scheduling to optimize your time management.'
  },
  {
    icon: <FaRobot />,
    title: 'AI-Powered Optimization',
    description: 'AI learns your patterns to suggest more efficient schedule management methods.'
  },
  {
    icon: <FaBrain />,
    title: 'Smart Prioritization',
    description: 'Automatically analyzes importance and urgency to help you focus on what truly matters.'
  },
  {
    icon: <SiSlack />,
    title: 'Slack Integration',
    description: 'Seamlessly sync your Slack tasks and events with your calendar (Coming Soon).'
  },
  {
    icon: <SiNotion />,
    title: 'Notion Integration',
    description: 'Connect with your Notion workspace for enhanced productivity (Coming Soon).'
  },
  {
    icon: <SiJira />,
    title: 'Jira Integration',
    description: 'Sync your Jira tasks and sprints directly with your calendar (Coming Soon).'
  },
  {
    icon: <FaBell />,
    title: 'Smart Notifications',
    description: 'Reduces notification noise and only alerts you at crucial moments.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4
    }
  }
};

export const FeaturesSection = () => {
  return (
    <FeaturesContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Next Generation Calendar
      </Title>
      <FeaturesGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <IconWrapper>{feature.icon}</IconWrapper>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesContainer>
  );
}; 