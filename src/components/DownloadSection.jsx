import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaApple, FaAndroid } from 'react-icons/fa';

const DownloadContainer = styled.section`
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, transparent, rgba(1, 2, 17, 0.8));

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary), transparent);
  }
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const ComingSoonBadge = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(41, 255, 116, 0.1);
  border: 1px solid rgba(41, 255, 116, 0.2);
  border-radius: 8px;
  color: var(--primary);
  font-size: 0.9rem;
  font-weight: 500;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #fff;
  position: relative;
  display: inline-block;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 4rem;
  line-height: 1.6;
`;

const ButtonsContainer = styled(motion.div)`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  opacity: 0.7;
`;

const DownloadButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  text-decoration: none;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: not-allowed;
  position: relative;

  svg {
    font-size: 1.5rem;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2
    }
  }
};

const buttonVariants = {
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.98
  }
};

export const DownloadSection = () => {
  return (
    <DownloadContainer>
      <BadgeContainer>
        <ComingSoonBadge>Coming Soon</ComingSoonBadge>
        <Title>Available on All Platforms</Title>
      </BadgeContainer>
      <Subtitle>
        Mac, Android, and iOS apps are currently in development.
        Join us on Product Hunt in early February 2025.
      </Subtitle>
      <ButtonsContainer
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <DownloadButton
          variants={buttonVariants}
        >
          <FaApple />
          Mac Version (Coming Soon)
        </DownloadButton>
        <DownloadButton
          variants={buttonVariants}
        >
          <FaAndroid />
          Android Version (Coming Soon)
        </DownloadButton>
        <DownloadButton
          variants={buttonVariants}
        >
          <FaApple />
          iOS Version (Coming Soon)
        </DownloadButton>
      </ButtonsContainer>
    </DownloadContainer>
  );
};