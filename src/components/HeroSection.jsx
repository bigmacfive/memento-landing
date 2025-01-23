import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import matrixImage from '../assets/matrix.png';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #fff;
  position: relative;
  z-index: 1;
  min-height: 4.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    min-height: 3rem;
  }
`;

const Slogan = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 3rem;
  color: var(--text);
  opacity: 0.9;
  letter-spacing: -0.02em;
  line-height: 1.2;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  span {
    display: block;
    background: linear-gradient(to right, #fff, var(--primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0.5rem auto 2rem;
  z-index: 1;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(41, 255, 116, 0.1);
`;

const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const AppImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const EmailContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const EmailForm = styled(motion.form)`
  display: flex;
  gap: 1rem;
  max-width: 500px;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.3);
  color: var(--text);
  font-size: 1rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary);
    background: rgba(41, 255, 116, 0.05);
    box-shadow: 0 0 30px rgba(41, 255, 116, 0.1);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  border-radius: 12px;
  border: none;
  background: linear-gradient(45deg, var(--primary), var(--primary-dark));
  color: black;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const LaunchInfo = styled(motion.div)`
  padding: 0.8rem 1.5rem;
  background: rgba(41, 255, 116, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(41, 255, 116, 0.2);
  margin-top: 1rem;

  p {
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const SuccessMessage = styled(motion.div)`
  color: var(--primary);
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

export const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [titleText, setTitleText] = useState('Memento');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const texts = ['Memento', 'Autonomous To-do list', 'Memento'];
    let currentIndex = 0;
    
    const animateText = async () => {
      while (true) {
        const text = texts[currentIndex];
        
        // 타이핑 효과
        for (let i = 0; i <= text.length; i++) {
          setTitleText(text.slice(0, i));
          await new Promise(resolve => setTimeout(resolve, 100));
        }
        
        // 잠시 대기
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // 지우기 효과
        for (let i = text.length; i >= 0; i--) {
          setTitleText(text.slice(0, i));
          await new Promise(resolve => setTimeout(resolve, 50));
        }
        
        // 다음 텍스트로
        currentIndex = (currentIndex + 1) % texts.length;
        
        // 마지막 텍스트면 좀 더 오래 대기
        if (currentIndex === 0) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }
    };

    animateText();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      
      // Firestore에 직접 이메일 저장
      await addDoc(collection(db, 'subscribers'), {
        email,
        timestamp: new Date().toISOString()
      });

      setIsSubmitted(true);
      setEmail('');
    } catch (error) {
      console.error('Error submitting email:', error);
      alert('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <HeroContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {titleText}
      </Title>
      <EmailContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <LaunchInfo>
          <p>🚀 Launching on Product Hunt in Early February 2024</p>
          <p>Currently in Beta Testing</p>
        </LaunchInfo>
        <EmailForm onSubmit={handleSubmit}>
          <EmailInput
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting || isSubmitted}
          />
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting || isSubmitted}
          >
            {isSubmitting ? 'Submitting...' : isSubmitted ? 'Subscribed!' : 'Get Early Access'}
          </SubmitButton>
        </EmailForm>
        {isSubmitted && (
          <SuccessMessage
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Thank you for subscribing! We'll keep you updated.
          </SuccessMessage>
        )}
      </EmailContainer>
      <ImageWrapper
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <ImageContainer>
          <AppImage src={matrixImage} alt="Memento App Interface" />
        </ImageContainer>
      </ImageWrapper>
    </HeroContainer>
  );
}; 