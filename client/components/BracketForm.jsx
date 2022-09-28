import React, { useEffect, useState } from 'react';
import { convertToSQL } from '../utils/sqlConvertTo';

function BracketForm(props) {
  const [rdIdx, setRdIdx] = useState(0);
  const { myBracket, setMyBracket } = props;

  // for rounds drop-down
  const roundOptions = myBracket.map((item, idx) => {
    if (idx !== myBracket.length - 1) {
      return (
        <option key={idx} idx={idx}>
          {item.title}
        </option>
      );
    }
  });

  // form to select each round's winners in bracket
  const matchupSelections = myBracket[rdIdx].seeds.map((item, idx) => {
    const handleChange = (e) => {
      const newBracket = [...myBracket];

      if (e.target.value) {
        myBracket[rdIdx].seeds[idx].teams.forEach((ele) => {
          if (ele.name === e.target.value) {
            ele.winner = true;
          } else {
            ele.winner = false;
          }
        });

        myBracket[rdIdx + 1].seeds[Math.floor(idx / 2)].teams[
          idx % 2 === 0 ? 0 : 1
        ].name = e.target.value;

        myBracket[rdIdx + 1].seeds[Math.floor(idx / 2)].teams[
          idx % 2 === 0 ? 0 : 1
        ].winner = false;

        setMyBracket(newBracket);
      }
    };

    const pairIdx = idx;

    // pair of radio buttons between each section of bracket
    const pairItems = item.teams.map((item, idx) => {
      return (
        <div key={idx}>
          <input
            type='radio'
            name={pairIdx}
            value={item.name ? item.name : ''}
            checked={item.winner}
            className='mr-5'
            onChange={handleChange}
          />
          <label>{item.name}</label>
        </div>
      );
    });

    return (
      <div className='my-5' key={idx}>
        {pairItems}
      </div>
    );
  });

  const handleClick = () => {
    const forDB = convertToSQL(myBracket);
    console.log(forDB);
  };

  return (
    <div>
      <h2 className='my-5'>My FBB Picks</h2>
      <label className='mr-5'>Round Number</label>
      <select
        className='px-5 text-start'
        onChange={(e) => setRdIdx(e.target.selectedIndex)}
      >
        {roundOptions}
      </select>
      <form>
        {matchupSelections}
        <button
          className='bg-blue-sapphire-100 hover:underline text-white font-bold py-2 px-4 rounded'
          type='Button'
          onClick={handleClick}
        >
          Submit Your Choices!
        </button>
      </form>
    </div>
  );
}
export default BracketForm;
