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
          <SectionTitle>1. 서비스 소개 및 정의</SectionTitle>
          <Text>
            Memento는 개인 및 팀의 시간 관리를 위한 종합적인 생산성 도구입니다. 본 서비스 이용약관("약관")은 
            Memento의 웹사이트, 모바일 애플리케이션, API 서비스 및 기타 관련 소프트웨어와 서비스("서비스")의 
            이용과 관련된 모든 사항을 규정합니다.
          </Text>
          <SubSection>
            <SubTitle>서비스 구성요소</SubTitle>
            <List>
              <li>시간 추적 및 기록 기능</li>
              <li>프로젝트 및 태스크 관리</li>
              <li>팀 협업 및 공유 기능</li>
              <li>데이터 분석 및 리포트 생성</li>
              <li>API 및 타사 서비스 연동</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>2. 서비스 이용 조건</SectionTitle>
          <Text>
            Memento 서비스를 이용함에 있어 다음 조건들을 준수해야 합니다. 본 약관을 위반하는 경우 
            서비스 이용이 제한되거나 계정이 정지될 수 있습니다.
          </Text>
          <SubSection>
            <SubTitle>이용 자격</SubTitle>
            <List>
              <li>만 14세 이상의 개인 또는 법인</li>
              <li>유효한 이메일 주소 및 연락처 정보 제공</li>
              <li>관련 법령 및 본 약관 준수 의사</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>계정 관리 의무</SubTitle>
            <List>
              <li>계정 정보의 정확성 및 최신성 유지</li>
              <li>계정 보안을 위한 비밀번호 관리</li>
              <li>무단 사용 방지를 위한 로그아웃 관리</li>
              <li>계정 도용 의심 시 즉시 신고</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>금지 행위</SubTitle>
            <List>
              <li>서비스의 무단 복제, 배포, 수정</li>
              <li>다른 사용자의 계정 정보 도용</li>
              <li>서비스 서버에 과도한 부하 발생</li>
              <li>불법적이거나 유해한 콘텐츠 업로드</li>
              <li>타인의 지적재산권 침해</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>3. 개인정보 보호 및 데이터 관리</SectionTitle>
          <Text>
            Memento는 사용자의 개인정보 보호를 최우선으로 합니다. 본 서비스는 개인정보보호법 및 
            관련 법령을 준수하여 운영됩니다.
          </Text>
          <SubSection>
            <SubTitle>수집하는 개인정보</SubTitle>
            <List>
              <li>계정 생성 시: 이메일, 이름, 비밀번호</li>
              <li>서비스 이용 시: 시간 기록, 프로젝트 정보, 팀 데이터</li>
              <li>기술적 정보: IP 주소, 브라우저 정보, 디바이스 정보</li>
              <li>결제 정보: 유료 서비스 이용 시 결제 관련 정보</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>데이터 보호 조치</SubTitle>
            <List>
              <li>SSL 암호화를 통한 데이터 전송 보안</li>
              <li>데이터베이스 접근 권한 관리</li>
              <li>정기적인 보안 감사 및 업데이트</li>
              <li>개인정보 접근 로그 관리</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>데이터 보관 및 삭제</SubTitle>
            <List>
              <li>서비스 이용 중인 데이터: 계속 보관</li>
              <li>계정 탈퇴 시: 30일 내 완전 삭제</li>
              <li>법적 요구사항에 따른 보관: 관련 법령 준수</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>4. 서비스 기능 및 제한사항</SectionTitle>
          <Text>
            Memento는 지속적인 서비스 개선을 위해 기능을 추가, 수정 또는 중단할 수 있습니다. 
            서비스 이용에 따른 제한사항을 명확히 이해하시기 바랍니다.
          </Text>
          <SubSection>
            <SubTitle>무료 서비스 제한</SubTitle>
            <List>
              <li>월간 시간 기록 제한: 100시간</li>
              <li>프로젝트 생성 제한: 5개</li>
              <li>팀원 초대 제한: 3명</li>
              <li>데이터 내보내기 제한: 월 1회</li>
              <li>고급 분석 기능 제한</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>유료 서비스 혜택</SubTitle>
            <List>
              <li>무제한 시간 기록 및 프로젝트</li>
              <li>무제한 팀원 초대</li>
              <li>고급 분석 및 리포트 기능</li>
              <li>우선 고객 지원</li>
              <li>API 접근 권한</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>서비스 가용성</SubTitle>
            <List>
              <li>목표 가용성: 월 99.5% 이상</li>
              <li>정기 점검: 월 1회 (사전 공지)</li>
              <li>긴급 점검: 필요 시 즉시 진행</li>
              <li>서비스 중단 시 사전 공지 의무</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>5. 지적재산권 및 라이선스</SectionTitle>
          <Text>
            Memento 서비스와 관련된 모든 지적재산권은 Memento 또는 라이선서에게 귀속됩니다. 
            사용자는 본 약관에 따라 제한된 라이선스를 받습니다.
          </Text>
          <SubSection>
            <SubTitle>Memento의 권리</SubTitle>
            <List>
              <li>서비스 소프트웨어 및 기술에 대한 저작권</li>
              <li>Memento 브랜드 및 로고에 대한 상표권</li>
              <li>서비스 디자인 및 UI에 대한 디자인권</li>
              <li>사용자 데이터의 집계 및 분석 권한</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>사용자의 권리</SubTitle>
            <List>
              <li>본인 데이터에 대한 완전한 소유권</li>
              <li>데이터 내보내기 및 이전 권한</li>
              <li>서비스 개선 제안 권한</li>
              <li>공정한 서비스 이용 권한</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>6. 책임 및 면책</SectionTitle>
          <Text>
            서비스 이용과 관련된 책임의 범위와 한계를 명확히 규정합니다.
          </Text>
          <SubSection>
            <SubTitle>Memento의 책임</SubTitle>
            <List>
              <li>서비스 제공 의무 및 보안 유지</li>
              <li>개인정보 보호 및 데이터 보안</li>
              <li>서비스 장애 시 신속한 복구</li>
              <li>약관에 따른 서비스 제공</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>면책 사항</SubTitle>
            <List>
              <li>천재지변, 전쟁 등 불가항력적 사유로 인한 서비스 중단</li>
              <li>사용자의 부주의로 인한 데이터 손실</li>
              <li>타사 서비스 연동으로 인한 문제</li>
              <li>사용자의 약관 위반으로 인한 손해</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>손해배상 한계</SubTitle>
            <List>
              <li>간접손해, 특별손해, 결과손해 배제</li>
              <li>월 이용료의 3배를 초과하는 배상 제한</li>
              <li>과실상계 원칙 적용</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>7. 약관 변경 및 해지</SectionTitle>
          <Text>
            서비스 개선 및 법령 변경에 따라 약관이 변경될 수 있습니다. 
            변경사항은 사전 공지 후 적용됩니다.
          </Text>
          <SubSection>
            <SubTitle>약관 변경 절차</SubTitle>
            <List>
              <li>변경 사항 사전 공지: 30일 전</li>
              <li>공지 방법: 이메일, 서비스 내 공지</li>
              <li>중대한 변경 시 별도 동의 요청</li>
              <li>변경 약관에 대한 거부권 보장</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>서비스 해지</SubTitle>
            <List>
              <li>사용자 해지: 언제든지 가능 (환불 정책 적용)</li>
              <li>Memento 해지: 약관 위반 시 즉시 해지</li>
              <li>해지 후 데이터 처리: 30일 내 완전 삭제</li>
              <li>해지 시 미사용 요금 환불</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>8. 분쟁 해결 및 관할</SectionTitle>
          <Text>
            서비스 이용과 관련된 분쟁이 발생할 경우의 해결 방법과 관할 법원을 규정합니다.
          </Text>
          <SubSection>
            <SubTitle>분쟁 해결 절차</SubTitle>
            <List>
              <li>1차: 고객 지원팀을 통한 협의</li>
              <li>2차: 중재 또는 조정</li>
              <li>3차: 관할 법원을 통한 소송</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>관할 법원</SubTitle>
            <List>
              <li>본사 소재지 관할 법원</li>
              <li>소비자 거주지 관할 법원 (소비자 분쟁)</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>9. 기타 조항</SectionTitle>
          <Text>
            본 약관에서 규정하지 않은 사항은 관련 법령 및 상관례에 따릅니다.
          </Text>
          <SubSection>
            <SubTitle>준거법</SubTitle>
            <List>
              <li>대한민국 법령</li>
              <li>국제사법에 따른 준거법</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>약관 효력</SubTitle>
            <List>
              <li>일부 조항 무효 시 나머지 조항 유효</li>
              <li>약관 해석 시 사용자에게 유리하게</li>
              <li>불명확한 조항은 Memento가 해석</li>
            </List>
          </SubSection>
        </Section>

        <Section>
          <SectionTitle>10. 문의 및 연락처</SectionTitle>
          <Text>
            본 약관과 관련된 문의사항이나 서비스 이용 중 발생하는 문제에 대해 
            언제든지 연락주시기 바랍니다.
          </Text>
          <SubSection>
            <SubTitle>고객 지원</SubTitle>
            <List>
              <li>이메일: memento.computer@gmail.com</li>
              <li>응답 시간: 영업일 기준 24시간 내</li>
              <li>긴급 문의: 서비스 내 채팅 지원</li>
            </List>
          </SubSection>
          <SubSection>
            <SubTitle>회사 정보</SubTitle>
            <List>
              <li>서비스명: Memento</li>
              <li>서비스 유형: 시간 관리 및 생산성 도구</li>
              <li>최종 업데이트: 2024년 12월</li>
            </List>
          </SubSection>
        </Section>
      </Content>
    </TermsContainer>
  );
}; 