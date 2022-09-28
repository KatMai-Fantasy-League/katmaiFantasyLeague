export const convertFromSQL = (list, picks) => {
  const bracketObj = [
    {
      title: 'Round one',
      seeds: [],
    },
    {
      title: 'Round two',
      seeds: [],
    },
    {
      title: 'Finals',
      seeds: [],
    },
    {
      title: 'Winner',
      seeds: [],
    },
  ];

  // convert picks bear ID to bear name ? can remove
  picks = picks.map((item) => {
    const bear1_name = list.filter((ele) => ele.id === item.bear1_id)[0].name;
    const bear2_name = list.filter((ele) => ele.id === item.bear2_id)[0].name;
    const winner_name = list.filter((ele) => ele.id === item.winner_id)[0].name;
    return { ...item, bear1_name, bear2_name, winner_name };
  });

  // map all entries, except the winner
  for (let i = 0; i < bracketObj.length - 1; i++) {
    const round = picks.filter((ele) => ele.rd[1] === i.toString());
    round.forEach((ele) => {
      const targetObj = {
        id: ele.rd,
        date: new Date().toDateString(),
        teams: [
          {
            id: ele.bear1_id,
            name: ele.bear1_name,
            winner: ele.bear1_id === ele.winner_id,
          },
          {
            id: ele.bear2_id,
            name: ele.bear2_name,
            winner: ele.bear2_id === ele.winner_id,
          },
        ],
      };

      bracketObj[i].seeds.push(targetObj);
    });
  }

  // map additional entry for the winner
  const round = picks.filter((ele) => ele.rd[1] === '2');
  const targetObj = {
    id: 'r3p0',
    date: new Date().toDateString(),
    teams: [
      { id: round[0].winner_id, name: round[0].winner_name, winner: true },
    ],
  };

  bracketObj[3].seeds.push(targetObj);
  return bracketObj;
};
