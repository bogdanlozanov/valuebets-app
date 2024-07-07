'use client';

import React from 'react';
import styled from 'styled-components';
import { Event } from 'components/models';
import { useRouter } from 'next/navigation';
import colors from 'components/colors';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/sports/${event.sport.toLowerCase()}/events/${event.id}`);
  };
  return (
    <Card onClick={handleCardClick}>
      <Header>
        <HeaderContainer>
          <HeaderText>{new Date(event.start_time).toLocaleString()}</HeaderText>
          <HeaderText>{event.league}</HeaderText>
        </HeaderContainer>
      </Header>
      <Content>
        <Teams>
          <Team>{event.teams.home}</Team>
          <Team>{event.teams.away}</Team>
        </Teams>
        <Odds>
          <Odd>
            <Result>1</Result>
            <OddsData>{event.odds.home_win}</OddsData>
          </Odd>
          <Odd>
            <Result>X</Result>
            <OddsData>{event.odds.draw}</OddsData>
          </Odd>
          <Odd>
            <Result>2</Result>
            <OddsData>{event.odds.away_win}</OddsData>
          </Odd>
        </Odds>
      </Content>
    </Card>
  );
};

export default EventCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  overflow: hidden;
  width: 550px;
  margin: 1rem;
  cursor: pointer;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), 0 3px 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
  background-image: url("https://assets.gmlinteractive.com/2024/06/Default-Theme-Betano-REBRANDING-Final-01.png");

  @keyframes moveUp {
    0% {
      top: 0;
    }

    100% {
      top: -3px;
    }
  }

  &:hover {
    animation: moveUp 0.1s ease forwards;
    box-shadow: 0 2px 4px ${colors.Secondary}, 0 3px 10px ${colors.Accent};
  }
`;

const Header = styled.div`
  color: ${colors.NeutralDark};
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderContainer = styled.div`
  background-color: ${colors.NeutralLight};
  color: ${colors.NeutralDark};
  width: 100%;
  border-radius: 8px 24px;
  padding: 8px 16px;
  text-align: center;
  justify-content: space-between;
  display: flex;
  font-size: 24px;
`

const Content = styled.div`
  padding: 1rem;
`;

const Teams = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 12px;
`;

const Team = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: ${colors.NeutralLight};
`;

const Odds = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  gap: 10px;
`;

const Odd = styled.div`
  background: ${colors.ComplementaryNeutral};
  border-radius: 10px 20px;
  padding: 8px;
  text-align: center;
  width: 100%;
`;

const HeaderText = styled.h3`
  font-weight: 700;
  font-size: 20px;
`

const Result = styled.div`
  font-size: 16px;
`

const OddsData = styled.div`
  font-size: 18px;
  font-weight: 700;
`