'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';
import { Event, EventData } from 'components/models';
import Layout from 'components/components/Layout';
import EventCard from 'components/components/EventCard';

const fetchEventsBySport = async (sport: string): Promise<Event[]> => {
  const res = await fetch('/mockData/event.json');
  const data: EventData = await res.json();
  return Object.values(data).filter((event) => event.sport.toLowerCase() === sport.toLowerCase());
};

const EventList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SportPage: React.FC = () => {
  const params = useParams();
  const sport = params.sport as string;

  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    if (sport) {
      fetchEventsBySport(sport).then(setEvents);
    }
  }, []);


  return (
    <Layout>
      <div>
        <h2>{
          sport.charAt(0).toUpperCase() + sport.slice(1)
        } Events</h2>
        <EventList>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </EventList>
      </div>
    </Layout>
  );
};

export default SportPage;
