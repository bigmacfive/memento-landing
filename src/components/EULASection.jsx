import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const EULAContainer = styled.section`
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

const SubSection = styled.div`
  margin: 1.5rem 0;
`;

const SubTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--text);
`;

export const EULASection = () => {
  return (
    <EULAContainer>
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          End User License Agreement
        </Title>

        <Section>
          <SectionTitle>1. Agreement and Acceptance</SectionTitle>
          <Text>
            This End User License Agreement ("EULA") is a legal agreement between you 
            (either an individual or a single entity) and Memento for the software product 
            identified above, which includes computer software and may include associated media, 
            printed materials, and online or electronic documentation ("Software Product").
          </Text>
          <Text>
            By installing, copying, or otherwise using the Software Product, you agree to be 
            bound by the terms of this EULA. If you do not agree to the terms of this EULA, 
            do not install or use the Software Product.
          </Text>
        </Section>

        <Section>
          <SectionTitle>2. Grant of License</SectionTitle>
          <SubSection>
            <SubTitle>License Scope</SubTitle>
            <Text>
              Memento grants you a limited, non-exclusive, non-transferable, revocable license 
              to use the Software Product solely for your personal or business time management 
              purposes in accordance with this EULA.
            </Text>
          </SubSection>
          <SubSection>
            <SubTitle>Permitted Uses</SubTitle>
            <List>
              <li>Install and use the Software Product on authorized devices</li>
              <li>Access and use the Software Product through web browsers</li>
              <li>Use the Software Product for time tracking and project management</li>
              <li>Share data with authorized team members</li>
              <li>Export your data in supported formats</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>License Restrictions</SubTitle>
            <List>
              <li>You may not copy, modify, or create derivative works</li>
              <li>You may not reverse engineer, decompile, or disassemble</li>
              <li>You may not rent, lease, or sublicense the Software Product</li>
              <li>You may not use for commercial purposes without proper licensing</li>
              <li>You may not remove or alter proprietary notices</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>3. Software Product Description</SectionTitle>
          <Text>
            The Software Product is a comprehensive time management and productivity tool 
            designed to help individuals and teams track time, manage projects, and improve 
            productivity through various features and functionalities.
          </Text>
          <SubSection>
            <SubTitle>Core Features</SubTitle>
            <List>
              <li>Time tracking and recording capabilities</li>
              <li>Project and task management tools</li>
              <li>Team collaboration and sharing features</li>
              <li>Data analysis and reporting functionality</li>
              <li>API access for third-party integrations</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Service Tiers</SubTitle>
            <List>
              <li>Free tier: Basic features with usage limitations</li>
              <li>Premium tier: Advanced features and unlimited usage</li>
              <li>Enterprise tier: Custom features and dedicated support</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>4. Intellectual Property Rights</SectionTitle>
          <Text>
            The Software Product and all related intellectual property rights are and shall 
            remain the exclusive property of Memento and its licensors.
          </Text>
          <SubSection>
            <SubTitle>Ownership</SubTitle>
            <List>
              <li>All copyrights, patents, trademarks, and trade secrets</li>
              <li>Source code, object code, and documentation</li>
              <li>User interface design and graphics</li>
              <li>Algorithms, methods, and processes</li>
              <li>Brand names, logos, and service marks</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>User Content</SubTitle>
            <List>
              <li>You retain ownership of your data and content</li>
              <li>You grant Memento license to process your data for service provision</li>
              <li>You are responsible for the content you upload or create</li>
              <li>You must not upload infringing or illegal content</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>5. Updates and Modifications</SectionTitle>
          <SubSection>
            <SubTitle>Automatic Updates</SubTitle>
            <Text>
              The Software Product may automatically download and install updates from time 
              to time. These updates are designed to improve, enhance, and further develop 
              the Software Product and may take the form of bug fixes, enhanced functions, 
              new software modules, and completely new versions.
            </Text>
          </SubSection>
          <SubSection>
            <SubTitle>Update Terms</SubTitle>
            <List>
              <li>Updates are subject to the same license terms</li>
              <li>You may be required to accept additional terms for major updates</li>
              <li>Some updates may require additional payment</li>
              <li>You can opt out of automatic updates in settings</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>6. Data and Privacy</SectionTitle>
          <Text>
            Your privacy is important to us. The collection, use, and protection of your 
            personal information is governed by our Privacy Policy, which is incorporated 
            by reference into this EULA.
          </Text>
          <SubSection>
            <SubTitle>Data Processing</SubTitle>
            <List>
              <li>We process your data to provide the Software Product</li>
              <li>We implement appropriate security measures</li>
              <li>We do not sell your personal information</li>
              <li>You control your data and can export or delete it</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Data Location</SubTitle>
            <List>
              <li>Data may be stored in multiple locations for redundancy</li>
              <li>We comply with applicable data protection laws</li>
              <li>Cross-border transfers are protected by appropriate safeguards</li>
              <li>You can request information about data storage locations</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>7. Service Availability and Support</SectionTitle>
          <SubSection>
            <SubTitle>Service Availability</SubTitle>
            <List>
              <li>We strive for 99.5% monthly uptime</li>
              <li>Scheduled maintenance with advance notice</li>
              <li>Emergency maintenance when necessary</li>
              <li>Service status updates during outages</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Support Services</SubTitle>
            <List>
              <li>Email support: memento.computer@gmail.com</li>
              <li>Feature requests: memento.featurebase.app</li>
              <li>Documentation and help resources</li>
              <li>Community forums and user guides</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>8. Disclaimers and Limitations</SectionTitle>
          <SubSection>
            <SubTitle>Warranty Disclaimers</SubTitle>
            <Text>
              THE SOFTWARE PRODUCT IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. 
              MEMENTO DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
              LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
              PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </Text>
          </SubSection>
          <SubSection>
            <SubTitle>Limitation of Liability</SubTitle>
            <List>
              <li>Memento shall not be liable for indirect, incidental, or consequential damages</li>
              <li>Total liability shall not exceed the amount paid for the Software Product</li>
              <li>No liability for data loss or corruption</li>
              <li>No liability for service interruptions or downtime</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>9. Termination</SectionTitle>
          <Text>
            This EULA is effective until terminated. You may terminate this EULA at any 
            time by destroying all copies of the Software Product and ceasing all use.
          </Text>
          <SubSection>
            <SubTitle>Termination by Memento</SubTitle>
            <List>
              <li>Immediate termination for EULA violations</li>
              <li>30-day notice for service discontinuation</li>
              <li>Immediate termination for illegal use</li>
              <li>Termination for non-payment of fees</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Effect of Termination</SubTitle>
            <List>
              <li>All rights granted under this EULA cease immediately</li>
              <li>You must cease all use of the Software Product</li>
              <li>Your data will be deleted within 30 days</li>
              <li>No refunds for partial periods</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>10. Governing Law and Disputes</SectionTitle>
          <Text>
            This EULA shall be governed by and construed in accordance with the laws of 
            the Republic of Korea, without regard to its conflict of law provisions.
          </Text>
          <SubSection>
            <SubTitle>Dispute Resolution</SubTitle>
            <List>
              <li>First attempt resolution through direct communication</li>
              <li>Mediation or arbitration for unresolved disputes</li>
              <li>Litigation in competent courts as last resort</li>
              <li>Venue in Seoul, Republic of Korea</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>11. General Provisions</SectionTitle>
          <SubSection>
            <SubTitle>Entire Agreement</SubTitle>
            <Text>
              This EULA constitutes the entire agreement between you and Memento concerning 
              the Software Product and supersedes all prior or contemporaneous agreements.
            </Text>
          </SubSection>
          <SubSection>
            <SubTitle>Severability</SubTitle>
            <Text>
              If any provision of this EULA is held to be unenforceable, the remaining 
              provisions shall continue in full force and effect.
            </Text>
          </SubSection>
          <SubSection>
            <SubTitle>Waiver</SubTitle>
            <Text>
              The failure of Memento to enforce any right or provision of this EULA 
              shall not constitute a waiver of such right or provision.
            </Text>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>12. Contact Information</SectionTitle>
          <Text>
            If you have any questions about this EULA or need to contact us, please use 
            the following information:
          </Text>
          <SubSection>
            <SubTitle>Contact Details</SubTitle>
            <List>
              <li>Email: memento.computer@gmail.com</li>
              <li>Feature Requests: memento.featurebase.app</li>
              <li>Response time: Within 24 hours on business days</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Legal Inquiries</SubTitle>
            <List>
              <li>For legal matters: memento.computer@gmail.com</li>
              <li>Subject line: "EULA Legal Inquiry"</li>
              <li>Include your account information for faster response</li>
            </List>
          </SubSection>
        </Section>
      </Content>
    </EULAContainer>
  );
};