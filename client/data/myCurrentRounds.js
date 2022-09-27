export const rounds = [
  {
    title: 'Round one',
    seeds: [
      {
        id: 0,
        date: new Date().toDateString(),
        teams: [
          { name: 'Team A', winner: false },
          { name: 'Team B', winner: false },
        ],
      },
      {
        id: 1,
        date: new Date().toDateString(),
        teams: [
          { name: 'Team C', winner: false },
          { name: 'Team D', winner: false },
        ],
      },
      {
        id: 2,
        date: new Date().toDateString(),
        teams: [
          { name: 'Team E', winner: false },
          { name: 'Team F', winner: false },
        ],
      },
      {
        id: 3,
        date: new Date().toDateString(),
        teams: [
          { name: 'Team G', winner: false },
          { name: 'Team H', winner: false },
        ],
      },
    ],
  },
  {
    title: 'Round two',
    seeds: [
      {
        id: 0,
        date: new Date().toDateString(),
        teams: [{}, {}],
      },
      {
        id: 1,
        date: new Date().toDateString(),
        teams: [{}, {}],
      },
    ],
  },
  {
    title: 'Finals',
    seeds: [
      {
        id: 1,
        date: new Date().toDateString(),
        teams: [{}, {}],
      },
    ],
  },
  {
    title: 'Winner',
    seeds: [
      {
        id: 1,
        date: new Date().toDateString(),
        teams: [{}],
      },
    ],
  },
];
