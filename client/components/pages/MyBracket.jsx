import React, { useEffect } from 'react';
import BracketOutline from '../BracketOutline';
import BracketForm from '../BracketForm';
import { convertFromSQL } from '../../utils/sqlConvertFrom';

function MyBracket(props) {
  useEffect(() => {
    const getBracket = async () => {
      const response = await fetch('api/myBracket');
      const data = await response.json();
      return data;
    };

    const getBears = async () => {
      const response = await fetch('api/bears');
      const data = await response.json();
      return data;
    };

    let bracketData;
    let bearsList;

    const setData = async () => {
      bracketData = await getBracket();
      bearsList = await getBears();
      setMyBracket(convertFromSQL(bearsList, bracketData));
    };
    setData();
  }, []);

  const { myBracket, setMyBracket } = props;

  return (
    <div className='mx-auto px-auto'>
      <div className='mb-5'>
        <h2 className='mb-5'>My FBB Bracket</h2>

        <BracketOutline myBracket={myBracket} />
      </div>
      <BracketForm myBracket={myBracket} setMyBracket={setMyBracket} />
    </div>
  );
}
export default MyBracket;
