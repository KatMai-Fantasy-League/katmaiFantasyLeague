import {
  Bracket,
  RoundProps,
  Seed,
  SeedItem,
  SeedTeam,
  RenderSeedProps,
} from 'react-brackets';
import React from 'react';

import { rounds } from '../data/currentRounds';
import { bgcolor } from '@mui/system';

const CustomSeed = ({ seed, breakpoint, roundIndex, seedIndex }) => {
  // breakpoint passed to Bracket component
  // to check if mobile view is triggered or not

  // mobileBreakpoint is required to be passed down to a seed
  return (
    <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 15 }}>
      <SeedItem
        style={{ fontSize: 15, backgroundColor: 'gray', color: 'white' }}
      >
        <button>
          <SeedTeam style={{ color: 'red' }}>
            {seed.teams[0]?.name || 'NO TEAM '}
          </SeedTeam>
          <SeedTeam>{seed.teams[1]?.name || 'NO TEAM '}</SeedTeam>
        </button>
      </SeedItem>
    </Seed>
  );
};

const BracketOutline = () => {
  //....
  return <Bracket rounds={rounds} renderSeedComponent={CustomSeed} />;
};

export default BracketOutline;
