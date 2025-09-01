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

const SubSection = styled.div`
  margin: 1.5rem 0;
`;

const SubTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--text);
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
          <SectionTitle>1. Service Introduction and Definition</SectionTitle>
          <Text>
            Memento is a comprehensive productivity tool designed for individual and team time management. 
            These Terms of Service ("Terms") govern all aspects of your access to and use of Memento's 
            services, including our website, mobile applications, API services, and any other related 
            software and services ("Services").
          </Text>
          <SubSection>
            <SubTitle>Service Components</SubTitle>
            <List>
              <li>Time tracking and recording functionality</li>
              <li>Project and task management tools</li>
              <li>Team collaboration and sharing features</li>
              <li>Data analysis and report generation</li>
              <li>API and third-party service integrations</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>2. Service Usage Conditions</SectionTitle>
          <Text>
            You must comply with the following conditions when using Memento services. Violation of 
            these terms may result in service restrictions or account suspension.
          </Text>
          <SubSection>
            <SubTitle>Eligibility Requirements</SubTitle>
            <List>
              <li>Individuals or entities aged 14 or older</li>
              <li>Valid email address and contact information provision</li>
              <li>Commitment to comply with relevant laws and these terms</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Account Management Obligations</SubTitle>
            <List>
              <li>Maintain accuracy and currency of account information</li>
              <li>Manage passwords for account security</li>
              <li>Manage logout to prevent unauthorized use</li>
              <li>Report suspected account theft immediately</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Prohibited Activities</SubTitle>
            <List>
              <li>Unauthorized copying, distribution, or modification of services</li>
              <li>Theft of other users' account information</li>
              <li>Causing excessive load on service servers</li>
              <li>Uploading illegal or harmful content</li>
              <li>Infringement of others' intellectual property rights</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>3. Privacy Protection and Data Management</SectionTitle>
          <Text>
            Memento prioritizes user privacy protection. Our service operates in compliance with 
            privacy protection laws and related regulations.
          </Text>
          <SubSection>
            <SubTitle>Personal Information Collected</SubTitle>
            <List>
              <li>Account creation: Email, name, password</li>
              <li>Service usage: Time records, project information, team data</li>
              <li>Technical information: IP address, browser information, device information</li>
              <li>Payment information: Payment-related information for paid services</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Data Protection Measures</SubTitle>
            <List>
              <li>SSL encryption for secure data transmission</li>
              <li>Database access permission management</li>
              <li>Regular security audits and updates</li>
              <li>Personal information access log management</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Data Retention and Deletion</SubTitle>
            <List>
              <li>Active service data: Continuous retention</li>
              <li>Account deletion: Complete deletion within 30 days</li>
              <li>Legal requirement retention: Compliance with relevant laws</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>4. Service Features and Limitations</SectionTitle>
          <Text>
            Memento may add, modify, or discontinue features for continuous service improvement. 
            Please clearly understand the limitations associated with service usage.
          </Text>
          <SubSection>
            <SubTitle>Free Service Limitations</SubTitle>
            <List>
              <li>Monthly time recording limit: 100 hours</li>
              <li>Project creation limit: 5 projects</li>
              <li>Team member invitation limit: 3 members</li>
              <li>Data export limit: Once per month</li>
              <li>Advanced analytics features restricted</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Paid Service Benefits</SubTitle>
            <List>
              <li>Unlimited time recording and projects</li>
              <li>Unlimited team member invitations</li>
              <li>Advanced analytics and reporting features</li>
              <li>Priority customer support</li>
              <li>API access permissions</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Service Availability</SubTitle>
            <List>
              <li>Target availability: 99.5% or higher monthly</li>
              <li>Regular maintenance: Monthly (advance notice provided)</li>
              <li>Emergency maintenance: Immediate when necessary</li>
              <li>Obligation to provide advance notice for service suspension</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>5. Intellectual Property Rights and Licensing</SectionTitle>
          <Text>
            All intellectual property rights related to Memento services belong to Memento or 
            licensors. Users receive limited licenses according to these terms.
          </Text>
          <SubSection>
            <SubTitle>Memento's Rights</SubTitle>
            <List>
              <li>Copyrights to service software and technology</li>
              <li>Trademark rights to Memento brand and logo</li>
              <li>Design rights to service design and UI</li>
              <li>Permission for user data aggregation and analysis</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>User Rights</SubTitle>
            <List>
              <li>Complete ownership of personal data</li>
              <li>Permission for data export and transfer</li>
              <li>Permission to suggest service improvements</li>
              <li>Right to fair service usage</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>6. Liability and Disclaimers</SectionTitle>
          <Text>
            This section clearly defines the scope and limitations of liability related to service usage.
          </Text>
          <SubSection>
            <SubTitle>Memento's Responsibilities</SubTitle>
            <List>
              <li>Service provision obligation and security maintenance</li>
              <li>Privacy protection and data security</li>
              <li>Rapid recovery in case of service failures</li>
              <li>Service provision according to terms</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Disclaimer Items</SubTitle>
            <List>
              <li>Service suspension due to force majeure events like natural disasters or war</li>
              <li>Data loss due to user negligence</li>
              <li>Problems arising from third-party service integrations</li>
              <li>Damages caused by user violation of terms</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Limitation of Damages</SubTitle>
            <List>
              <li>Exclusion of indirect, special, and consequential damages</li>
              <li>Compensation limited to 3 times monthly usage fee</li>
              <li>Application of comparative negligence principle</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>7. Terms Modification and Termination</SectionTitle>
          <Text>
            Terms may be modified due to service improvements and legal changes. 
            Changes will be applied after advance notice.
          </Text>
          <SubSection>
            <SubTitle>Terms Modification Procedure</SubTitle>
            <List>
              <li>Advance notice of changes: 30 days prior</li>
              <li>Notification methods: Email, in-service notice</li>
              <li>Separate consent request for significant changes</li>
              <li>Guarantee of right to reject modified terms</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Service Termination</SubTitle>
            <List>
              <li>User termination: Available anytime (refund policy applies)</li>
              <li>Memento termination: Immediate termination for terms violation</li>
              <li>Data processing after termination: Complete deletion within 30 days</li>
              <li>Refund of unused fees upon termination</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>8. Dispute Resolution and Jurisdiction</SectionTitle>
          <Text>
            This section defines the resolution methods and jurisdiction for disputes 
            arising from service usage.
          </Text>
          <SubSection>
            <SubTitle>Dispute Resolution Process</SubTitle>
            <List>
              <li>First step: Consultation through customer support team</li>
              <li>Second step: Mediation or arbitration</li>
              <li>Third step: Litigation through competent court</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Competent Court</SubTitle>
            <List>
              <li>Court with jurisdiction over headquarters location</li>
              <li>Court with jurisdiction over consumer residence (consumer disputes)</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>9. Miscellaneous Provisions</SectionTitle>
          <Text>
            Matters not regulated in these terms shall follow relevant laws and commercial practices.
          </Text>
          <SubSection>
            <SubTitle>Governing Law</SubTitle>
            <List>
              <li>Laws of the Republic of Korea</li>
              <li>Governing law according to international private law</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>Terms Effectiveness</SubTitle>
            <List>
              <li>Remaining terms valid if some provisions are invalid</li>
              <li>Terms interpretation favorable to users</li>
              <li>Memento to interpret unclear provisions</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>10. Contact Information</SectionTitle>
          <Text>
            Please contact us anytime for questions about these terms or problems 
            arising during service usage.
          </Text>
          <SubSection>
            <SubTitle>Customer Support</SubTitle>
            <List>
              <li>Email: memento.computer@gmail.com</li>
              <li>Feature Requests & Feedback: memento.featurebase.app</li>
              <li>Response time: Within 24 hours on business days</li>
            </List>
          </SubSection>
        </Section>
      </Content>
    </TermsContainer>
  );
}; 