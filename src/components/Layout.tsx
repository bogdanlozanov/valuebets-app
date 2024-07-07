'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import { EventData } from 'components/models';
import colors from 'components/colors';
import { useRouter } from 'next/navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const fetchSports = async (): Promise<string[]> => {
  const res = await fetch('/mockData/event.json');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data: EventData = await res.json();
  const sports = Object.values(data).map((event) => event.sport);
  return Array.from(new Set(sports)); // Remove duplicates
};


const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const [sports, setSports] = useState<string[]>([]);

  useEffect(() => {
    fetchSports().then(setSports);
  }, []);
  return (
    <Container>
      <Header>
        <Logo onClick={() => {
          router.push(`/`);
        }}>Livebet</Logo>
      </Header>
      <MainWrapper>
        <Menu sports={sports} />
        <Main>
          <ContentContainer>
            {children}
          </ContentContainer>
          <Footer>© 2024 Livebet</Footer>
        </Main>
        <Menu sports={sports} />
      </MainWrapper>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  background: ${colors.Secondary};
  color: ${colors.NeutralDark};
  padding: 10px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const MainWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  margin-left: 200px;
  flex-direction: column;
`;

const Footer = styled.footer`
  background: ${colors.black};
  color: ${colors.ComplementaryNeutral};
  padding: 1rem;
  text-align: center;
  margin-top: auto;
  width: 100%;
`;

const ContentContainer = styled.section`
  padding: 20px;
`

const Logo = styled.h1`
  cursor: pointer;
`