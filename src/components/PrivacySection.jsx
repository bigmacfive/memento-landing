import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FooterSection } from './FooterSection.jsx';

const PrivacyContainer = styled.section`
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

export const PrivacySection = () => {
  return (
    <>
      <PrivacyContainer>
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Privacy Policy
        </Title>

        <Section>
          <SectionTitle>1. Introduction</SectionTitle>
          <Text>
            This Privacy Policy describes how Memento ("we," "our," or "us") collects, uses, 
            and protects your personal information when you use our time management services. 
            We are committed to protecting your privacy and ensuring the security of your data.
          </Text>
          <Text>
            By using Memento services, you agree to the collection and use of information 
            in accordance with this policy. This policy is effective as of December 2024.
          </Text>
        </Section>

        <Section>
          <SectionTitle>2. Information We Collect</SectionTitle>
          <SubSection>
            <SubTitle>Personal Information</SubTitle>
            <List>
              <li>Account information: Email address, name, password</li>
              <li>Profile information: Profile picture, timezone, language preferences</li>
              <li>Contact information: Phone number (optional), address (optional)</li>
              <li>Payment information: Credit card details, billing address (for paid services)</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Usage Data</SubTitle>
            <List>
              <li>Time tracking records: Start/end times, project associations, descriptions</li>
              <li>Project data: Project names, descriptions, team assignments</li>
              <li>Team collaboration data: Team member information, shared projects</li>
              <li>Analytics data: Usage patterns, feature preferences, performance metrics</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Technical Information</SubTitle>
            <List>
              <li>Device information: Device type, operating system, browser type</li>
              <li>IP address and location data</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Log files: Access times, pages viewed, error logs</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>3. How We Use Your Information</SectionTitle>
          <SubSection>
            <SubTitle>Service Provision</SubTitle>
            <List>
              <li>Provide and maintain our time management services</li>
              <li>Process your time tracking data and generate reports</li>
              <li>Enable team collaboration and project management</li>
              <li>Send service-related notifications and updates</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Service Improvement</SubTitle>
            <List>
              <li>Analyze usage patterns to improve our services</li>
              <li>Develop new features and functionality</li>
              <li>Conduct research and analytics</li>
              <li>Optimize performance and user experience</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Communication</SubTitle>
            <List>
              <li>Send important service updates and announcements</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Provide customer support and technical assistance</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Legal Compliance</SubTitle>
            <List>
              <li>Comply with applicable laws and regulations</li>
              <li>Protect against fraud and security threats</li>
              <li>Enforce our terms of service</li>
              <li>Respond to legal requests and court orders</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>4. Information Sharing and Disclosure</SectionTitle>
          <Text>
            We do not sell, trade, or rent your personal information to third parties. 
            We may share your information only in the following circumstances:
          </Text>
          <SubSection>
            <SubTitle>With Your Consent</SubTitle>
            <List>
              <li>When you explicitly authorize us to share your information</li>
              <li>When you choose to share data with team members</li>
              <li>When you integrate with third-party services</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Service Providers</SubTitle>
            <List>
              <li>Cloud hosting and infrastructure providers</li>
              <li>Payment processing services</li>
              <li>Analytics and monitoring services</li>
              <li>Customer support and communication tools</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Legal Requirements</SubTitle>
            <List>
              <li>When required by law or government authorities</li>
              <li>To protect our rights, property, or safety</li>
              <li>To investigate fraud or security issues</li>
              <li>In connection with business transfers or mergers</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>5. Data Security</SectionTitle>
          <Text>
            We implement comprehensive security measures to protect your personal information 
            from unauthorized access, alteration, disclosure, or destruction.
          </Text>
          <SubSection>
            <SubTitle>Technical Security Measures</SubTitle>
            <List>
              <li>SSL/TLS encryption for all data transmission</li>
              <li>Database encryption at rest</li>
              <li>Multi-factor authentication for account access</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Secure coding practices and code reviews</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Access Controls</SubTitle>
            <List>
              <li>Role-based access controls for staff</li>
              <li>Regular access reviews and permissions audits</li>
              <li>Secure authentication and session management</li>
              <li>Monitoring and logging of access activities</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Incident Response</SubTitle>
            <List>
              <li>24/7 security monitoring and threat detection</li>
              <li>Incident response procedures and team</li>
              <li>Data breach notification protocols</li>
              <li>Regular security training for employees</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>6. Data Retention and Deletion</SectionTitle>
          <SubSection>
            <SubTitle>Retention Periods</SubTitle>
            <List>
              <li>Account data: Retained while account is active</li>
              <li>Time tracking data: Retained for 7 years (for business records)</li>
              <li>Analytics data: Retained for 2 years</li>
              <li>Log files: Retained for 90 days</li>
              <li>Payment information: Retained as required by law</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Data Deletion</SubTitle>
            <List>
              <li>Account deletion: Complete deletion within 30 days</li>
              <li>Data export: Available before account deletion</li>
              <li>Backup deletion: Completed within 90 days</li>
              <li>Third-party data: Deletion from service providers</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>7. Your Rights and Choices</SectionTitle>
          <SubSection>
            <SubTitle>Access and Control</SubTitle>
            <List>
              <li>Access your personal information</li>
              <li>Update or correct your information</li>
              <li>Delete your account and data</li>
              <li>Export your data in standard formats</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Communication Preferences</SubTitle>
            <List>
              <li>Opt out of marketing communications</li>
              <li>Control notification settings</li>
              <li>Manage email preferences</li>
              <li>Set privacy and sharing preferences</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Data Processing</SubTitle>
            <List>
              <li>Object to certain data processing</li>
              <li>Request data portability</li>
              <li>Withdraw consent for data processing</li>
              <li>Lodge complaints with supervisory authorities</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>8. International Data Transfers</SectionTitle>
          <Text>
            Your information may be transferred to and processed in countries other than 
            your own. We ensure appropriate safeguards are in place for such transfers.
          </Text>
          <SubSection>
            <SubTitle>Transfer Safeguards</SubTitle>
            <List>
              <li>Standard contractual clauses for data transfers</li>
              <li>Adequacy decisions for certain countries</li>
              <li>Certification schemes and codes of conduct</li>
              <li>Regular assessment of transfer mechanisms</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>9. Children's Privacy</SectionTitle>
          <Text>
            Our services are not intended for children under 14 years of age. We do not 
            knowingly collect personal information from children under 14. If you become 
            aware that a child has provided us with personal information, please contact us.
          </Text>
        </Section>

        <Section>
          <SectionTitle>10. Changes to This Policy</SectionTitle>
          <Text>
            We may update this Privacy Policy from time to time. We will notify you of 
            any changes by posting the new policy on this page and updating the "effective date."
          </Text>
          <SubSection>
            <SubTitle>Notification Methods</SubTitle>
            <List>
              <li>Email notification for significant changes</li>
              <li>In-service notification banner</li>
              <li>Updated policy posted on our website</li>
              <li>30-day advance notice for material changes</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>11. Contact Us</SectionTitle>
          <Text>
            If you have any questions about this Privacy Policy or our data practices, 
            please contact us using the following methods:
          </Text>
          <SubSection>
            <SubTitle>Contact Information</SubTitle>
            <List>
              <li>Email: memento.computer@gmail.com</li>
              <li>Feature Request & Feedback: memento.featurebase.app</li>
              <li>Response time: Within 24 hours on business days</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Data Protection Officer</SubTitle>
            <List>
              <li>For privacy-specific inquiries: memento.computer@gmail.com</li>
              <li>Subject line: "Privacy Policy Inquiry"</li>
              <li>Include your account email for faster response</li>
            </List>
          </SubSection>
        </Section>
      </Content>
    </PrivacyContainer>
    <FooterSection />
  </>
);
};