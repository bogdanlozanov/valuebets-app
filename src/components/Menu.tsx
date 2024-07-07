'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation';
import colors from 'components/colors';

import SoccerSvg from 'components/components/Svgs/SoccerSvg'
import BasketballSvg from 'components/components/Svgs/BasketballSvg'
import TennisSvg from 'components/components/Svgs/TennisSvg'
import VolleyballSvg from 'components/components/Svgs/VolleyballSvg'
import Formula1Svg from 'components/components/Svgs/Formula1Svg'


interface MenuProps {
  sports: string[];
}

const Menu: React.FC<MenuProps> = ({ sports }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [hoveredSport, setHoveredSport] = useState<string | null>(null);

  const handleSportClick = (sport: string) => {
    router.push(`/sports/${sport.toLowerCase()}`);
  };

  const getIcon = (sport: string, color: string) => {
    switch (sport) {
      case 'Soccer':
        return <SoccerSvg stroke={color} />;
      case 'Basketball':
        return <BasketballSvg stroke={color} />;
      case 'Tennis':
        return <TennisSvg stroke={color} />;
      case 'Volleyball':
        return <VolleyballSvg stroke={color} />;
      case 'Formula1':
        return <Formula1Svg stroke={color} />;
    }
  };

  return (
    <MenuContainer>
      <Title>Sports</Title>
      {sports.map((sport, index) => {
        const isSelected = pathname.includes(sport.toLowerCase());
        const isHovered = hoveredSport === sport;
        const color = isSelected ? colors.NeutralLight : isHovered ? colors.Accent : colors.NeutralDark;
        return (
          <MenuItem
            key={index}
            selected={isSelected}
            onClick={() => handleSportClick(sport)}
            onMouseEnter={() => setHoveredSport(sport)}
            onMouseLeave={() => setHoveredSport(null)}
          >
            {getIcon(sport, color)} {sport}
          </MenuItem>
        )
      })}
    </MenuContainer>
  );
};

export default Menu;

const Title = styled.h2`
  color: ${colors.NeutralDark};
  margin-bottom: 16px;
`

const MenuContainer = styled.div`
  background: ${colors.ComplementaryNeutral};
  padding: 10px;
  position: fixed;
  width: 200px;
  height: 100%;
  top: 62.5px;
`;

const MenuItem = styled.div<{ selected: boolean }>`
  /* padding: 0.5rem 0; */
  padding: 8px;
  cursor: pointer;
  background: ${(props) => (props.selected ? colors.NeutralDark : 'transparent')};
  color: ${(props) => (props.selected ? colors.NeutralLight : colors.NeutralDark)};
  border-radius: 8px;
  /* margin-left: 10px; */
  &:hover {
    color: ${(props) => (props.selected ? colors.NeutralLight : colors.Accent)};
  }
  display: flex;
  align-items: center;
  gap: 10px;
`;
