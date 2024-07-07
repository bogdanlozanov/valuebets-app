export interface Teams {
    home: string;
    away: string;
}

export interface Odds {
    home_win: number;
    draw: number;
    away_win: number;
}

export interface Event {
  id: number;
  sport: string;
  league: string;
  teams: Teams;
  start_time: string;
  odds: Odds;
  bookmakers: Bookmaker[];
}

export interface EventData {
  [key: string]: Event;
}


export interface Outcome {
  outcome: string;
  odds: number;
  bookmaker: Bookmaker
}

export interface Market {
  market: string;
  outcomes: Outcome[];
}

export interface Arbitrage {
  id: number;
  event: Event;
  markets: Market[];
  profit_percentage: number;
  updated_at: string;
}

export interface ArbitrageData {
  [key: string]: Arbitrage;
}

export interface Bookmaker {
  link: string;
  name: string;
}