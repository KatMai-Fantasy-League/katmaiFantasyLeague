export const convertToSQL = (picks) => {
  const result = [];
  for (let i = 0; i < picks.length - 1; i++) {
    picks[i].seeds.forEach((ele) => {
      const resultObj = {};
      resultObj.rd = ele.id;
      resultObj.bear1_id = ele.teams[0].id;
      resultObj.bear2_id = ele.teams[1].id;
      ele.teams[0].winner && (resultObj.winner_id = ele.teams[0].id);
      ele.teams[1].winner && (resultObj.winner_id = ele.teams[1].id);
      result.push(resultObj);
    });
  }
  return result;
};
