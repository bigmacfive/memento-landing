import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import Lottie from 'lottie-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeroSection } from './components/HeroSection.jsx';
import { FeaturesSection } from './components/FeaturesSection.jsx';
import { DownloadSection } from './components/DownloadSection.jsx';
import { TermsSection } from './components/TermsSection.jsx';
import logoAnimation from '/memento_logo_animation.json';

const AppContainer = styled.div`
  min-height: 100vh;
  background: #010211;
  color: #ffffff;
  overflow-x: hidden;
  position: relative;
`;

const LoadingScreen = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #010211;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const GradientBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at var(--mouse-x) var(--mouse-y),
    rgba(41, 255, 116, 0.15) 0%,
    rgba(41, 255, 116, 0.1) 20%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 1) 100%);
  pointer-events: none;
  z-index: 1;
  mix-blend-mode: screen;
`;

const FloatingParticle = styled(motion.div)`
  position: fixed;
  width: 4px;
  height: 4px;
  background: rgba(41, 255, 116, 0.5);
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  filter: blur(1px);
`;

const ScrollProgress = styled(motion.div)`
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 100px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  z-index: 10;
`;

const ScrollThumb = styled(motion.div)`
  width: 100%;
  background: var(--primary);
  border-radius: 2px;
`;

const ContentWrapper = styled(motion.div)`
  position: relative;
  z-index: 2;
`;

const createParticles = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  }));
};

const HomePage = () => (
  <>
    <HeroSection />
    <FeaturesSection />
    <DownloadSection />
  </>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [particles] = useState(() => createParticles(30));
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    setMousePosition({ x, y });
    document.documentElement.style.setProperty('--mouse-x', x * 100 + '%');
    document.documentElement.style.setProperty('--mouse-y', y * 100 + '%');
  };

  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 0.6, 0.4]
  );

  return (
    <Router>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Lottie
              animationData={logoAnimation}
              loop={false}
              style={{ width: '300px' }}
              onComplete={() => setIsLoading(false)}
            />
          </LoadingScreen>
        )}
      </AnimatePresence>
      <AppContainer onMouseMove={handleMouseMove}>
        <AnimatePresence>
          {particles.map((particle) => (
            <FloatingParticle
              key={particle.id}
              initial={{ x: particle.x, y: particle.y, opacity: 0 }}
              animate={{
                x: [particle.x - 100, particle.x + 100, particle.x - 100],
                y: [particle.y - 100, particle.y + 100, particle.y - 100],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </AnimatePresence>
        <GradientBackground
          style={{ opacity: backgroundOpacity }}
          animate={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%,
              rgba(41, 255, 116, 0.15) 0%,
              rgba(41, 255, 116, 0.1) 20%,
              rgba(0, 0, 0, 0.5) 50%,
              rgba(0, 0, 0, 1) 100%)`,
          }}
          transition={{ type: "tween", ease: "linear", duration: 0.2 }}
        />
        <ScrollProgress>
          <ScrollThumb style={{ height: scaleX }} />
        </ScrollProgress>
        <ContentWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: isLoading ? 3 : 0 }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/terms" element={<TermsSection />} />
          </Routes>
        </ContentWrapper>
      </AppContainer>
    </Router>
  );
}

export default App; 