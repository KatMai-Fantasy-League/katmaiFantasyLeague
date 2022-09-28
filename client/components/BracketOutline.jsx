import {
  Bracket,
  RoundProps,
  Seed,
  SeedItem,
  SeedTeam,
  RenderSeedProps,
} from 'react-brackets';
import React from 'react';

const CustomSeed = ({ seed, breakpoint, roundIndex, seedIndex, props }) => {
  // breakpoint passed to Bracket component
  // to check if mobile view is triggered or not

  // mobileBreakpoint is required to be passed down to a seed

  return (
    <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 15 }}>
      <SeedItem
        style={{
          fontSize: 15,
          backgroundColor: '#D3D3D3',
          color: 'rgb(31 41 55)',
        }}
      >
        <div>
          <SeedTeam>{seed.teams[0]?.name}</SeedTeam>
          {seed.teams[1] && <SeedTeam>{seed.teams[1]?.name}</SeedTeam>}
        </div>
      </SeedItem>
    </Seed>
  );
};

const BracketOutline = (props) => {
  const { myBracket } = props;
  return (
    <Bracket
      rounds={myBracket}
      renderSeedComponent={CustomSeed}
      mobileBreakpoint={1550}
    />
  );
};

export default BracketOutline;
