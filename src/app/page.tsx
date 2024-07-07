'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';
import { Event, EventData } from 'components/models';
import Layout from 'components/components/Layout';
import EventCard from 'components/components/EventCard';

const fetchAllEvents = async (): Promise<Event[]> => {
  const res = await fetch('/mockData/event.json');
  const data: EventData = await res.json();
  return Object.values(data);
};

const HomePage: React.FC = () => {
  const params = useParams();
  const sport = params.sport as string;

  const [events, setEvents] = useState<Event[]>([]);
  const [sports, setSports] = useState<string[]>([]);

  useEffect(() => {
    fetchAllEvents().then((events) => {
      setEvents(events);
      const uniqueSports = Array.from(new Set(events.map(event => event.sport.toLowerCase())));
      setSports(uniqueSports);
    });
  }, []);

  const filteredEvents = sport
    ? events.filter(event => event.sport.toLowerCase() === sport.toLowerCase())
    : events;

  return (
    <Layout>
      <div>
        {sport && <h2>{sport.charAt(0).toUpperCase() + sport.slice(1)} Events</h2>}
        {sports.map((sport) => (
          <div key={sport}>
            <h2>{sport.charAt(0).toUpperCase() + sport.slice(1)} Events</h2>
            <EventList>
              {filteredEvents
                .filter(event => event.sport.toLowerCase() === sport)
                .map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
            </EventList>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;

const EventList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
`;
