import React, { useEffect } from 'react';
import BracketOutline from '../BracketOutline';
import BracketForm from '../BracketForm';
import { convertFromSQL } from '../../utils/sqlConvertFrom';

function MyBracket(props) {
  useEffect(async () => {
    const getBears = async () => {
      const response = await fetch('api/myBracket');
      const data = await response.json();
      return data;
    };

    const getBracket = async () => {
      const response = await fetch('api/bears');
      const data = await response.json();
      return data;
    };

    const bracketData = await getBracket();
    const bearsList = await getBears();

    setMyBracket(convertFromSQL(bearsList, bracketData));
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
