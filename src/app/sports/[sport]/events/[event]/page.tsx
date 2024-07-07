'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';
import Layout from '../../../../../components/Layout';
import { ArbitrageData, Arbitrage, EventData, Event } from 'components/models';
import colors from 'components/colors';
import Link from 'next/link';

const fetchEventById = async (id: string): Promise<Event | null> => {
  const res = await fetch('/mockData/event.json');
  const data: EventData = await res.json();
  return Object.values(data).find(event => event.id === Number(id)) || null;
};

const fetchArbitrageByEventId = async (eventId: number): Promise<Arbitrage | null> => {
  const res = await fetch('/mockData/arbitrage.json');
  const data: ArbitrageData = await res.json();
  console.log("look here", { data })
  return Object.values(data).find(arbitrage => arbitrage.event.id === eventId) || null;
};

const EventPage: React.FC = () => {
  const params = useParams();

  const eventId = params.event as string;

  const [event, setEvent] = useState<Event | null>(null);
  const [arbitrage, setArbitrage] = useState<Arbitrage | null>(null);

  useEffect(() => {
    fetchEventById(eventId).then((e) => {
      console.log({ e });

      setEvent(e)
    });
  }, [eventId]);

  useEffect(() => {
    console.log({ event });

    if (event) {
      fetchArbitrageByEventId(event.id).then(setArbitrage);
    }
  }, [event]);
  console.log({ arbitrage });

  if (!event) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container>
        <EventHeader>
          <h2>{event.sport} - {event.league}</h2>
          <p>{event.teams.home} vs. {event.teams.away}</p>
          <p>Start time: {new Date(event.start_time).toLocaleString()}</p>
        </EventHeader>
        {arbitrage && (
          <ArbitrageInfo>
            <h3>Arbitrage Information</h3>
            <p>Profit Percentage: <b style={{ fontSize: '18px' }}>{arbitrage.profit_percentage}%</b></p>
            <h4>Markets</h4>
            {arbitrage.markets.map((market, index) => (
              <Market key={index}>
                <h5>{market.market}</h5>
                {market.outcomes.map((outcome, idx) => (
                  <p key={idx}>{outcome.outcome} - <b>{outcome.odds}</b> Bookmaker: <Link href={outcome.bookmaker.link} passHref>
                    Bet on {outcome.bookmaker.name}
                  </Link></p>
                ))}
              </Market>
            ))}
          </ArbitrageInfo>
        )}
      </Container>
    </Layout>
  );
};

export default EventPage;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  background: ${colors.NeutralDark};
  border-radius: 24px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const EventHeader = styled.div`
  background-color: ${colors.NeutralLight};
  color: ${colors.NeutralDark};
  width: 100%;
  border-radius: 8px 24px;
  padding: 8px 16px;
  text-align: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0;
  }
`;

const ArbitrageInfo = styled.div`
  margin-top: 2rem;
  width: 100%;
  color: ${colors.NeutralLight};
  text-align: center;
  h3 {
    margin-bottom: 1rem;
    text-align: center;
  }

  p {
    margin: 0.5rem 0;
  }
`;

const Market = styled.div`
  background-color: ${colors.NeutralLight};
  color: ${colors.NeutralDark};
  width: 100%;
  border-radius: 8px 24px;
  padding: 8px 16px;
  text-align: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  margin-top: 24px;

  h5 {
    margin-bottom: 20px;
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
  }

  p {
    margin: 0.25rem 0;
    padding: 0.5rem;
    background: ${colors.ComplementaryNeutral};
    border-radius: 4px;
    display: flex;
    justify-content: center;
    gap: 10px;

    a {
      background-color: ${colors.Primary};
      border-radius: 12px;
      padding: 8px;
      font-size: 18px;
      cursor: pointer;
      color: ${colors.white};
    }
  }
`;